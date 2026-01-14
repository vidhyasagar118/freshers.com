
import React, { useEffect, useState } from "react";
import "./Profecer.css";
import { API_URL } from "../../config";

import subhamImg from "../../assets/subham.jpeg";
import sunilImg from "../../assets/sunil.jpeg";
import vikashImg from "../../assets/vikash.jpeg";
import vipinImg from "../../assets/vipin.jpeg";
const imageMap = {
  "vikash parik": vikashImg,
  "sunil kumar": sunilImg,
  "shubham kumar": subhamImg,
  "vipin kumar": vipinImg,
};


const Profecerscard = () => {
  const [profecerdata, setProfecerdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfecers = async () => {
      try {
        const res = await fetch(`${API_URL}/profecers`);
        const data = await res.json();
        setProfecerdata(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfecers();
  }, []);

  return (
    <div className="Profecerscardmaindiv">
      <h1>PROFESSORS DETAILS</h1>

      <div className="Profecersdiv">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          profecerdata.map((prof) => (
            <div className="profCard" key={prof._id}>
              <div className="profImgWrapper">
<img
  src={imageMap[prof.name.toLowerCase()] || subhamImg}
  alt={prof.name}
/>

              </div>
              <h3 className="profName">{prof.name}</h3>
              <p className="profRole">{prof.role}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profecerscard;