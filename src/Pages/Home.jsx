import React from 'react'
import Votebtn from './Votebtn'
import "./Home.css"
import Profecerscard from './Profecesr/Profecerscard'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <div className='fresherstempimg'>
        <div className=''>
          <img src="https://i.pinimg.com/originals/33/3e/8e/333e8e16268cbf2fb1b46ebdcaeccd90.jpg" alt="Freshers Party 2025" />
        </div>
        </div>
        <Votebtn />
        <Profecerscard />
        <Footer />
    </div>

  )
}

export default Home
