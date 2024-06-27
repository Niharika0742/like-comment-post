import React, { useState } from 'react';

const MovableImage = () => {
  const [position, setPosition] = useState({ top: '10%', left: '10%' });

  const handleMouseEnter = () => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight -400));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth -400));
    setPosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
  };

  const imageStyle = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    transition: 'all 1s',
    height:200,
    width:200
  };

  return (
    <body style={{background:'url(https://gardenandhappy.com/wp-content/uploads/2019/03/purple-coneflower-3517969_1920-1.jpg)', width: '100O%',
      height: '100vh', backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',}}>
    <div onMouseEnter={handleMouseEnter} style={{ position: 'relative', width: '100px', height: '100px' }}>
      <img
        src="http://bestanimations.com/Animals/Insects/Butterflys/butterfly-animated-gif-45.gif"
        alt="Example"
        style={imageStyle}
      />
    </div>
    </body>
  );
};

export default MovableImage;
