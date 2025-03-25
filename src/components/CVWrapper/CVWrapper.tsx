import { useDisclosure } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/modal";
import S from "./CVWrapper.module.scss";
import { useEffect, useRef } from "preact/hooks";

export default function CVWrapper({ style, label = "CV anzeigen", useHash = false, ...props }: { style?: any; label?: string; useHash?: boolean; [prop: string]: any }) {
  // const { setVisible, bindings } = useModal();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cvRef = useRef<HTMLDivElement | null>(null);

  function printCV() {
    // If developing locally and the style is inserted in the document, get it by string and insert it using a <style> tag; if the styles are bundled and linked, get all <link> tags and insert them as is into the print window:
    const headNodes = Array.from(document.head.children);
    const localCvStyle = headNodes.find((tag) => tag.tagName === "STYLE" && tag.textContent?.includes(S.content))?.textContent;
    const linkedCvStyles = headNodes.filter((tag) => tag.tagName === "LINK" && tag.getAttribute("rel") === "stylesheet" && tag.getAttribute("href")?.endsWith(".css"));
    const cvStyles = localCvStyle ? `<style>${localCvStyle}</style>` : linkedCvStyles.reduce((string, link) => string + link.outerHTML, "");

    const printWindow = window.open("", "PRINT", "height=650, width=1050");
    if (printWindow) {
      printWindow.document.write(`
				<html>
					<head>
						<title>Robin Garbe – Lebenslauf</title>
						<link href="https://fonts.cdnfonts.com/css/voces" rel="stylesheet">
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
							${cvRef.current?.innerHTML}
						</div>
					</body>
				</html>
			`);

      printWindow.document.close(); // necessary for IE >= 10
      printWindow.focus(); // necessary for IE >= 10

      printWindow.addEventListener("load", () => {
        printWindow.print();

        setTimeout(() => {
          printWindow.close();
        }, 700);
      });
    } else {
      alert("Fehler: CV kann nicht gedruckt werden");
    }
  }

  // This is a dirty workaround to fix a bug where touch-scrolling wasn't working:
  let prevYPos: number;
  let prevYPosTimestamp: number;
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const bodyElement = document.getElementsByClassName(S.body)[0] as HTMLDivElement;
    const newYPos = e.changedTouches[0].pageY;
    if (prevYPos && e.timeStamp - prevYPosTimestamp < 100) bodyElement.scrollTop += prevYPos - newYPos;
    prevYPos = newYPos;
    prevYPosTimestamp = e.timeStamp;
  };

  function Expertise({ label, duration }: { label: string; duration?: string }) {
    return (
      <div>
        {label}
        {duration && <span className={S.expertiseDuration}> – {duration}</span>}
      </div>
    );
  }

  useEffect(() => {
    if (useHash && window.location.hash === "#cv") onOpen();
  }, []);

  useEffect(() => {
    const bodyElement = document.getElementsByClassName(S.body)[0] as HTMLDivElement;
    bodyElement?.addEventListener("touchmove", handleTouchMove);
    return () => {
      bodyElement?.removeEventListener("touchmove", handleTouchMove);
    };
  });

  return (
    <>
      <Button
        style={{
          ...style,
          display: "block",
          margin: "auto",
          minWidth: "unset",
        }}
        onPress={onOpen}
        {...props}>
        {label}
      </Button>

      <Modal size="full" aria-labelledby="modal-title" aria-describedby="modal-description" isOpen={isOpen} onOpenChange={onOpenChange}>
        {/* <ModalHeader>
					<Text id="modal-title" size={18}>
						Lebenslauf
					</Text>
				</ModalHeader> */}
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalBody className={S.body}>
                <div ref={cvRef} className={S.content} id="modal-description">
                  <div></div>
                  <div className={S.header}>
                    <h2>Robin Garbe</h2>
                    {/* <span>Anschrift: Adelungstraße 28, 64283 Darmstadt</span> */}
                    <span>
                      E-Mail: <a href="mailto:arbeit@robin-garbe.de">arbeit@robin-garbe.de</a>
                    </span>
                    <span>
                      Telefon: <a href="tel:+4915902450748">+49 159 / 0245 0758</a>
                    </span>
                    {/* <span>Geboren am 24.02.1997</span> */}
                    <span>
                      Webseite:{" "}
                      <a href="https://robin-garbe.de" target="_blank" rel="noreferrer">
                        robin-garbe.de
                      </a>
                    </span>
                    <span>
                      LinkedIn:{" "}
                      <a href="https://www.linkedin.com/in/robin-garbe/" target="_blank" rel="noreferrer">
                        linkedin.com/in/robin-garbe
                      </a>
                    </span>
                  </div>

                  <div className={S.category}>
                    <h3>Erfahrung</h3>
                  </div>
                  <div>
                    <h4>10/2024 – heute</h4>
                    <h5>Senior Cloud/Software Architect</h5>
                    <h6>FlexHome.Energy (Darmstadt)</h6>
                    <ul>
                      <li>Realisierung smarter Energiemanagement-Lösungen, die bidirektionale Batteriespeicher nutzen, um die Energiewende voranzutreiben und Stromkosten nachhaltig zu senken</li>
                      <li>Planung und Umsetzung eines robusten Cloud-Backends, das auf AWS basiert und APIs sowie Time-Series-Datenbanken für verbesserte Datenhandhabung und -zugriff verwendet</li>
                      <li>Entwicklung einer Vue/Nuxt-basierten webbasierten Analyse- und Verwaltungskonsole</li>
                      <li>Arbeit mit Vue/Nuxt, InfluxDB, TypeScript, AWS, EEBus, etc.</li>
                    </ul>

                    <h4>02/2024 – 09/2024</h4>
                    <h5>Senior DevOps/Cloud/Software Engineer</h5>
                    <h6>Solarnative GmbH (Kriftel)</h6>
                    <ul>
                      <li>
                        Realisierung eines hocheffizienten Mikroinverters und eines smarten Gateways für Solaranlagen, um die Energieerzeugung zu optimieren und die Integration erneuerbarer Energien
                        zu vereinfachen
                      </li>
                      <li>
                        Entwickelung einer vielseitigen Electron-Anwendung für Forschung und Entwicklung, Fertigung und Cloud-Engineering, die AWS-APIs integriert und über Schnittstellen mit
                        Hardware-Komponenten kommuniziert
                      </li>
                      <li>Ausbau des AWS-Backends, das robuste APIs und Time-Series-Datenbanken für verbesserte Datenhandhabung und -zugriff verwendet</li>
                      <li>Arbeit mit Vue/Nuxt, Ionic, Electron, TypeScript, AWS, OpenAPI, etc.</li>
                    </ul>

                    <h4>04/2022 – 01/2024</h4>
                    <h5>Softwareingenieur im Bereich Management Information Systems</h5>
                    <h6>Apotheken-Rechen-Zentrum GmbH (Darmstadt)</h6>
                    <ul>
                      <li>Testgetriebene und agile Full-Stack Entwicklung (TDD) von Web-Applikationen</li>
                      <li>Arbeit mit TypeScript, Next.js, Angular, Ruby, Rails, HTML, CSS, SCSS, Docker, Kubernetes, PostgreSQL, SQLite, etc.</li>
                      <li>Android App-Entwicklung mit Java, Kotlin und React Native</li>
                    </ul>

                    <h4>03/2020 – 03/2022</h4>
                    <h5>Entwickler im Bereich Management Information Systems als Werksstudent</h5>
                    <h6>Apotheken-Rechen-Zentrum GmbH (Darmstadt)</h6>
                    <ul>
                      <li>Testgetriebene und agile Full-Stack Entwicklung (TDD) von Web-Applikationen</li>
                      <li>Arbeit mit Ruby, Rails, HTML, CSS, SCSS, JavaScript, Docker, Kubernetes, PostgreSQL, SQLite, etc.</li>
                      <li>Android App-Entwicklung mit Java und Kotlin</li>
                    </ul>

                    <h4>11/2015 – 03/2019</h4>
                    <h5>Entwickler als Werksstudent</h5>
                    <h6>Evangelische Kirche in Hessen und Nassau (Darmstadt)</h6>
                    <ul>
                      <li>Entwicklung einer webbasierten Auswertungsplatzform</li>
                      <li>Analyse und automatisierte Datenverarbeitung mit Excel und VBA</li>
                      <li>JavaScript, PHP, HTML, CSS, Print- und Web-Design mit Photoshop, Illustrator, InDesign, Word, etc.</li>
                    </ul>
                  </div>

                  <div className={S.category}>
                    <h3>Bildungsweg</h3>
                  </div>
                  <div>
                    <h4>04/2022 – heute</h4>
                    <h5>Master of Science in Informatik</h5>
                    <h6>Technische Universität Darmstadt</h6>
                    <ul>
                      <li>Schwerpunkt auf Internet- und Web-basierte Systeme und KI/ML</li>
                    </ul>

                    <h4>10/2016 – 03/2022</h4>
                    <h5>Bachelor of Science in Informatik</h5>
                    <h6>Technische Universität Darmstadt</h6>
                    <ul>
                      <li>Bachelorarbeit: „Potenzialanalyse von benutzergesteuerten Anpassungs- und Analysewerkzeugen für Wertschöpfungsketten“</li>
                      {/* <li>Bachelorpraktikum: „Mojito, Caipirinha, Sex on the Beach - Die Rezepte des BAR-Robots müssen auf eine Plattform“</li> */}
                    </ul>

                    {/* <h4>08/2007 - 07/2015</h4>
                    <h5>Abitur</h5>
                    <h6>Gymnasium Gernsheim</h6>
                    <ul>
                      <li>Leistungsfächer Mathematik und Physik</li>
                    </ul> */}
                  </div>

                  <div className={S.category}>
                    <h3>Sonstige Erfahrung</h3>
                  </div>
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
                      <li>Entwicklung einer Applikation zur Auftragsverwaltung und Steuerung von PLC/SPS-Systemen</li>
                      <li>JavaScript, TypeScript, React, OPC-UA, HTML, CSS, Node, Electron</li>
                    </ul>
                  </div>

                  <div className={S.category}>
                    <h3>Auslandserfahrung</h3>
                  </div>
                  <div>
                    <h4>2009</h4>
                    <h5>England-Austausch zum Impington Village College</h5>
                  </div>

                  <div className={S.category}>
                    <h3>Kenntnisse</h3>
                  </div>
                  <div className={S.expertiseWrapper}>
                    <h5>Sprachen:</h5>
                    <Expertise label="Deutsch" duration="Muttersprache (C2)" />
                    <Expertise label="Englisch" duration="Verhandlungssicher (C1)" />

                    <h5>Programmiersprachen:</h5>
                    <Expertise label="TypeScript & JavaScript" duration="Elf Jahre, sehr regelmäßig" />
                    <Expertise label="PHP" duration="Sieben Jahre" />
                    <Expertise label="Ruby" duration="Drei Jahre, regelmäßig" />
                    <Expertise label="Java & Kotlin" duration="Zwei Jahre" />
                    <Expertise label="VBA" duration="Zwei Jahre" />
                    <Expertise label="C / C++" duration="Ein Jahr" />
                    <Expertise label="Python" duration="Ein Jahr" />

                    <h5>Frameworks:</h5>
                    <Expertise label="React, Next.js & Preact" duration="Drei Jahre, sehr regelmäßig" />
                    <Expertise label="Vue & Nuxt" duration="Ein Jahr, sehr regelmäßig" />
                    <Expertise label="Angular" duration="Ein Jahr" />
                    <Expertise label="Node & Deno" duration="Vier Jahre, sehr regelmäßig" />
                    <Expertise label="Ruby on Rails" duration="Drei Jahre, regelmäßig" />
                    <Expertise label="Electron" duration="Drei Jahre, regelmäßig" />
                    <Expertise label="React Native & PhoneGap / Cordova" duration="Zwei Jahre" />
                    <Expertise label="Tailwind, Bootstrap" duration="Fünf Jahre" />
                    <Expertise label="jQuery" duration="Fünf Jahre" />

                    <h5>Datenbanken:</h5>
                    <Expertise label="PostgreSQL, InfluxDB, SQLite, MySQL, MariaDB, Redis" duration="Sieben Jahre" />

                    <h5>DevOps:</h5>
                    <Expertise label="Git, GitHub, GitLab, Gitea" />
                    <Expertise label="Jira, Trello, MS Planner" />
                    <Expertise label="Docker, Kubernetes" />
                    <Expertise label="AWS" />

                    <h5>Betriebssysteme:</h5>
                    <Expertise label="Windows, Linux" />

                    <h5>Nennenswertes:</h5>
                    <Expertise label="JWT, JSON, HTML, CSS, SCSS, REST, Protocol Buffers, XML, YAML, SVG, SQL, JamStack" />

                    <h5>Software:</h5>
                    <Expertise label="Teams, Word, Excel, PowerPoint, Outlook, OneNote, Sharepoint, etc." />
                    <Expertise label="Photoshop, Illustrator, InDesign, Acrobat" />
                    <Expertise label="WordPress" />
                    <Expertise label="Postman" />
                    <Expertise label="Nginx, Traefik, Puma, XAMPP, WAMP" />
                    <Expertise label="WS, MQTT, EEBus, OPC-UA, Serial" />
                  </div>

                  <div></div>
                  <div className={S.footer}>
                    <span>Darmstadt, 25.03.2025</span>
                    <span>Robin Garbe</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button auto flat variant="light" onPress={onClose}>
                  Schließen
                </Button>
                <Button auto onPress={printCV}>
                  Drucken
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
