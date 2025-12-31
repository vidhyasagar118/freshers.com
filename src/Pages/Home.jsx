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
          <img src="https://uploads.onecompiler.io/448vxda58/448vxc7dp/1000084969.jpg" alt="Freshers Party 2025" />
        </div>
        </div>
        <Votebtn />
        <Profecerscard />
        <Footer />
    </div>

  )
}

export default Home
