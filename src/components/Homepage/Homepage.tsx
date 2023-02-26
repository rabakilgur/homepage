import { Fragment, h } from "preact";
import { Card, Container, Text } from "@nextui-org/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ParticleWave from "../ParticleWave/ParticleWave";
import ScrambleText from "../TextScramble/TextScramble";
import Heading from "../Heading/Heading";

const Homepage = () => {
	return (
		<>
			<header>
				<ParticleWave />
				<h1><ScrambleText texts="Hallo, Hi, Bonjour, Hello, Hola, Moshimoshi" /><span>ich bin</span><span>Robin Garbe</span></h1>
			</header>
			<Container fluid gap={0} css={{ maxWidth: 1000 }}>
				<Heading>Meine Erfahrung</Heading>
				<div className="timeline-container">
					<ul className="timeline timeline-split">
						<li className="timeline-item">
							<div className="timeline-info">
								<span>Mär 2020 - heute</span>
							</div>
							<div className="timeline-marker"></div>
							<div className="timeline-content">
								<h3 className="timeline-title">ARZ Darmstadt</h3>
								<p>Entwickler im Bereich Management Information Systems als Werksstudent bei Apotheken-Rechen-Zentrum GmbH</p>
							</div>
						</li>
						<li className="timeline-item">
							<div className="timeline-info">
								<span>Nov 2015 - Mär 2019</span>
							</div>
							<div className="timeline-marker"></div>
							<div className="timeline-content">
								<h3 className="timeline-title">EKHN</h3>
								<p>Entwickler als Werksstudent bei der Kirchenverwaltung der Evangelischen Kirche in Hessen und Nassau</p>
							</div>
						</li>
						<li className="timeline-item marker-outline">
							<div className="timeline-info">
								<span>Okt 2015 - heute</span>
							</div>
							<div className="timeline-marker"></div>
							<div className="timeline-content">
								<h3 className="timeline-title">Studium an der TU Darmstadt</h3>
								<p>Student im Bachelor of Science im Fachbereich Informatik</p>
							</div>
						</li>
					</ul>
				</div>

				<Heading>Über mich</Heading>
				<p>Hi und willkommen auf meiner Webseite. Mein Name ist Robin Garbe und ich bin ein Informatikstudent an der <a href="https://www.tu-darmstadt.de/" target="_blank" rel="noreferrer"><span>Technischen Universität Darmstadt</span></a>.
						Ich beschäftige mich hauptsächlich mit Webdesign und Webentwicklung, arbeite aber auch häufig an anderen Projekten; zum Beispiel in den Bereichen Grafikdesign oder Druckdesign.
						Weiter unten sind ein paar meiner Projekte verlinkt.</p>
				<div className="whatido_box">
					<div className="flex">
						<div className="flex_el50">
							<div className="flex_innerbox">
								<div className="PcAnimation_box">
									<div className="PcAnimation_innerbox">
										<div className="PcAni_border">
											<div className="PcAni_camSpeakerBox">
												<div className="PcAni_cam"></div>
												<div className="PcAni_speaker"></div>
											</div>
											<div className="PcAni_screen">
												<div className="PcCon_header"></div>
												<div className="PcCon_left"></div>
												<div className="PcCon_r1"></div>
												<div className="PcCon_r2"></div>
												<div className="PcCon_r3"></div>
												<div className="PcCon_r4"></div>
												<div className="PcCon_r5"></div>
												<div className="PcCon_r6"></div>
												<div className="PcCon_r7"></div>
												<div className="PcCon_r8"></div>
											</div>
										</div>
										<div className="PcAni_stand"></div>
										<div className="PcAni_multi"></div>
									</div>
								</div>
							</div>
							<div className="flex_innertextbox">
								<h2>Webdesign</h2>
							</div>
						</div>
						<div className="flex_el50">
							<div className="flex_innerbox">
								<div className="PriDes_box">
									<div className="PriDes_innerbox">
										<img src="https://robin-garbe.de/bilder/Doc.svg" alt="" />
										<div className="PriDes_textbox">
											<div className="PriDes_heading"></div>
											<div className="PriDes_text PriDes_text_1"></div>
											<div className="PriDes_text PriDes_text_2"></div>
											<div className="PriDes_text PriDes_text_3"></div>
											<div className="PriDes_text PriDes_text_4"></div>
											<div className="PriDes_pilebox">
												<div className="PriDes_pile PriDes_pile_1"></div>
												<div className="PriDes_pile PriDes_pile_2"></div>
												<div className="PriDes_pile PriDes_pile_3"></div>
												<div className="PriDes_pile PriDes_pile_4"></div>
												<div className="PriDes_pile PriDes_pile_5"></div>
											</div>
											<div className="PriDes_piebox">
												<div className="PriDes_circle">
													<div className="PriDes_pie" data-start="0" data-value="50"></div>
													<div className="PriDes_pie" data-start="50" data-value="80"></div>
													<div className="PriDes_pie" data-start="130" data-value="60"></div>
													<div className="PriDes_pie" data-start="190" data-value="40"></div>
													<div className="PriDes_pie" data-start="230" data-value="130"></div>
													<div className="PriDes_line PriDes_line_1"></div>
													<div className="PriDes_line PriDes_line_2"></div>
													<div className="PriDes_line PriDes_line_3"></div>
													<div className="PriDes_line PriDes_line_4"></div>
													<div className="PriDes_line PriDes_line_5"></div>
												</div>
											</div>
											<div className="PriDes_text PriDes_text_l1"></div>
											<div className="PriDes_text PriDes_text_l2"></div>
											<div className="PriDes_text PriDes_text_r1"></div>
											<div className="PriDes_text PriDes_text_r2"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex_innertextbox">
								<h2>Druckdesign</h2>
							</div>
						</div>
						<div className="flex_el50">
							<div className="flex_innerbox">
								<div className="GraDes_box">
									<div className="GraDes_innerbox">
										<img src="https://robin-garbe.de/bilder/Dice_Project_Collection.svg" alt="" />
										<div className="GraDes_box_border_box">
											<div className="GraDes_box_border">
												<div className="GraDes_box_corner1"></div>
												<div className="GraDes_box_corner2"></div>
												<div className="GraDes_box_corner3"></div>
												<div className="GraDes_box_corner4"></div>
												<div className="GraDes_box_corner5"></div>
												<div className="GraDes_box_corner6"></div>
												<div className="GraDes_box_corner7"></div>
												<div className="GraDes_box_corner8"></div>
											</div>
										</div>
										<div className="GraDes_box_cursor_box">
											<div className="GraDes_box_cursor"></div>
										</div>
										<div className="GraDes_box_cursor2_box">
											<div className="GraDes_box_cursor2"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex_innertextbox">
								<h2>Grafikdesign</h2>
							</div>
						</div>
					</div>
				</div>

				<Heading>Projekte</Heading>

				<ProjectCard color="yellow" image="assets/proj/proj_MoenichWebsite.png" link="http://www.spargelhof-moenich.de/">
					<ProjectCard.Title text="Spargelhof Mönich Webseite" />
					<ProjectCard.Subtitle text="Die neue Webseite des Spargelhofs Mönich" />
					<ProjectCard.Description text="Der Spargelhof Mönich aus Griesheim brauchte eine neue Webseite. Neben den üblichen Seiten habe ich hierfür noch eine intuitive und maßgeschneiderte Content-Management-Lösung mit PHP sowie einen Verkaufsstellen-Finder gebaut." />
					<ProjectCard.Tags tags="Frontend, Bootstrap, PHP" />
				</ProjectCard>

				<ProjectCard color="orange" image="assets/proj/proj_RobotControlGUI.png" link="https://github.com/rabakilgur/ThorRobotGUI" right>
					<ProjectCard.Title text="Thor Robot GUI" />
					<ProjectCard.Subtitle text={<>Benutzeroberfläche zur Steuerung des <i>Thor</i> Roboters</>} />
					<ProjectCard.Description text={<>Zusammen mit dem FabLab Darmstadt habe ich den 3D-gedruckten Open-Source 6-Achsen-Roboter <i>Thor</i> gebaut und modifiziert. Um ihn anzusteuern habe ich das <i>Thor Robot GUI</i> geschrieben: Eine Electron App mit der man den Roboter präsize steuern kann.</>} />
					<ProjectCard.Tags tags="Node, Electron, Robotik" />
				</ProjectCard>

				<ProjectCard color="blue" image="assets/proj/proj_DiceProjectApp.png" link="https://robin-garbe.de/p/dice_project">
					<ProjectCard.Title text="Dice Project App" />
					<ProjectCard.Subtitle text="Eine Würfel-App für iOS, Android, und das Web" />
					<ProjectCard.Description text="Die Würfel-App die ich auf meinem Handy hatte wurde nach einer Softwareaktualisierung nicht mehr unterstützt, also habe ich mich entschieden, einfach meine eigene App zu schreiben. Dies war mein erstes Projekt in Richtung App-Development." />
					<ProjectCard.Tags tags="PhoneGap, Hybrid App, Framework 7" />
				</ProjectCard>

				<ProjectCard color="grey" image="assets/proj/proj_OPCFactoryControlPanel.png" link="https://github.com/rabakilgur/OPC_Factory_Control_Panel" right>
					<ProjectCard.Title text="OPC Factory Control Panel" />
					<ProjectCard.Subtitle text="Ein Programm zur Steurung von Maschinen via OPC-UA" />
					<ProjectCard.Description text="Im Rahmen meines Bachelorpraktikums am Institut <i>Datenverarbeitung in der Konstruktion</i> habe ich mit Kommolitonen ein Programm geschrieben um Aufträge dynamisch an industrielle Maschinen zu senden, das leicht zu benutzen und schnell um Maschinentypen zu erweitern ist." />
					<ProjectCard.Tags tags="Node, Electron, OPC-UA" />
				</ProjectCard>

				<Heading>Einige kleine Projekte</Heading>

				<ProjectCard color="red" image="assets/proj/proj_SvgArcDiagram.png" link="https://codepen.io/rabakilgur/pen/oPxrLp" darkenImage>
					<ProjectCard.Title text="Ringdiagramme mit konischem Farbverlauf" />
					<ProjectCard.Subtitle text="Mit HTML Custom Elements und einem Cross-Browser Fallback" />
					<ProjectCard.Description text="Ich habe mir schon vor einer Weile überlegt, wie man schöne SVG Graphen mit JavaScript erstellen kann, und als ich mich in konische Gradienten eingelesen habe, habe ich die Herausforderung angenommen :D" />
					<ProjectCard.Tags tags="Custom Element, CSS" />
				</ProjectCard>

				<ProjectCard color="purple" image="assets/proj/proj_CKEditor.png" link="https://codepen.io/rabakilgur/pen/PmVyrp" darkenImage right>
					<ProjectCard.Title text="Angepasster CKEditor" />
					<ProjectCard.Subtitle text="CKEditor v4 mit Vue.js v2" />
					<ProjectCard.Description text="Ich habe für ein Projekt auf der Arbeit nach einem benutzerfreundlichen Editor gesucht der HTML-formatierten Text ausgibt, ohne mit unnützen Funktionen überladen zu sein. Der CKEditor v4 war eine gute Lösung, also habe ich den Editor mit Vue.js v2 an meinen Fall angepasst." />
					<ProjectCard.Tags tags="HTML, CKEditor, Vue.js" />
				</ProjectCard>

				<ProjectCard color="yellow" image="assets/proj/proj_StarRating.png" link="https://robin-garbe.de/p/star-rating/withPHP.php">
					<ProjectCard.Title text="5-Stern-Bewertungsskala" />
					<ProjectCard.Subtitle text="Mit SVG Grafiken und PHP Backend" />
					<ProjectCard.Description text="Das hier ist schon ein ziemlich altes Projekt von mir, welches ich später um verschiedene Funktionen (wie z.B. einer Datenbankanbindung) erweitert habe. Allerdings suche ich immer noch nach einem Platz, an dem ich die Bewertungsskala sinnvoll einsetzen kann..." />
					<ProjectCard.Tags tags="SVG, CSS, PHP" />
				</ProjectCard>

				<ProjectCard color="green" image="assets/proj/proj_ShowHidePassword.png" link="https://codepen.io/rabakilgur/pen/WgRWge" darkenImage right>
					<ProjectCard.Title text="Passwort Eingabefeld mit Effekt" />
					<ProjectCard.Subtitle text="Dynamischer Effekt beim Anzeigen / Verbergen" />
					<ProjectCard.Description text={<>Auf Codepen experimentieren gerade viele Leute mit <i>Splitting.js</i>, und als ich dort auf die Idee gebracht wurde, dies auf ein Passwort-Textfeld anzuwenden, habe ich mich gleich daran gesetzt.</>} />
					<ProjectCard.Tags tags="Splitting.js, CSS" />
				</ProjectCard>

				<Heading>Links</Heading>
				<div className="blob_box">
					<a className="blob link_CodePen" href="https://codepen.io/rabakilgur" target="_blank" rel="noreferrer">
						<span>CodePen</span>
					</a>
					<a className="blob link_GitHub" href="https://github.com/rabakilgur" target="_blank" rel="noreferrer">
						<span>GitHub</span>
					</a>
					<a className="blob link_Telegram" href="https://t.me/rabakilgur" target="_blank" rel="noreferrer">
						<span>Telegram</span>
					</a>
				</div>


				<Heading>Kontakt</Heading>
				<div id="contact_section">
					<div>
						<i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#0088FF" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></i>
						<span className="contact_heading">Schreib mir:</span>
						<span className="contact_link"><a href="mailto:kontakt@robin-garbe.de">kontakt@robin-garbe.de</a></span>
					</div>
					<div>
						<i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#0088FF" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></i>
						<span className="contact_heading">Ruf mich an:</span>
						<span className="contact_link"><a href="tel:+4915902450748">+49 159 0245 0748</a></span>
					</div>
					<div>
						<i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#0088FF" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></i>
						<span className="contact_heading">Hier bin ich:</span>
						<span className="contact_link"><a href="https://www.google.com/maps/place/Darmstadt/@49.8748499,8.5847819,12z" target="_blank" rel="noreferrer">Darmstadt</a></span>
					</div>
				</div>


				<footer>
					<p>Copyright © 2023<br />Made with ♥ by Robin Garbe</p>
				</footer>

				{/* <between-logo shadow="standard" border-color="#ddd" z-index="20" scale="0.8"></between-logo> */}

				{/* <script src="https://robin-garbe.de/index.js"></script> */}
			</Container>
		</>
	);
};
export default Homepage;
