// This is a monkey-patched version of @fisch0920s patched version (https://github.com/transitive-bullshit/use-dark-mode) of the "use-dark-mode" hook by donavon (https://github.com/donavon/use-dark-mode).
// Patched by Robin Garbe

import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import useEventListener from "@use-it/event-listener";
import createPersistedState from "./createPersistedState";

/* ----------  Initialize:  ---------- */

const noop = () => {};

const mockElement = {
	classList: {
		add: noop,
		remove: noop,
	},
};

const preferDarkQuery = "(prefers-color-scheme: dark)";

const initialize = (storageKey, storageProvider, glbl = globalThis) => {
	const usePersistedDarkModeState = storageKey
		? createPersistedState(storageKey, storageProvider)
		: useState;

	const mql: MediaQueryList = glbl.matchMedia ? glbl.matchMedia(preferDarkQuery) : {} as MediaQueryList;

	const mediaQueryEventTarget = {
		addEventListener: (_, handler) => mql.addListener && mql.addListener(handler),
		removeEventListener: (_, handler) => mql.removeListener && mql.removeListener(handler),
	};

	const isColorSchemeQuerySupported = mql.media === preferDarkQuery;

	const getInitialValue = usersInitialState => (
		isColorSchemeQuerySupported ? mql.matches : usersInitialState
	);

	// Mock element if SSR else real body element.
	const defaultElement = (glbl.document && glbl.document.documentElement) || mockElement;

	const getDefaultOnChange = (
		element = defaultElement,
		classNameDark = "dark",
		classNameLight = "light"
	) => (isDark: boolean) => {
		element.classList.add(isDark ? classNameDark : classNameLight);
		element.classList.remove(isDark ? classNameLight : classNameDark);
		element.style.colorScheme = isDark ? "dark" : "light";
	};

	return {
		usePersistedDarkModeState,
		getDefaultOnChange,
		mediaQueryEventTarget,
		getInitialValue,
	};
};

/* ----------  useDarkMode hook:  ---------- */

const useDarkMode = (
	initialValue = false,
	{
		element = undefined,
		classNameDark = undefined,
		classNameLight = undefined,
		onChange = undefined,
		storageKey = "darkMode",
		storageProvider = undefined,
		global = undefined,
	} = {}
) => {
	const {
		usePersistedDarkModeState,
		getDefaultOnChange,
		getInitialValue,
		mediaQueryEventTarget,
	} = useMemo(
		() => initialize(storageKey, storageProvider, global),
		[storageKey, storageProvider, global]
	);

	const [state, setState] = usePersistedDarkModeState(getInitialValue(initialValue));

	const stateChangeCallback = useMemo(
		() => onChange || getDefaultOnChange(element, classNameDark, classNameLight),
		[onChange, element, classNameDark, classNameLight, getDefaultOnChange]
	);

	// Call the onChange handler
	useEffect(() => {
		stateChangeCallback(state);
	}, [stateChangeCallback, state]);

	// Listen for media changes and set state.
	useEventListener(
		"change",
		({ matches }: any) => setState(matches),
		mediaQueryEventTarget as any
	);

	return {
		value: state,
		enable: useCallback(() => setState(true), [setState]),
		disable: useCallback(() => setState(false), [setState]),
		toggle: useCallback(() => setState(current => !current), [setState]),
	};
};

export default useDarkMode;
