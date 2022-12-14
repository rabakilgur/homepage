import { ReactElement, ReactNode, useEffect } from "react";
import S from "./ProjectCard.module.scss";

const ProjectCard = ({ color, image, link, item, darkenImage, right, ...props }: { color?: string, image?: string, link?: string, item?: any, darkenImage?: Boolean, right?: Boolean, [prop: string]: any }) => {
	item = typeof item === "string" ? <span>{item}</span> : item;
	return (
		<div className={`${S.projcard} ${color ? `projcard-${color}` : ""} ${right ? S.projcardRight : ""}`} onClick={() => link ? window.open(link) : null}>
			<div className={S.projcardInnerbox}>
				<div className={S.projcardImg + (darkenImage ? ` ${S["projcardImgDarker"]}` : "")} style={image ? { backgroundImage: `url("${image}")` } : {}}>
					{(image || !item) ? "" : item}
				</div>
				<div className={S.projcardTextbox}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

ProjectCard.Title = Object.assign(({ text, ...props }: { text: string | Element | ReactElement, [prop: string]: any }) => {
	return <div className={S.projcardTitle}>{text as ReactNode}</div>;
}, { displayName: "ProjectCardTitle" });

ProjectCard.Subtitle = Object.assign(({ text, ...props }: { text: string | Element | ReactElement, [prop: string]: any }) => {
	return <div className={S.projcardSubtitle}>{text as ReactNode}</div>;
}, { displayName: "ProjectCardSubitle" });

ProjectCard.Description = Object.assign(({ text, ...props }: { text: string | Element | ReactElement, [prop: string]: any }) => {

	// TODO add ellipsis to description

	return (
		<>
			<div className={S.projcardBar}></div>
			<div className={S.projcardDescription}>{text as ReactNode}</div>
		</>
	);
}, { displayName: "ProjectCardDescription" });

ProjectCard.Tags = Object.assign(({ tags, ...props }: { tags: string, [prop: string]: any }) => {
	const tagArray = tags.split(",").map((tag: string) => tag.trim());
	return (
		<div className={S.projcardTagbox}>
			{tagArray.map((tag: string) => <span className={S.projcardTag} key={tag}>{tag}</span>)}
		</div>
	);
}, { displayName: "ProjectCardTags" });

export default ProjectCard;
