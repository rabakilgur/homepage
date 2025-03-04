import C from "classnames";
import { JSX } from "preact";
import S from "./Timeline.module.scss";

const Timeline = ({ children }) => (
  <div className={S.timelineContainer}>
    <ul className={C(S.timeline, S.timelineSplit)}>{children}</ul>
  </div>
);

Timeline.Item = ({ title, info, text, marker, markerIcon }: { title: string; info: string; text: string; marker?: "default" | "outlined"; markerIcon?: JSX.Element }) => (
  <li className={C(S.timelineItem, marker === "outlined" && S.markerOutline, markerIcon && S.markerIcon)}>
    <div className={S.timelineInfo}>
      <span>{info}</span>
    </div>
    <div className={S.timelineMarker}>{markerIcon}</div>
    <div className={S.timelineContent}>
      <h3 className={S.timelineTitle}>{title}</h3>
      <p>{text}</p>
    </div>
  </li>
);

export default Timeline;
