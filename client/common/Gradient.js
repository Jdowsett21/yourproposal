import React from 'react';

function Gradient({ color1, color2, modifier }) {
  return (
    <div
      className={`gradient gradient--${modifier}`}
      style={{
        backgroundImage: `linear-gradient(
${color1},${color2}
  )`,
      }}
    ></div>
  );
}

export default Gradient;
