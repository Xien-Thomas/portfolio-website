import { useContext } from "react";
import dataContext from "../../../react/src/appContext";
import "../styles/card.css";

type Company = {
  id: string;
  title: string;
  company: string;
  category: string;
  desc: string;
  img: string;
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
                  <p className="desc">{item.desc}</p>
                </div>
                <div
                  style={{ backgroundImage: `URL(${item.img})` }}
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
