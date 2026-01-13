import React, { useEffect, useState } from "react";
import "./Votesection.css";
import { API_URL } from "../../config"; // Corrected path

const Votesectiondiv = () => {
  const [students, setStudents] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const loadStudents = async () => {
    try {
      const res = await fetch(`${API_URL}/students`);
      setStudents(await res.json());
    } catch (err) {
      console.log(err);
    }
  };

  const checkVote = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(`${API_URL}/vote/status/${user.email}`);
      const data = await res.json();
      setHasVoted(data.hasVoted);
    } catch {}
  };

  useEffect(() => {
    loadStudents();
    checkVote();
  }, []);

  const vote = async (enrollmentnum) => {
    if (!user?.email) return alert("Please login to vote!");
    try {
      const res = await fetch(`${API_URL}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, enrollmentnum }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message);

      alert("Vote Successful");
      setHasVoted(true);
      loadStudents();
    } catch (err) {
      alert("Vote failed");
    }
  };

  return (
    <div className="Votesectionmaindiv">
      <div className="Votesectiondiv">
        {students.map((s) => (
          <div className="studentCard" key={s._id}>
<img src={`${API_URL}${s.Imgsrc}`} alt={s.name} />
            <h3>{s.name}</h3>
            <p>Enrollment: {s.enrollmentnum}</p>
            <p className="votes">Votes: {s.votes}</p>
            <button className="voteBtn" disabled={!user || hasVoted} onClick={() => vote(s.enrollmentnum)}>
              {!user ? "Login to Vote" : hasVoted ? "Voted" : "Vote"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Votesectiondiv;