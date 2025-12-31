import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Freshers 2025</h2>
          <p>
            Welcome to Freshers Voting Portal <br />
            Vote fairly • Celebrate talent • One vote matters
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/Votesectiondiv")}>Vote</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Connect</h3>
          <p>📧 freshers@college.com</p>
          <p>📍 MGCU Campus</p>
        </div>

      </div>

      <div className="footer-bottom">
        @ 2025 Freshers Voting || All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
