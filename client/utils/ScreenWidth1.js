import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import NavCollapse from '../components/NavCollapse';

function useWindowDimensions() {
  let width;

  useEffect(() => {
    width = window.innerWidth;
  });
  const getWindowDimensions = (value) => {
    return value;
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(width)
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{windowDimensions > 1100 ? <NavBar /> : <NavCollapse />}</>;
}
export default useWindowDimensions;
