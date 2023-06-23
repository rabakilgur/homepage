// This is a monkey-patched version of the "use-persisted-state" package by donavon (https://github.com/donavon/use-persisted-state).
// Patched by Robin Garbe

import { useState, useEffect, useRef, useCallback } from "preact/hooks";
import useEventListener from "@use-it/event-listener";

/* ----------  createGlobalState:  ---------- */

const globalState = {};

const createGlobalState = (key, thisCallback, initialValue) => {
	if (!globalState[key]) {
		globalState[key] = { callbacks: [], value: initialValue };
	}
	globalState[key].callbacks.push(thisCallback);
	return {
		deregister() {
			const arr = globalState[key].callbacks;
			const index = arr.indexOf(thisCallback);
			if (index > -1) {
				arr.splice(index, 1);
			}
		},
		emit(value) {
			if (globalState[key].value !== value) {
				globalState[key].value = value;
				globalState[key].callbacks.forEach((callback) => {
					if (thisCallback !== callback) {
						callback(value);
					}
				});
			}
		},
	};
};

/* ----------  usePersistedState:  ---------- */

const usePersistedState = (initialState: any, key: string, { get, set }) => {
	const globalState = useRef<any>(null);
	const [state, setState] = useState(() => get(key, initialState));

	// subscribe to `storage` change events
	useEventListener("storage", ({ key: k, newValue }: any) => {
		if (k === key) {
			const newState = JSON.parse(newValue);
			if (state !== newState) {
				setState(newState);
			}
		}
	});

	// only called on mount
	useEffect(() => {
		// register a listener that calls `setState` when another instance emits
		globalState.current = createGlobalState(key, setState, initialState);

		return () => {
			globalState.current.deregister();
		};
	}, [initialState, key]);

	const persistentSetState = useCallback((newState: any) => {
		const newStateValue =
			typeof newState === "function" ? newState(state) : newState;

		// persist to localStorage
		set(key, newStateValue);

		setState(newStateValue);

		// inform all of the other instances in this tab
		globalState.current.emit(newState);
	}, [state, set, key]);

	return [state, persistentSetState];
};

/* ----------  createStorage:  ---------- */

const createStorage = (provider: Storage) => ({
	get(key: string, defaultValue: any) {
		const json = provider.getItem(key);
		// eslint-disable-next-line no-nested-ternary
		return json === null || typeof json === "undefined"
			? typeof defaultValue === "function"
			? defaultValue()
			: defaultValue
			: JSON.parse(json);
	},
	set(key: string, value: any) {
		provider.setItem(key, JSON.stringify(value));
	},
});

/* ----------  createPersistentState hook:  ---------- */

const getProvider = () => {
	if (typeof globalThis !== "undefined" && globalThis.localStorage) {
		return globalThis.localStorage;
	}
	// eslint-disable-next-line no-undef
	if (typeof globalThis !== "undefined" && globalThis.localStorage) {
		// eslint-disable-next-line no-undef
		return globalThis.localStorage;
	}
	if (typeof window !== "undefined" && window.localStorage) {
		return window.localStorage;
	}
	if (typeof localStorage !== "undefined") {
		return localStorage;
	}
	return null;
};

const createPersistedState = (key: string, provider = getProvider()) => {
	if (provider) {
		const storage = createStorage(provider);
		return (initialState: any) => usePersistedState(initialState, key, storage);
	}
	return useState;
};

export default createPersistedState;
