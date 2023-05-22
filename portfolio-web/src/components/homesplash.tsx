import Button from "@mui/material/Button"
import "../styles/homesplash.css"
// import backvideo from "../videos/ai1.mp4" 
function Home(){
    return(
        <>
            <div className="video-container">
            <video src={require("../videos/art1.mp4")} className="splash-video" autoPlay loop muted></video>
            </div>
            
            <div className="home-container">
                <div className="description-container">
                    <p className="quote">"Life itself is your teacher, and you are in a state of constant learning."</p>
                    <button className="resume" >RESUME</button>
                </div>
            </div>
        </>
    )
}
export default Home