import { useEffect } from 'react';


import data from './data';
import Tours from './components/Tours';
import React, { useState } from 'react';


const App = () => {
  // eslint-disable-next-line
  const [tours, setTours] = useState(data);

  useEffect(() => {
    document.title = "Plan With Vivek";
  }, []);
  

  
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
}

  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='app'>
     
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
