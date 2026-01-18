import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Mainnavbar from "./Mainnavbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const userData = localStorage.getItem("user");

  if (userData && userData !== "undefined") {
    try {
      setUser(JSON.parse(userData));
    } catch (err) {
      console.log("Invalid user in localStorage", err);
      localStorage.removeItem("user");
      setUser(null);
    }
  }
}, []);

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <div className="showbtn" onClick={() => setShowMenu(!showMenu)}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/menu-bar-icon-svg-download-png-8389626.png?f=webp&w=128"
                width="50px"
              />
            </div>
          </li>
          <li className="sitename">FRESHER.COM</li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj1RRDViiqBuHqUrTi1VwRYJ4Ir-LiIPCXg&s"
              className="logomgcub"
              alt=""
            />
          </li>
          <li>
            {user ? (
              <div className="userlogin" onClick={() => navigate("/login")}>
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg" width="40px"
                  alt={user.name}
                  className="userlogo"
                />
              </div>
            ) : (
              <button
                className="loginbtn"
                onClick={() => navigate("/login", { replace: true })}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
      <Mainnavbar isVisible={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;
