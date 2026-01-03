import React, { useEffect, useState } from "react";
import "./Votesection.css";

const Votesectiondiv = () => {
  const [students, setStudents] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const loadStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    setStudents(await res.json());
  };

  const checkVote = async () => {
    if (!user?.email) return; // no user, no vote check
    const res = await fetch(`http://localhost:5000/vote/status/${user.email}`);
    const data = await res.json();
    setHasVoted(data.hasVoted);
  };

  useEffect(() => {
    loadStudents();
    checkVote();
  }, []);

  const vote = async (enrollmentnum) => {
    if (!user?.email) {
      alert("Please login to vote!");
      return;
    }

    const res = await fetch("http://localhost:5000/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, enrollmentnum }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert("Vote Successful");
    setHasVoted(true); // disables all buttons
    loadStudents();
  };

  return (
    <div className="Votesectionmaindiv">
      <div className="Votesectiondiv">
        {students.map((s) => (
          <div className="studentCard" key={s._id}>
            <img src={s.Imgsrc} alt={s.name} />
            <h3>{s.name}</h3>
            <p>Enrollment: {s.enrollmentnum}</p>
            <p className="votes">Votes: {s.votes}</p>
            <button
              className="voteBtn"
              // disabled if user not logged in OR has already voted
              disabled={!user || hasVoted}
              onClick={() => vote(s.enrollmentnum)}
            >
              {!user ? "Login to Vote" : hasVoted ? "Voted" : "Vote"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Votesectiondiv;
