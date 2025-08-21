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
              My name is Xien Thomas, and for as long as I can remember, I’ve
              been fascinated by both art and technology. As a kid, my curiosity
              pushed me to experiment—I would trace artwork to understand style
              and form, and I would take apart electronics just to see how they
              worked. That curiosity grew into something more when I took my
              first computer science course in high school, where I discovered
              just how creative programming could be. Writing code felt like
              creating art, but with logic and problem-solving at its core.
            </p>
            <p>
              Today, I consider myself a lifelong learner first, and a computer
              scientist second. My journey has taken me through academic
              research with
              <Link className="link-color" to="https://www.tamu.edu/">
                Texas A&M University
              </Link>{" "}
              and
              <Link className="link-color" to="https://www.tsu.edu/">
                {" "}
                Texas Southern University
              </Link>
              , and now into the professional world. I currently work as a
              Software Engineer at
              <Link className="link-color" to="https://alphaomega.com/">
                {" "}
                Alpha Omega Intergration
              </Link>{" "}
              , where I have the privilege of helping modernize applications for
              the U.S. Government.
            </p>
            <p>
              For me, technology isn’t just about building software—it’s about
              learning, creating, and solving problems in ways that make a real
              impact.
            </p>
            <p>Recent technologies I'm learning:</p>
            <ul className="tech-list">
              <li>Ruby on Rails</li>
              <li>React</li>
              <li>Typescript/Javascript</li>
              <li>Kubernetes</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
