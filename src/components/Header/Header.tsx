import ColorBlob from "../ColorBlob/ColorBlob";
import ParticleWave from "../ParticleWave/ParticleWave";
import ScrambleText from "../TextScramble/TextScramble";
import S from "./Header.module.scss";

export default function Header() {
	return (
		<header className={S.header}>
			<ParticleWave />
			<ColorBlob color="#0170FE" size={425} right="70%" bottom="5%" />
			<ColorBlob color="#0088FF" size={350} top="5%" left="70%" />
			<h1>
				<span className={S.shadow}>
					<ScrambleText texts="Hallo, Hi, Bonjour, Hello, Hola, Moshimoshi" />
				</span>
				<span className={S.shadow}>ich bin</span>
				<span className={S.shadow}>
					<span>Robin Garbe</span>
					<span>Robin Garbe</span>
				</span>
			</h1>
		</header>
	);
}
