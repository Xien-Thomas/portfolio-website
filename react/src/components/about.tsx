import "../styles/about.css";
import portrait from "../images/portrait.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-content-container">
          <div className="about-picture">
            <img className="picture" src={portrait} alt="" />
          </div>
          <div className="about-description">
            <h3>Howdy!</h3>
            <p>
              My name is Xien Thomas and most of my life I loved art and
              computers. When I was younger, I was curious and try to replicate
              art and computers the best I could. I would trace an artist work
              and I work dismantle an electronic to understand them more. I took
              a computer science course in high school and I noticed how
              creative you can be when writing in code.
            </p>
            <p>
              Which leads me into today! I am first an avid learner then a
              computer scientist. Throughout my career, most of my expereince
              was in academic research under{" "}
              <Link className="link-color" to="https://www.tamu.edu/">
                Texas A&M
              </Link>{" "}
              and
              <Link className="link-color" to="https://www.tsu.edu/">
                {" "}
                Texas Southern University
              </Link>
              . Currently, I am a Software Engineer and have the privilage to
              work with
              <Link className="link-color" to="https://alphaomega.com/">
                {" "}
                Alpha Omega Intergration
              </Link>{" "}
              to modernize application under the US Government.
            </p>
            <p>Recent technologies I've been working with:</p>
            <ul className="tech-list">
              <li>Ruby on Rails</li>
              <li>React</li>
              <li>typescript/javascript</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
