import S from "./ProjectCard.module.scss";

const ProjectCard = ({ color, image, link, item, ...props }: { color?: string, image?: string, link?: string, item?: any, [prop: string]: any }) => {
	item = typeof item === "string" ? <span>{item}</span> : item;
	return (
		<div className={`${S.projcard} ${color ? `projcard-${color}` : ""}`} onClick={() => link ? window.open(link) : null}>
			<div className={S.projcardInnerbox}>
				<div className={S.projcardImg} style={image ? { backgroundImage: `url("${image}")` } : {}}>
					{(image || !item) ? "" : item}
				</div>
				<div className={S.projcardTextbox}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

ProjectCard.Title = ({ text, ...props }: { text: string, [prop: string]: any }) => {
	return <div className={S.projcardTitle}>{text}</div>;
};

ProjectCard.Subtitle = ({ text, ...props }: { text: string, [prop: string]: any }) => {
	return <div className={S.projcardSubtitle}>{text}</div>;
};

ProjectCard.Description = ({ text, ...props }: { text: string, [prop: string]: any }) => {
	return (
		<>
			<div className={S.projcardBar}></div>
			<div className={S.projcardDescription}>{text}</div>
		</>
	);
};

ProjectCard.Tags = ({ tags, ...props }: { tags: string, [prop: string]: any }) => {
	const tagArray = tags.split(",").map((tag: string) => tag.trim());
	return (
		<div className={S.projcardTagbox}>
			{tagArray.map((tag: string) => <span className={S.projcardTag} key={tag}>{tag}</span>)}
		</div>
	);
};

export default ProjectCard;
