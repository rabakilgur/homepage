import { Divider } from "@nextui-org/react";
import Tooltip from "../Tooltip/Tooltip";
import S from "./WhatIDo.module.scss";

const iconSize = 64;

const whatIDo = [
	{
		name: (
			<>
				<h4 className={S.ttTitle}>Frontend</h4>
				<div>React & Next.js & Preact</div>
				<div>Vue & Nuxt</div>
				<div>Bootstrap</div>
			</>
		),
		img: "../../assets/whatIDo/005-landing-page.png",
		scale: 1.2,
	},
	{
		name: (
			<>
				<h4 className={S.ttTitle}>Backend</h4>
				<div>Node.js & Deno</div>
				<div>Ruby on Rails</div>
			</>
		),
		img: "../../assets/whatIDo/006-development.png",
		scale: 1.2,
	},
	{
		name: (
			<>
				<h4 className={S.ttTitle}>Mobile</h4>
				<div>React Native</div>
				<div>Native Android</div>
				<div>Ionic Framework</div>
				<div>Cordova / PhoneGap</div>
			</>
		),
		img: "../../assets/whatIDo/007-app-development.png",
		scale: 1.2,
	},
	{
		name: (
			<>
				<h4 className={S.ttTitle}>Database</h4>
				<div>PostgreSQL</div>
				<div>MySQL</div>
				<div>S3 Buckets</div>
			</>
		),
		img: "../../assets/whatIDo/003-cloud.png",
		scale: 1.2,
	},
	{
		name: (
			<>
				<h4 className={S.ttTitle}>DevOps</h4>
				<div>Docker</div>
				<div>Git</div>
				<div>Agile Development</div>
			</>
		),
		img: "../../assets/whatIDo/009-project.png",
		scale: 1.2,
	},
	{
		name: (
			<>
				<h4 className={S.ttTitle}>Design</h4>
				<div>Modern Web-Design</div>
				<div>Adobe Creative Cloud</div>
			</>
		),
		img: "../../assets/whatIDo/008-ruler.png",
		scale: 1.2,
	},
];

const skills = [
	{
		name: "TypeScript & JavaScript",
		img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
		scale: 1.5,
	},
	{
		name: "Ruby on Rails",
		img: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
		scale: 1.2,
	},
	{
		name: "Deno",
		img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg",
		scale: 1.0,
	},
	{
		name: "React & Next.js & React Native",
		img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		scale: 1.5,
	},
	{
		name: "Node.js",
		img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
		scale: 1.3,
	},
	{
		name: "Python",
		img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
		scale: 1.1,
	},
	{
		name: "Electron",
		img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg",
		scale: 1.3,
	},
	{
		name: "PostgreSQL",
		img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
		scale: 1.2,
	},
	{
		name: "PHP",
		img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
		scale: 1.0,
	},
	{
		name: "Vue & Nuxt",
		img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
		scale: 1.1,
	},
	// {
	// 	name: "SASS/SCSS & CSS",
	// 	img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
	// 	scale: 1.4,
	// },
	// {
	// 	name: "Bootstrap",
	// 	img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
	// 	scale: 1.3
	// },
	{
		name: "Docker",
		img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic-480x411.png.webp",
		scale: 1.1,
	},
	{
		name: (
			<>
				Adobe Creative Cloud
				<br />
				(Illustrator, Photoshop, InDesign)
			</>
		),
		img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg",
		scale: 1.1,
	},
];

function SkillBox({ name, img, scale }) {
	return (
		<div className={S.iconWrapper} style={`--scale: ${scale}`}>
			<Tooltip tt={name}>
				<div className={S.iconBox}>
					<img src={img} width={iconSize * scale} height={iconSize * scale} alt="" />
				</div>
			</Tooltip>
		</div>
	);
}

export default function WhatIDo() {
	return (
		<>
			<div className={S.wrapper}>
				{whatIDo.map((skill, i) => (
					<SkillBox {...skill} key={i} />
				))}
			</div>
			<Divider />
			<div className={S.wrapper}>
				{skills.map((skill, i) => (
					<SkillBox {...skill} key={i} />
				))}
			</div>
		</>
	);
}
