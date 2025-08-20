// import Button from "@mui/material/Button";
import "../styles/homesplash.css";
// import { Link } from "react-router-dom";
// import video from "../videos/art1.mp4"
import backvideo from "../videos/ai1.mp4"
// import resumePDF from "../documents/Xien Thomas_Software Engineer  - Capital One.pdf";
// send a axios request to download a pdf file
// const downloadPDF = () => {};
function Home() {
  return (
    <>
      <div className="video-container">
        <video
          src={backvideo}
          className="splash-video"
          autoPlay
          loop
          muted
       />
      </div>

      {/* <div className="home-container">
        <div className="description-container">
          <p className="quote">
            "Life itself is your teacher, and you are in a state of constant
            learning."
          </p>
          <Link
            to={resumePDF}
            download="Xien's Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume">RESUME</button>
          </Link>
        </div>
      </div> */}
    </>
  );
}
export default Home;
