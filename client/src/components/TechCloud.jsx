import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";

import reactLogo from "../assets/React.svg";
import nodeLogo from "../assets/Node.js.svg";
import jsLogo from "../assets/JavaScript.svg";
import htmlLogo from "../assets/HTML5.svg";
import cssLogo from "../assets/CSS3.svg";
import bootStrapLogo from "../assets/Bootstrap.svg";
import cLogo from "../assets/C.svg";
import djangoLogo from "../assets/django.svg";
import flutterLogo from "../assets/Flutter.svg";
import gitLogo from "../assets/Git.svg";
import jQueryLogo from "../assets/jQuery.svg";
import jsonLogo from "../assets/JSON.svg";
import kotlinLogo from "../assets/Kotlin.svg";
import materialUILogo from "../assets/MaterialUI.svg";
import mySQLLogo from "../assets/mySQL.svg";
import nodeJSLogo from "../assets/Node.js.svg";
import npmLogo from "../assets/NPM.svg";
import phpLogo from "../assets/PHP.svg";
import postgresSQLLogo from "../assets/PostgresSQL.svg";
import postmanLogo from "../assets/Postman.svg";
import pythonLogo from "../assets/Python.svg";
import reactBootstrapLogo from "../assets/ReactBootstrap.svg";
import reduxLogo from "../assets/Redux.svg";
import tailwindLogo from "../assets/TailwindCSS.svg";
import typescriptLogo from "../assets/TypeScript.svg";
import vimLogo from "../assets/Vim.svg";
import vitejsLogo from "../assets/Vite.js.svg";

import "./TechCloud.css";

const techs = [
  { name: "React", img: reactLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "HTML5", img: htmlLogo },
  { name: "CSS3", img: cssLogo },
  { name: "Bootstrap", img: bootStrapLogo },
  { name: "C", img: cLogo },
  { name: "Django", img: djangoLogo },
  { name: "Flutter", img: flutterLogo },
  { name: "Git", img: gitLogo },
  { name: "jQuery", img: jQueryLogo },
  { name: "JSON", img: jsonLogo },
  { name: "Kotlin", img: kotlinLogo },
  { name: "Material-UI", img: materialUILogo },
  { name: "MySQL", img: mySQLLogo },
  { name: "npm", img: npmLogo },
  { name: "PHP", img: phpLogo },
  { name: "PostgreSQL", img: postgresSQLLogo },
  { name: "Postman", img: postmanLogo },
  { name: "Python", img: pythonLogo },
  { name: "React-Bootstrap", img: reactBootstrapLogo },
  { name: "Redux", img: reduxLogo },
  { name: "TailwindCSS", img: tailwindLogo },
  { name: "TypeScript", img: typescriptLogo },
  { name: "Vim", img: vimLogo },
  { name: "Vite.js", img: vitejsLogo },
];

const getRandomPosition = () => {
  const top = Math.random() * 80; // between 0-80% of container height
  const left = Math.random() * 80; // between 0-80% of container width
  return { top: `${top}%`, left: `${left}%` };
};

function TechCloud() {
  const [active, setActive] = useState(false);
  const [positions, setPositions] = useState([]);
  const cloudRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    if (cloudRef.current) {
      observer.observe(cloudRef.current);
    }

    return () => {
      if (cloudRef.current) {
        observer.unobserve(cloudRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Randomize positions once when mounted
    const randomPositions = techs.map(() => getRandomPosition());
    setPositions(randomPositions);
  }, []);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <Container
      className="position-relative"
      style={{ height: "600px", marginBottom: "5rem" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`tech-cloud-freeform ${active ? "active" : ""}`}
        ref={cloudRef}
      >
        {techs.map((tech, index) => (
          <div
            className="tech-item-freeform"
            key={index}
            style={{
              top: positions[index]?.top,
              left: positions[index]?.left,
            }}
          >
            <img
              src={tech.img}
              alt={`${tech.name} logo`}
              className="tech-icon-freeform"
            />
            <div className="tech-name-freeform">{tech.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default TechCloud;
