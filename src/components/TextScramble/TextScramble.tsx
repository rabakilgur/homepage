import { h } from "preact";
// import { useEffect, useRef } from "react";
import { useEffect, useRef } from "preact/hooks";
import TextScramble from "../../lib/js/text_scramble";

export default function ScrambleText({ texts, timeout, ...props }: { texts: string, timeout?: number, [prop: string]: any }) {
	const scrambleElRef = useRef<HTMLSpanElement>(null);
	const scramblePhrases = texts.split(",").map((text: string) => text.trim());
	let scrambleCounter = 0;
	useEffect(() => {
		const scrambleFx = new TextScramble(scrambleElRef.current);
		const scramble_next = () => {
			scrambleFx.setText(scramblePhrases[scrambleCounter]).then(() => {
				setTimeout(scramble_next, timeout ?? 1500);
			});
			scrambleCounter = (scrambleCounter + 1) % scramblePhrases.length;
		};
		scramble_next();
	}, []);
	return <span className="scramble_text" ref={scrambleElRef}>{scramblePhrases[0]}</span>;
}
