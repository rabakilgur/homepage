import { h } from "preact";
import S from "./Heading.module.scss";

export default function Heading(props) {
	return <div className={S.heading}><h2>{props.children}</h2></div>;
}
