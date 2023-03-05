import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import S from "./TextScramble.module.scss";

const chars = "!<>-_\\/[]{}—=+*^?#________";
const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

export default function ScrambleText({ texts, timeout = 1700, ...props }: { texts: string, timeout?: number, [prop: string]: any }) {
	const scramblePhrases = texts.split(",").map((text: string) => text.trim());
	const [text, setText] = useState(scramblePhrases[0]);
	const frameRequestRef = useRef<number>();
	let scrambleCounter = 0;
	let frame: number;
	let queue: { from: string, to: string, start: number, end: number, char?: string }[];
	let resolve: (value?: unknown) => void;

	const updateText = (newText: string) => {
		const oldText: string = text;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise(res => resolve = res);
		queue = [];
		for (let i = 0; i < length; i++) {
			const from = oldText[i] || "";
			const to = newText[i] || "";
			const start = Math.floor(Math.random() * 40);
			const end = start + Math.floor(Math.random() * 40);
			queue.push({ from, to, start, end });
		}
		cancelAnimationFrame(frameRequestRef.current);
		frame = 0;
		update();
		return promise;
	}

	const update = () => {
		let output = "";
		let complete = 0;
		for (let i = 0, n = queue.length; i < n; i++) {
			let { from, to, start, end, char } = queue[i];
			if (frame >= end) {
				complete++;
				output += to;
			} else if (frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = randomChar();
					queue[i].char = char;
				}
				output += `<span class="${S.dud}">${char}</span>`;
			} else {
				output += from;
			}
		}
		setText(output);
		if (complete === queue.length) {
			resolve();
		} else {
			frameRequestRef.current = requestAnimationFrame(update);
			frame++;
		}
	}

	useEffect(() => {
		let timeoutId: string | number | NodeJS.Timeout;
		const scrambleNext = () => {
			updateText(scramblePhrases[scrambleCounter]).then(() => {
				timeoutId = setTimeout(scrambleNext, timeout ?? 1500);
			});
			scrambleCounter = (scrambleCounter + 1) % scramblePhrases.length;
		};
		scrambleNext();
		return () => {
			cancelAnimationFrame(frameRequestRef.current);
			clearTimeout(timeoutId);
		}
	}, []);
	return <span dangerouslySetInnerHTML={{ __html: text }} {...props}></span>;
}
