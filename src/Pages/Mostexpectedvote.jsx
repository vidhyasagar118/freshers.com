import React, { useEffect, useState } from "react";
import "./Mostexpectedvote.css";
import { API_URL } from "../config";

const Mostexpectedvote = () => {
  const [topStudents, setTopStudents] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/students/top`)
      .then(res => res.json())
      .then(data => setTopStudents(data))
      .catch(console.error);
  }, []);

  return (
    <div className="Mostexpectedvotemaindiv">
      <h1>Top 5 Most Voted Students</h1>

      <div className="Mostexpectedvotediv">
        {topStudents.map(s => (
          <div className="Mostexpectedvote" key={s._id}>
            <img src={`${API_URL}${s.Imgsrc}`} alt={s.name} width="60" />
            <p>Name: {s.name}</p>
            <p>Total Votes: {s.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mostexpectedvote;
