import React, { useState } from 'react';

const Kapcsol: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const changeImage = () => {
    setIsOn(!isOn); 
  };

  return (
    <div>
      <img
        id="myImage"
        onClick={changeImage}
        src={isOn ? './pic_bulbon.gif' : './pic_bulboff.gif'}
        width="100"
        height="180"
        alt="Light Bulb"
      />
    </div>
  );
};

export default Kapcsol;