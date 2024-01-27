import React, { useEffect, useState } from 'react';

const Submit = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <section className="subContainer">
      <div className={`content ${isActive ? 'active' : ''}`}>
        <h1 className='subH1'>Your reservation has been successfully confirmed. Thank you for choosing us!</h1>
      </div>
    </section>
  )
}

export default Submit
