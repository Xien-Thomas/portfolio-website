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
                            <>
                                <div key={item.id} className="card">
                                    <div className="card-desc">
                                        <p className="title">{item.title}</p>
                                        <p className="company-name">{item.company}</p>
                                        <p className="desc">{item.desc}</p>
                                        </div>
                                    <div  style={{backgroundImage: `URL(${item.img})`}} className="card-image"></div>
                                </div>
                            </>
                        )
                    })}
                
            </div>
        </>
    )
}

export default ProjectCard