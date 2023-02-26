import { h } from "preact";
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
/*
<li className={S.timelineItem}>
	<div className={S.timelineInfo}>
		<span>Mär 2020 - heute</span>
	</div>
	<div className={S.timelineMarker}></div>
	<div className={S.timelineContent}>
		<h3 className={S.timelineTitle}>ARZ Darmstadt</h3>
		<p>Entwickler im Bereich Management Information Systems als Werksstudent bei Apotheken-Rechen-Zentrum GmbH</p>
	</div>
</li>
<li className={S.timelineItem}>
	<div className={S.timelineInfo}>
		<span>Nov 2015 - Mär 2019</span>
	</div>
	<div className={S.timelineMarker}></div>
	<div className={S.timelineContent}>
		<h3 className={S.timelineTitle}>EKHN</h3>
		<p>Entwickler als Werksstudent bei der Kirchenverwaltung der Evangelischen Kirche in Hessen und Nassau</p>
	</div>
</li>
<li className={C(S.timelineItem, S.markerOutline)}>
	<div className={S.timelineInfo}>
		<span>Okt 2015 - heute</span>
	</div>
	<div className={S.timelineMarker}></div>
	<div className={S.timelineContent}>
		<h3 className={S.timelineTitle}>Studium an der TU Darmstadt</h3>
		<p>Student im Bachelor of Science im Fachbereich Informatik</p>
	</div>
</li>
*/