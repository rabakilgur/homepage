import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { Fragment, h } from "preact";
import S from "./CVWrapper.module.scss";
import { useRef } from "preact/hooks";

export default function CVWrapper() {
	const { setVisible, bindings } = useModal();
	const cvRef = useRef<HTMLDivElement>();

	function printCV() {
		// If developing locally and the style is inserted in the document, get it by string and insert it using a <style> tag; if the styles are bundled and linked, get all <link> tags and insert them as is into the print window:
		const headNodes = Array.from(document.head.children);
		const localCvStyle = headNodes.find((tag) => tag.tagName === "STYLE" && tag.textContent.includes(S.content))?.textContent;
		const linkedCvStyles = headNodes.filter((tag) => tag.tagName === "LINK" && tag.getAttribute("rel") === "stylesheet" && tag.getAttribute("href").startsWith("/bundle."));
		const cvStyles = localCvStyle ? `<style>${localCvStyle}</style>` : linkedCvStyles.reduce((string, link) => string + link.outerHTML, "");

		const printWindow = window.open("", "PRINT", "height=650, width=1050");
		printWindow.document.write(`
			<html>
				<head>
					<title>Robin Garbe – Lebenslauf</title>
					${cvStyles}
					<style>
						html, body, .${S.content} {
							height: unset !important;
							width: unset !important;
							font-size: 11px !important;
						}
					</style>
				</head>
				<body>
					<div class="${S.content}">
						${cvRef.current.innerHTML}
					</div>
				</body>
			</html>
		`);

		printWindow.document.close(); // necessary for IE >= 10
		printWindow.focus(); // necessary for IE >= 10

		printWindow.print();

		setTimeout(() => {
			// printWindow.close();
		}, 700);

		return true;
	}

	return (
		<>
			<Button color="secondary" style="margin: auto" onPress={() => setVisible(true)}>
				CV anzeigen
			</Button>

			<Modal
				scroll
				fullScreen
				closeButton
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				{...bindings}
				>
				{/* <Modal.Header>
					<Text id="modal-title" size={18}>
						Lebenslauf
					</Text>
				</Modal.Header> */}
				<Modal.Body className={S.body}>
					<Text id="modal-description">
						<div ref={cvRef} className={S.content}>
							<div></div>
							<div className={S.header}>
								<h2>Robin Garbe</h2>
								{/* <span>Anschrift: Adelungstraße 28, 64283 Darmstadt</span> */}
								<span>E-Mail: <a href="mailto:arbeit@robin-garbe.de">arbeit@robin-garbe.de</a></span>
								<span>Telefon: <a href="tel:+4915902450748">+49 159 / 0245 0758</a></span>
								<span>Geboren am 24.02.1997</span>
								<span>Webseite: <a href="https://robin-garbe.de" target="_blank" rel="noreferrer">robin-garbe.de</a></span>
								<span>LinkedIn: <a href="https://www.linkedin.com/in/robin-garbe/" target="_blank" rel="noreferrer">linkedin.com/in/robin-garbe</a></span>
							</div>

							<div className={S.category}><h3>Erfahrung</h3></div>
							<div>
								<h4>04/2022 - heute</h4>
								<h5>Softwareingenieur im Bereich Management Information Systems</h5>
								<h6>Apotheken-Rechen-Zentrum GmbH (Darmstadt)</h6>
								<ul>
									<li>Agile Softwareentwicklung</li>
									<li>Testgetriebene Full-Stack Entwicklung (TDD) von Web-Applikationen</li>
									<li>Arbeit mit Ruby, Rails, HTML, CSS, SCSS, JavaScript, Typescript, Docker, Git, PostgreSQL, SQLite</li>
									<li>Android App-Entwicklung mit Java, Kotlin und React Native</li>
								</ul>

								<h4>03/2020 - 03/2022</h4>
								<h5>Entwickler im Bereich Management Information Systems als Werksstudent</h5>
								<h6>Apotheken-Rechen-Zentrum GmbH (Darmstadt)</h6>
								<ul>
									<li>Agile Softwareentwicklung</li>
									<li>Testgetriebene Full-Stack Entwicklung (TDD) von Web-Applikationen</li>
									<li>Arbeit mit Ruby, Rails, HTML, CSS, SCSS, JavaScript, Docker, Git, PostgreSQL, SQLite</li>
									<li>Android App-Entwicklung mit Java und Kotlin</li>
								</ul>

								<h4>11/2015 - 03/2019</h4>
								<h5>Entwickler als Werksstudent</h5>
								<h6>Evangelische Kirche in Hessen und Nassau (Darmstadt)</h6>
								<ul>
									<li>Print- und Web-Design mit Photoshop, Illustrator, InDesign, Word, HTML, CSS, JavaScript, PHP</li>
									<li>Analyse und automatisierte Datenverarbeitung mit Excel und VBA</li>
								</ul>
							</div>

							<div className={S.category}><h3>Bildungsweg</h3></div>
							<div>
								<h4>04/2022 - heute</h4>
								<h5>Master of Science in Internet- und Web-basierte Systeme</h5>
								<h6>Technische Universität Darmstadt</h6>

								<h4>10/2016 - 03/2022</h4>
								<h5>Bachelor of Science in Informatik</h5>
								<h6>Technische Universität Darmstadt</h6>
								<ul>
									<li>Bachelorarbeit: „Potenzialanalyse von benutzergesteuerten Anpassungs- und Analysewerkzeugen für Wertschöpfungsketten“ (gerade in Arbeit)</li>
									<li>Bachelorpraktikum: „Mojito, Caipirinha, Sex on the Beach - Die Rezepte des BAR-Robots müssen auf eine Plattform“</li>
								</ul>

								<h4>08/2007 - 07/2015</h4>
								<h5>Abitur</h5>
								<h6>Gymnasium Gernsheim</h6>
								<ul>
									<li>Leistungsfächer Mathematik und Physik</li>
								</ul>
							</div>

							<div className={S.category}><h3>Sonstige Erfahrung</h3></div>
							<div>
								<h4>03/2020 – 10/2020</h4>
								<h5>Praktikum Embedded Systems</h5>
								<h6>TU Darmstadt & Fachgebiet ESA</h6>
								<ul>
									<li>Programmierung von eingebetteter Hardware um einen Cortex-M0 Microcontroller</li>
									<li>Entwicklung einer SoC-Application und Bau einer dazugehörigen Cocktail-Maschine</li>
									<li>SWD, ChibiOS, Linux, SoC</li>
								</ul>

								<h4>10/2019 – 03/2020</h4>
								<h5>Praktikum Visual Computing</h5>
								<h6>Fraunhofer IGD Darmstadt</h6>
								<ul>
									<li>Entwicklung einer Applikation zur Erkennung und Visualisierung von Nutzerpräferenzen in multidimensionalen Umgebungen mittels Machine Learning</li>
									<li>JavaScript, TypeScript, React, BrainJS, HTML, CSS, Node, Electron</li>
								</ul>

								<h4>10/2018 – 03/2019</h4>
								<h5>Bachelor-Praktikum</h5>
								<h6>TU Darmstadt & Fachgebiet Datenverarbeitung in der Konstruktion</h6>
								<ul>
									<li>Entwicklung einer Applikation zur Erkennung und Visualisierung von Nutzerpräferenzen in multidimensionalen Umgebungen mittels Machine Learning</li>
									<li>JavaScript, TypeScript, React, BrainJS, HTML, CSS, Node, Electron</li>
								</ul>
							</div>

							<div className={S.category}><h3>Auslandserfahrung</h3></div>
							<div>
								<h4>2009</h4>
								<h5>England-Austausch zum Impington Village College</h5>
							</div>

							<div className={S.category}><h3>Kenntnisse</h3></div>
							<div className={S.expertiseWrapper}>
								<h5>Sprachen:</h5>
								<span>Deutsch – Muttersprache</span>
								<span>Englisch – Verhandlungssicher</span>

								<h5>Programmiersprachen:</h5>
								<span>JavaScript und TypeScript – Zehn Jahre, sehr regelmäßig</span>
								<span>PHP – Sieben Jahre</span>
								<span>Ruby – Drei Jahre, regelmäßig</span>
								<span>Kotlin – Zwei Jahre</span>
								<span>VBA – Zwei Jahre</span>
								<span>C / C++ – Ein Jahr</span>
								<span>Python – Ein Jahr</span>
								<span>Java – Zwei Jahre</span>

								<h5>Frameworks:</h5>
								<span>React, Next.js und Preact – Drei Jahre, sehr regelmäßig</span>
								<span>Ruby on Rails – Drei Jahre, regelmäßig</span>
								<span>Node und Deno – Drei Jahre</span>
								<span>React Native und PhoneGap / Cordova – Zwei Jahre</span>
								<span>Electron – Ein Jahr</span>
								<span>Bootstrap – Fünf Jahre</span>
								<span>jQuery – Fünf Jahre</span>

								<h5>Datenbanken:</h5>
								<span>SQLite, MySQL, PostgreSQL</span>

								<h5>DevOps:</h5>
								<span>Git, GitHub, GitLab und Gitea</span>
								<span>Jira und Trello</span>
								<span>Docker</span>

								<h5>Betriebssysteme:</h5>
								<span>Windows, Linux</span>

								<h5>Nennenswertes:</h5>
								<span>JWT, JSON, HTML, CSS, SCSS, REST, XML, YAML, SVG, SQL, JamStack</span>

								<h5>Software:</h5>
								<span>Photoshop, Illustrator, InDesign, Acrobat</span>
								<span>Teams, Word, Excel, PowerPoint, Outlook, OneNote</span>
								<span>WordPress</span>
								<span>Postman</span>
								<span>XAMPP Server, WAMP Server, Puma, Nginx</span>
								<span>OPC-UA</span>
							</div>

							<div></div>
							<div className={S.footer}><span>Darmstadt, 12.05.2023</span><span>Robin Garbe</span></div>
						</div>
					</Text>
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onPress={() => setVisible(false)}>
						Schließen
					</Button>
					<Button auto onPress={() => { printCV(); /*setVisible(false)*/ }}>
						Drucken
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
