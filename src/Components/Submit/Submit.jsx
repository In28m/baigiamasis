import React, { useEffect, useState } from 'react';

const Submit = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Paleidžiama animacija, kai komponentas atsiranda
    setIsActive(true);
  }, []);

  return (
    <section className={`subContainer ${isActive ? 'active' : ''}`}>
      <div className="content">
        <h1>Your reservation has been successfully confirmed. Thank you for choosing us!</h1>
      </div>
    </section>
  );
}

export default Submit;



