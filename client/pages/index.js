import React, { useEffect } from 'react';
import Home from '../pages/Home';
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(() => import('./Home'));
function App() {
  return <DynamicComponent />;
}

export default App;
