import React from 'react'

const Contact = () => {
  return (
   <section className='contactSection'>
    <h1>CONTACT US</h1>
      <div className='Contcontainer'>
        <div className='contactH'>
          <h1>Laamu Atoll, 
            <br /> South Central Province,
            <br /> Maldives
          </h1> 
          <h3>INFO@MALDIVES.COM</h3> 
          <h3>123-456-7890</h3>
        </div> 

        <div className="contInput">
          <h3>Message Us</h3>
            <input type="text" placeholder='name' />
            <input type="number" placeholder='phone' />
            <input type="text" placeholder='email' />
            <input className='messageInput' type="text" placeholder='Your message' />
        </div>   
      </div>
    </section>
  )
}

export default Contact