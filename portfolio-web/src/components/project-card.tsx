import { useContext } from "react"
import dataContext from "../appContext"
import "../styles/card.css"

function ProjectCard(){
    const data = useContext(dataContext)
    return(
        <>
            <div className="card-contianer">
                    {data.map((item) => {
                        return(
                            <div className="card">
                                <div className="card-desc">{item.category}</div>
                                <div className="card-desc">{item.school}</div>
                                <div className="card-desc">{item.desc}</div>
                            </div>
                        )
                    })}
                
            </div>
        </>
    )
}

export default ProjectCard