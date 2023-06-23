import S from "./Timeline.module.scss";
import C from "classnames";

const Timeline = ({ children }) => (
	<div className={S.timelineContainer}>
		<ul className={C(S.timeline, S.timelineSplit)}>{children}</ul>
	</div>
);

Timeline.Item = ({ title, info, text, marker }: { title: string, info: string, text: string, marker?: "default" | "outlined" }) => (
	<li className={C(S.timelineItem, marker === "outlined" && S.markerOutline)}>
		<div className={S.timelineInfo}>
			<span>{info}</span>
		</div>
		<div className={S.timelineMarker}></div>
		<div className={S.timelineContent}>
			<h3 className={S.timelineTitle}>{title}</h3>
			<p>{text}</p>
		</div>
	</li>
);

export default Timeline;
