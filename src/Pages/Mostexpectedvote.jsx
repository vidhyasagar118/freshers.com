import React, { useEffect, useState } from "react";
import "./Mostexpectedvote.css";

const Mostexpectedvote = () => {
  const [topStudents, setTopStudents] = useState([]);

  const loadTopStudents = async () => {
    const res = await fetch("http://localhost:5000/students/top");
    const data = await res.json();
    setTopStudents(data);
  };

  useEffect(() => {
    loadTopStudents();
  }, []);

  return (
    <div className="Mostexpectedvotemaindiv">
      <h1>Top 5 Most Voted Students</h1>
      <div className="Mostexpectedvotediv">
        {topStudents.map((s) => (
          <div className="Mostexpectedvote" key={s._id}>
            <img src={s.Imgsrc} alt={s.name} width="50px" />
            <p>Name: {s.name}</p>
            <p>Total Votes: {s.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mostexpectedvote;
