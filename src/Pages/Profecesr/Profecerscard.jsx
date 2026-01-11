import React, { useEffect, useState } from "react";
import "./Profecer.css";
import { API_URL } from "../../config";

const Profecerscard = () => {
  const [profecerdata, setProfecerdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const localImages = [
        "/vikash.jpeg",
            "/sunil.jpeg",
    "/subam.jpeg",
    "/vipin.jpeg",
  ];

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
          profecerdata.map((profecer, index) => (
            <div className="profCard" key={profecer._id}>
              <div className="profImgWrapper">
                <img
                  src={localImages[index] || profecer.imgsrc}
                  alt={profecer.name}
                  loading="lazy"
                />
              </div>
              <h3 className="profName">{profecer.name}</h3>
              <p className="profRole">{profecer.role}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profecerscard;
