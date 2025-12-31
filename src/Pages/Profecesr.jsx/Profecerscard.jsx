import React from 'react'
import './Profecer.css'

const Profecerscard = () => {
  const profecerdata = [
    { name: "Vikas Parik", role: "HOD & Professor", imgsrc: "https://iitb.irins.org/profile_images/52006_Arti_D_Kalro.jpg" },
    { name: "Sunil Kumar", role: "Assistant Professor", imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlj2tvL5RctDc8RbFua6W1GgY_zLpipu1CxQ&s" },
    { name: "Shubham Kumar", role: "Coordinator", imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8adRIezNWceOy_8rLXr2NT_p6VU0uvM2kQ&s" },
    { name: "Abhishek Kuchwaha", role: "Assistant Professor", imgsrc: "https://cbme.iitd.ac.in/public/storage/faculty_images/faculty_TkhHfv3JWz.jpg" }
  ]

  return (
    <div className='Profecerscardmaindiv'>
                <h1> PROFECRS DETAILS</h1>

      <div className='Profecersdiv'>
        {profecerdata.map((profecer,index)=>(
          <div className="profCard" key={index}>
            <div className="profImgWrapper">
              <img src={profecer.imgsrc} alt={profecer.name}/>
            </div>
            <h3 className="profName">{profecer.name}</h3>
            <p className="profRole">{profecer.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profecerscard
