import React from 'react'
import "./Mostexpectedvote.css"

const Mostexpectedvote = () => {
  return (
    <div className='Mostexpectedvotemaindiv'>
        <h1> for most probility or most voted student data</h1>
    <div className='Mostexpectedvotediv'>
      {[1,2,3,4,5,6,7,8].map((item, index) => (
        <div className='Mostexpectedvote' key={index}>
          <p>img</p>
          <p>Name</p>
          <p>Total Votes</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Mostexpectedvote
