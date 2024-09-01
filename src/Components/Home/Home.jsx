import React from 'react'
import image from "../../assets/react.svg"
const Home = () => {
    // const image2 = "https://edu.sqi.ng/wp-content/uploads/2023/06/bg-header-sqi-1.png"

let info = [
  {id: 1, fullName:"anonymous", email:"anonymous@gmail.com", tel:"+2349023318370"},
  {id: 2, fullName:"dr. anonymous", email:"1234anonymous@gmail.com", tel:"+2349023131415"},
  {id: 3, fullName:"Mr. anonymous", email:"12anonymous@gmail.com", tel:"+234902313242321"}
]


  let data = info.map((element)=>{
    return(
      <div key={element.id}>
          <small>{element.id}.</small>
          <p>{element.fullName}</p>
          <p>{element.email}</p>
          <p>{element.tel}</p>
      </div>
    )
    
  })


    return (
    <>
   {data}

   {info.map((element, i)=>(
     <ol key={i}>
      <li>{element.fullName}</li>
      <li>{element.email}</li>
      <li>{element.id}</li>
     </ol>
   ))
   }

   {}
  {/* <div className='mango vh-100 d-flex align-items-center' style={{padding: '20px', fontSize: '20px', color: 'blue', textAlign: 'center', backgroundColor: 'white', fontWeight: 'bold' }}>Welcome to the Future of LearningStudy to become a global talent
  Learn new tech skills using a world-class curriculum from top industry experts in an accredited 
        <img src={image2} alt="" />
  </div> */}


    </>
  )
}

export default Home