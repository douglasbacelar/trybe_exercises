import React from 'react';
import Image from './Image';
import staringCat from './staringCat.jpg'
import './App.css';

function App() {
  return (
    <div>
      <Image source= { staringCat } alternativeText = "Cute cat" />
    </div>
  );
}

export default App;
