import { FaUniversity } from "react-icons/fa";
import "../../style/index.scss";
import CVWrapper from "../CVWrapper/CVWrapper";
import ColorBlob from "../ColorBlob/ColorBlob";
import CornerButtonWrapper from "../CornerButtonWrapper/CornerButtonWrapper";
import Header from "../Header/Header";
import Heading from "../Heading/Heading";
import ProjectCard from "../ProjectCard/ProjectCard";
import Timeline from "../Timeline/Timeline";
import WhatIDo from "../WhatIDo/WhatIDo";

const Homepage = () => {
  return (
    <>
      <CornerButtonWrapper />

      <Header />

      <div className="container mx-auto" style={{ maxWidth: 1000, paddingInline: "1.2rem" }}>
        <section className="section" id="about">
          <ColorBlob color="#DB00FF" size={325} top="40%" right="5%" />

          <Heading>Über mich</Heading>

          <p style="max-width: 65ch; text-align: center; margin: 0 auto 0.7em auto; line-height: 1.9;">
            Hi! Ich bin Robin, ein Softwareingenieur/-architekt aus Darmstadt. Ich beschäftige mich hauptsächlich mit Cloud- und Fullstack-Entwicklung, arbeite aber auch gelegentlich an anderen
            Projekten, zum Beispiel in den Bereichen App-Entwicklung oder Design. Aktuell entwickle ich bei{" "}
            <a href="https://flexhome.energy" target="_blank" rel="noreferrer">
              FlexHome.Energy
            </a>{" "}
            eine Platform für die Zukunft von Energiespeichern im Niedrigspannungsnetz, für eine fairere, nachhaltigere Energieversorgung. 🌳⚡🔋
          </p>

          <p style="max-width: 65ch; text-align: center; margin: 0 auto 1em auto; line-height: 1.9;">
            Weiter unten sind ein paar meiner (Hobby-)Projekte verlinkt. Hier ist eine Übersicht über ein paar der Bereiche in denen ich tätig bin und einige Technologien mit denen ich arbeite:
          </p>

          <WhatIDo />

          <CVWrapper useHash />
        </section>

        <section className="section" id="experience">
          <ColorBlob color="#F1C40F" size={400} bottom="40%" left="5%" />

          <Heading>Meine Erfahrung</Heading>

          <Timeline>
            <Timeline.Item title="FlexHome.Energy" info="Okt 2024 - heute" text="Senior Cloud/Software Architect bei FlexHome.Energy" marker="outlined" />
            <Timeline.Item title="Solarnative" info="Feb 2024 - Sep 2024" text="Senior DevOps/Cloud/Software Engineer bei Solarnative GmbH" />
            <Timeline.Item title="ARZ Darmstadt" info="Apr 2022 - Jan 2024" text="Softwareingenieur im Bereich Management Information Systems bei Apotheken-Rechen-Zentrum GmbH" />
            <Timeline.Item
              title="Master-Studium an der TU Darmstadt"
              info="Apr 2022 - heute"
              text="Informatik Master Student (ehem. Master of Science für Internet- und Web-basierte Systeme)"
              markerIcon={<FaUniversity />}
            />
            <Timeline.Item title="ARZ Darmstadt" info="Mär 2020 - Mär 2022" text="Entwickler im Bereich Management Information Systems als Werksstudent bei Apotheken-Rechen-Zentrum GmbH" />
            <Timeline.Item title="EKHN" info="Nov 2015 - Mär 2019" text="Entwickler als Werksstudent bei der Kirchenverwaltung der Evangelischen Kirche in Hessen und Nassau" />
            <Timeline.Item
              title="Bachelor-Studium an der TU Darmstadt"
              info="Okt 2015 - Mär 2022"
              text="Student im Bachelor of Science im Fachbereich Informatik mit abschließender Bachelorarbeit zum Thema „Potenzialanalyse von benutzergesteuerten Anpassungs- und Analysewerkzeugen für Wertschöpfungsketten“"
              markerIcon={<FaUniversity />}
            />
          </Timeline>
        </section>

        <section className="section" id="projects">
          <Heading>Projekte</Heading>

          <ProjectCard color="purple" image="assets/proj/proj_FabApp.jpg">
            <ProjectCard.Title text="FabApp" />
            <ProjectCard.Subtitle text="Interne App für R&D, Fertigung und Cloud-Engineering" />
            <ProjectCard.Description text="Bei Solarnative habe ich eine vielseitige Electron-Anwendung für Forschung und Entwicklung, Fertigung, Support und Cloud-Engineering entwickelt, die AWS-APIs integriert und über Schnittstellen mit Hardware-Komponenten kommuniziert oder Firmware aufspielt." />
            <ProjectCard.Tags tags="Electron, Vue, Node.js, AWS" />
          </ProjectCard>

          <ProjectCard
            color="customcolor"
            style="--projcard-color: #e4441d"
            image="assets/proj/proj_ApojetAndroidApp.png"
            link="https://play.google.com/store/apps/details?id=de.cida.mobile.apojet"
            right>
            <ProjectCard.Title text="Apojet App" />
            <ProjectCard.Subtitle text="React Native Apojet App für Android" />
            <ProjectCard.Description
              text={
                <>
                  Für das ARZ habe ich die bestehende Apojet App erweitert und eine komplett neue Android App mit React Native entwickelt.
                  <br />
                  Mit der App können Kunden Produkte in ihrer Apotheke bestellen, mit den Apothekern chatten, und mehr.
                </>
              }
            />
            <ProjectCard.Tags tags="App, React Native, Android" />
          </ProjectCard>

          <ProjectCard color="yellow" image="assets/proj/proj_MoenichWebsite.jpg" link="http://www.spargelhof-moenich.de/">
            <ProjectCard.Title text="Spargelhof Mönich Webseite" />
            <ProjectCard.Subtitle text="Die neue Webseite des Spargelhofs Mönich" />
            <ProjectCard.Description text="Der Spargelhof Mönich aus Griesheim brauchte eine neue Webseite. Neben den üblichen Seiten habe ich hierfür noch eine maßgeschneiderte Content-Management-Lösung mit PHP sowie einen Verkaufsstellen-Finder mit OpenStreetMap-Integration gebaut." />
            <ProjectCard.Tags tags="Frontend, Bootstrap, PHP" />
          </ProjectCard>

          <ProjectCard color="orange" image="assets/proj/proj_RobotControlGUI.jpg" link="https://github.com/rabakilgur/ThorRobotGUI" right>
            <ProjectCard.Title text="Thor Robot GUI" />
            <ProjectCard.Subtitle
              text={
                <>
                  Benutzeroberfläche zur Steuerung des <i>Thor</i> Roboters
                </>
              }
            />
            <ProjectCard.Description
              text={
                <>
                  Zusammen mit dem FabLab Darmstadt habe ich den 3D-gedruckten Open-Source 6-Achsen-Roboter <i>Thor</i> gebaut und modifiziert. Um ihn anzusteuern habe ich das <i>Thor Robot GUI</i>{" "}
                  geschrieben: Eine Electron App mit der man den Roboter präsize steuern kann.
                </>
              }
            />
            <ProjectCard.Tags tags="Node, Electron, Robotik" />
          </ProjectCard>

          <ProjectCard color="blue" image="assets/proj/proj_DiceProjectApp.jpg" link="https://robin-garbe.de/p/dice_project">
            <ProjectCard.Title text="Dice Project App" />
            <ProjectCard.Subtitle text="Eine Würfel-App für iOS, Android, und das Web" />
            <ProjectCard.Description text="Die Würfel-App die ich auf meinem Handy hatte wurde nach einer Softwareaktualisierung nicht mehr unterstützt, also habe ich mich entschieden, einfach meine eigene App zu schreiben. Dies war mein erstes Projekt in Richtung App-Development." />
            <ProjectCard.Tags tags="PhoneGap, Hybrid App, Framework 7" />
          </ProjectCard>

          <ProjectCard color="grey" image="assets/proj/proj_OPCFactoryControlPanel.jpg" link="https://github.com/rabakilgur/OPC_Factory_Control_Panel" right>
            <ProjectCard.Title text="OPC Factory Control Panel" />
            <ProjectCard.Subtitle text="Ein Programm zur Steurung von Maschinen via OPC-UA" />
            <ProjectCard.Description
              text={
                <>
                  Im Rahmen meines Bachelorpraktikums am Institut <i>Datenverarbeitung in der Konstruktion</i> habe ich mit Kommolitonen ein Programm geschrieben um Aufträge dynamisch an industrielle
                  Maschinen zu senden, das leicht zu benutzen und schnell um Maschinentypen zu erweitern ist.
                </>
              }
            />
            <ProjectCard.Tags tags="Node, Electron, OPC-UA" />
          </ProjectCard>
        </section>

        {/* <Heading>Einige kleine Projekte</Heading>

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
				</ProjectCard> */}

        <section className="section" id="links">
          <Heading>Links</Heading>

          <div className="blob_box">
            <a className="blob link_LinkedIn" href="https://www.linkedin.com/in/robin-garbe/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
            </a>
            <a className="blob link_GitHub" href="https://github.com/rabakilgur" target="_blank" rel="noreferrer">
              <span>GitHub</span>
            </a>
            <a className="blob link_CodePen" href="https://codepen.io/rabakilgur" target="_blank" rel="noreferrer">
              <span>CodePen</span>
            </a>
            <a className="blob link_Telegram" href="https://t.me/rabakilgur" target="_blank" rel="noreferrer">
              <span>Telegram</span>
            </a>
          </div>
        </section>

        <section className="section" id="contact">
          <ColorBlob color="#00D65D" size={325} top="5%" right="5%" />

          <Heading>Kontakt</Heading>

          <div id="contact_section">
            <span>
              <div class="contact_box">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                </i>
                <span className="contact_link">
                  <a href="mailto:kontakt@robin-garbe.de">kontakt@robin-garbe.de</a>
                </span>
              </div>
              <div class="contact_box">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                  </svg>
                </i>
                <span className="contact_link">
                  <a href="tel:+4915902450748">+49 159 0245 0748</a>
                </span>
              </div>
              <div class="contact_box">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </i>
                <span className="contact_link">
                  <a href="https://www.google.com/maps/place/Darmstadt/@49.8748499,8.5847819,12z" target="_blank" rel="noreferrer">
                    Darmstadt
                  </a>
                </span>
              </div>
            </span>
          </div>
        </section>

        <footer>
          <p>
            Copyright © 2025
            <br />
            Made with ♥ by Robin Garbe
            {/* <div style="font-size: 0.8em; opacity: 0.5; margin-top: 1.5em;">
              Some icons made by{" "}
              <a href="https://www.flaticon.com/authors/justicon" title="justicon">
                justicon
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div> */}
          </p>
        </footer>

        {/* <between-logo shadow="standard" border-color="#ddd" z-index="20" scale="0.8"></between-logo> */}

        {/* {Array.from(new Set([...document.head.querySelector("style[type='text/css']")!.innerHTML.matchAll(/--nextui-(\w|\d|-)+/g)].map(x => x[0]))).map(x =>
					<div style={`
						display: inline-block;
						width: 300px;
						height: 50px;
						margin: 25px 5px;
						border: 1px solid #999;
						background-color: hsl(var(${x}) / 100%);
					`}>
						<span class="cssVarTestValue" data-val={`${x}`} style={`
							position: absolute;
							transform: translateY(-2em);
						`}>
							{x}
						</span>
					</div>
				)} */}
      </div>
    </>
  );
};
export default Homepage;
