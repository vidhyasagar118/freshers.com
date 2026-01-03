import React, { useEffect, useState } from "react";
import "./Profecer.css";

const Profecerscard = () => {
  const [profecerdata, setProfecerdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profecers")
      .then(res => res.json())
      .then(data => setProfecerdata(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="Profecerscardmaindiv">
      <h1>PROFESSORS DETAILS</h1>

      <div className="Profecersdiv">
        {profecerdata.map((profecer, index) => (
          <div className="profCard" key={index}>
            <div className="profImgWrapper">
              <img src={profecer.imgsrc} alt={profecer.name} />
            </div>
            <h3 className="profName">{profecer.name}</h3>
            <p className="profRole">{profecer.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profecerscard;
