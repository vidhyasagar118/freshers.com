import React, { useEffect, useState } from "react";
import Votebtn from "./Votebtn";
import Profecerscard from "./Profecesr/Profecerscard";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/home/image")
      .then((res) => res.json())
      .then((data) => setImageUrl(data.imageUrl))
      .catch((err) => console.log("Failed to fetch image:", err));
  }, []);

  return (
    <div>
      <div className="fresherstempimg">
        {imageUrl ? <img src={imageUrl} alt="Freshers Party" /> : <p>Loading image...</p>}
      </div>
      <Votebtn />
      <Profecerscard />
      <Footer />
    </div>
  );
};

export default Home;
