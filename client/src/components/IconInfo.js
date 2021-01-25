import React from 'react';
import { useInView } from 'react-intersection-observer';

function IconInfo(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <p
      ref={ref}
      className={
        inView
          ? 'project__explanation project__explanation--icon project__explanation--visible '
          : 'project__explanation'
      }
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odio
      dolor. Nostrum voluptate aperiam provident eos totam, esse ut explicabo
      sequi numquam mollitia dolores quidem!
    </p>
  );
}

export default IconInfo;
