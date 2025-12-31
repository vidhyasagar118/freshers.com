  

import React, { useState } from 'react';
import './Votesection.css';

const Votesectiondiv = () => {
  const students = [
  { name: "Abhishekh", enrollmentnum: "MGCU2025CSIT3001", Imgsrc: "" },
  { name: "Rahul", enrollmentnum: "MGCU2025CSIT3002", Imgsrc: "" },
  { name: "Aman", enrollmentnum: "MGCU2025CSIT3003", Imgsrc: "" },
  { name: "Rohit", enrollmentnum: "MGCU2025CSIT3004", Imgsrc: "" },
  { name: "Sumit", enrollmentnum: "MGCU2025CSIT3005", Imgsrc: "" },
  { name: "Ankit", enrollmentnum: "MGCU2025CSIT3006", Imgsrc: "" },
  { name: "Vikas", enrollmentnum: "MGCU2025CSIT3007", Imgsrc: "" },
  { name: "Pankaj", enrollmentnum: "MGCU2025CSIT3008", Imgsrc: "" },
  { name: "Saurabh", enrollmentnum: "MGCU2025CSIT3009", Imgsrc: "" },
  { name: "Kunal", enrollmentnum: "MGCU2025CSIT3010", Imgsrc: "" },

  { name: "Nikhil", enrollmentnum: "MGCU2025CSIT3011", Imgsrc: "" },
  { name: "Aakash", enrollmentnum: "MGCU2025CSIT3012", Imgsrc: "" },
  { name: "Deepak", enrollmentnum: "MGCU2025CSIT3013", Imgsrc: "" },
  { name: "Ravi", enrollmentnum: "MGCU2025CSIT3014", Imgsrc: "" },
  { name: "Manish", enrollmentnum: "MGCU2025CSIT3015", Imgsrc: "" },
  { name: "Shubham", enrollmentnum: "MGCU2025CSIT3016", Imgsrc: "" },
  { name: "Arjun", enrollmentnum: "MGCU2025CSIT3017", Imgsrc: "" },
  { name: "Sachin", enrollmentnum: "MGCU2025CSIT3018", Imgsrc: "" },
  { name: "Prashant", enrollmentnum: "MGCU2025CSIT3019", Imgsrc: "" },
  { name: "Harsh", enrollmentnum: "MGCU2025CSIT3020", Imgsrc: "" },

  { name: "Ajay", enrollmentnum: "MGCU2025CSIT3021", Imgsrc: "" },
  { name: "Vivek", enrollmentnum: "MGCU2025CSIT3022", Imgsrc: "" },
  { name: "Mohit", enrollmentnum: "MGCU2025CSIT3023", Imgsrc: "" },
  { name: "Ashish", enrollmentnum: "MGCU2025CSIT3024", Imgsrc: "" },
  { name: "Ritesh", enrollmentnum: "MGCU2025CSIT3025", Imgsrc: "" },
  { name: "Sandeep", enrollmentnum: "MGCU2025CSIT3026", Imgsrc: "" },
  { name: "Ujjwal", enrollmentnum: "MGCU2025CSIT3027", Imgsrc: "" },
  { name: "Prince", enrollmentnum: "MGCU2025CSIT3028", Imgsrc: "" },
  { name: "Gaurav", enrollmentnum: "MGCU2025CSIT3029", Imgsrc: "" },
  { name: "Yash", enrollmentnum: "MGCU2025CSIT3030", Imgsrc: "" },

  { name: "Aditya", enrollmentnum: "MGCU2025CSIT3031", Imgsrc: "" },
  { name: "Siddharth", enrollmentnum: "MGCU2025CSIT3032", Imgsrc: "" },
  { name: "Aryan", enrollmentnum: "MGCU2025CSIT3033", Imgsrc: "" },
  { name: "Kartik", enrollmentnum: "MGCU2025CSIT3034", Imgsrc: "" },
  { name: "Rohit Kumar", enrollmentnum: "MGCU2025CSIT3035", Imgsrc: "" },
  { name: "Neeraj", enrollmentnum: "MGCU2025CSIT3036", Imgsrc: "" },
  { name: "Abhay", enrollmentnum: "MGCU2025CSIT3037", Imgsrc: "" },
  { name: "Suraj", enrollmentnum: "MGCU2025CSIT3038", Imgsrc: "" },
  { name: "Vishal", enrollmentnum: "MGCU2025CSIT3039", Imgsrc: "" },
  { name: "Chandan", enrollmentnum: "MGCU2025CSIT3040", Imgsrc: "" },

  { name: "Lokesh", enrollmentnum: "MGCU2025CSIT3041", Imgsrc: "" },
  { name: "Rajnish", enrollmentnum: "MGCU2025CSIT3042", Imgsrc: "" },
  { name: "Shivam", enrollmentnum: "MGCU2025CSIT3043", Imgsrc: "" },
  { name: "Amit", enrollmentnum: "MGCU2025CSIT3044", Imgsrc: "" },
  { name: "Naveen", enrollmentnum: "MGCU2025CSIT3045", Imgsrc: "" },
  { name: "Tarun", enrollmentnum: "MGCU2025CSIT3046", Imgsrc: "" },
  { name: "Rohit Singh", enrollmentnum: "MGCU2025CSIT3047", Imgsrc: "" },
  { name: "Alok", enrollmentnum: "MGCU2025CSIT3048", Imgsrc: "" },
  { name: "Piyush", enrollmentnum: "MGCU2025CSIT3049", Imgsrc: "" },
  { name: "Nitin", enrollmentnum: "MGCU2025CSIT3050", Imgsrc: "" },
]

  const initialVotes = {};
  students.forEach(student => {
    initialVotes[student.enrollmentnum] = 0;
  });

  const [votes, setVotes] = useState(initialVotes);

  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (enrollmentnum) => {
    if (hasVoted) return; 

    setVotes(prevVotes => ({
      ...prevVotes,
      [enrollmentnum]: prevVotes[enrollmentnum] + 1
    }));

    setHasVoted(true);
  };

  return (
    <div className="Votesectionmaindiv">
      <div className="Votesectiondiv">
        {students.map((student, index) => (
          <div className="studentCard" key={index}>
            <img src={student.Imgsrc} alt={student.name} />
            <h4>{student.name}</h4>
            <p>{student.enrollmentnum}</p>
            <button
              onClick={() => handleVote(student.enrollmentnum)}
              disabled={hasVoted} 
            >
              {hasVoted ? "Voted" : "Vote"}
            </button>
            <p>Votes: {votes[student.enrollmentnum]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Votesectiondiv;
