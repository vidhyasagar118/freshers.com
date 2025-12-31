import React, { useState } from 'react';
import "./Navbar.css"
import Mainnavbar from './Mainnavbar';
import { useNavigate, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [value, setValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className='navbar'>
<ul>
  <li>
    <div   className='showbtn'  onClick={() => setShowMenu(!showMenu)}>
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/menu-bar-icon-svg-download-png-8389626.png?f=webp&w=128" width="30px"  />
        </div>
      </li>
       
       <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj1RRDViiqBuHqUrTi1VwRYJ4Ir-LiIPCXg&s" className='logomgcub' alt="" /></li>
         <li>
        <button className='loginbtn' onClick={() => navigate('/login', { replace: true })}>
          <span className="icon-box">
            <i className="uil uil-user-circle"></i>
          </span>
          login
        </button>
        </li>
        </ul>
       
      </div>
      <Mainnavbar isVisible={showMenu} onClose={() => setShowMenu(false)} />

    </>
  );
};

export default Navbar;
