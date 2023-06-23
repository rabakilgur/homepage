import { useEffect, useRef, useState } from "preact/hooks";
import S from "./TextScramble.module.scss";

const chars = "!<>-_\\/[]{}—=+*^?#________";
const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

const padArray = (array: any[], size = array.length) => [...array, ...Array(size - array.length).fill(null)];

export default function ScrambleText(
	{ texts, timeout = 1700, speed = 50, ...props }:
	{ texts: string, timeout?: number, speed?: number, [prop: string]: any }
) {
	const scramblePhrases = texts.split(",").map((text: string) => text.trim());
	const longestPhraseLength = Math.max(...scramblePhrases.map((phrase) => phrase.length));
	const scrambleStates = scramblePhrases.map((phrase) => padArray(phrase.split(""), longestPhraseLength))
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const targetChars = scrambleStates[(currentPhraseIndex + 1) % scrambleStates.length];
	const [currentChars, setCurrentChars] = useState(scrambleStates[0]);
	const renderRef = useRef<() => void>(() => {});
	let intermediateTimeout: number;
	let animationFrame: number;

	const render = () => {
		if (render === renderRef.current) {
			const possibleIndexes: number[] = [];
			currentChars.forEach((char, i) => {if (char !== targetChars[i]) possibleIndexes.push(i)});
			const index = possibleIndexes[Math.floor(Math.random() * possibleIndexes.length)];
			let newChars: Array<string | object> = [];

			if (currentChars[index] !== targetChars[index]) {
				const newChar = (currentChars[index] === null) || (typeof currentChars[index] === "string")
					? <span className={S.dud}>{randomChar()}</span>
					: targetChars[index];
				newChars = Object.assign([], currentChars, { [index]: newChar });
				setCurrentChars(newChars);
			}
			if (newChars.join("") !== targetChars.join("")) {
				intermediateTimeout = setTimeout(() => {
					animationFrame = requestAnimationFrame(renderRef.current)
				}, speed);
			} else {
				setCurrentPhraseIndex((oldIndex) => (oldIndex + 1) % scrambleStates.length);
			}
		}
	};

	useEffect(() => {
		return () => {
			cancelAnimationFrame(animationFrame);
			clearTimeout(intermediateTimeout);
		}
	}, []);

	useEffect(() => {
		const initialTimout = setTimeout(() => {
			animationFrame = requestAnimationFrame(renderRef.current);
		}, timeout);
		return () => {
			clearTimeout(initialTimout);
		}
	}, [currentPhraseIndex]);

	useEffect(() => {
		renderRef.current = render;
	});

	return <span {...props}>{currentChars}</span>;
}

// TODO: Fix bug where a HMR during a transition would break the entire animation (meaning that multiple updates whould be executed at the same time)
