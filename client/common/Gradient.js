import React from 'react';

function Gradient({ color1, color2 }) {
  return (
    <div
      className={`gradient `}
      style={{
        backgroundImage: `linear-gradient(
${color1},${color2}
  )`,
      }}
    ></div>
  );
}

export default Gradient;
