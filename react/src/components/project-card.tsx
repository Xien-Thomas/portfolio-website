import { useContext } from "react";
import dataContext from "../../../portfolio-web/src/appContext";
import "../styles/card.css";

type Company = {
  id: number;
  title: string;
  company: string;
  description: string;
  image: File;
};

function ProjectCard() {
  const data:Array<Company> = useContext(dataContext);
  return (
    <>
      <div className="card-contianer">
        {data.map((item: Company) => {
          return (
            <>
              <div key={item.id} className="card">
                <div className="card-desc">
                  <p className="title">{item.title}</p>
                  <p className="company-name">{item.company}</p>
                  <p className="desc">{item.description}</p>
                </div>
                <div
                  style={{ backgroundImage: `URL(${item.image})` }}
                  className="card-image"
                ></div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCard;
