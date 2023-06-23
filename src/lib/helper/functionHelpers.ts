const throttleSet = new Set<string>();

/**
 * Throttle the given callback function so that any subsequent calls that happen inside of the delay time window are ignored. In other words, this blocks the function from being executed again for the given delay.
 * @param {Function} callback - The function to be called.
 * @param {number} delay - The amount of time in milliseconds to wait before allowing a call to the callback function again.
 * @param {string} id - An identifier for the timeout so that multiple different functions can be throttled at the same time.
 * @returns A function that will call the callback function.
 */
export function throttle(callback: Function, delay: number, id: string) {
	return (...args) => {
		if (throttleSet.has(id)) return;

		callback(...args);
		throttleSet.add(id);
		setTimeout(() => {
			throttleSet.delete(id);
		}, delay);
	}
}


const debounceMap = new Map<string, number>();

/**
 * Debounce the given callback function so that its execution is delayed for the given time, and if a subsequent call happens inside of the delay time window, forget the first call and debounce the new one. In other words, this delays the function from being executed for (at least) the given delay and if multiple calls happen in that time, only the most recent will be executed.
 * @param {Function} callback - The function to be called.
 * @param {number} delay - The amount of time in milliseconds to delay the callback call and to wait for other calls.
 * @param {string} id - An identifier for the timeout so that multiple different functions can be debounced at the same time.
 * @returns A function that will call the callback function after a delay.
 */
export function debounce(callback: Function, delay: number, id: string) {
	return (...args) => {
		if (debounceMap.has(id)) clearTimeout(debounceMap.get(id));

		const timeout = setTimeout(() => {
			debounceMap.delete(id);
			callback(...args);
		}, delay);
		debounceMap.set(id, timeout);
	}
}
