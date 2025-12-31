import React, { useEffect } from 'react';
import "./Mainnav.css";
import { useNavigate } from 'react-router-dom';
const Mainnavbar = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        onClose();
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  return (
    <div className={`mainnav ${isVisible ? 'show' : 'hide'}`}>
      <button className='closemainnavbarbtn' onClick={onClose}>X</button>

      <div className='mainnavbox'>
     <button onClick={() => navigate('/')} >HOME</button>
<button onClick={()=>navigate('/Votesectiondiv')}>Vote</button>
<button onClick={()=>navigate('/contact')}> contact </button>
<button onClick={()=>navigate('/about')}> About </button>

      
      </div>
    </div>
  );
};

export default Mainnavbar;
