import { useState } from 'react';
import './App.css';

function App() {

  const [data , setData] = useState([
    { 
    src: "/img/christina-radevich-1lj00Z7LK7U-unsplash.jpg",
    
    description:"hi you there" , price:"$2000" , id:"1", content:"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!" }
    ,{"src":"/img/nagy-arnold-U9NwKnmp-7A-unsplash.jpg"
  ,description:"hi i am here", price:"$3000" , id:"2" ,content:"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!"}

  ]);

  const handleDelete = (id) =>{
    setData((previousData) => {
     return previousData.filter(event => id !== event.id)
    })
    }
  
  return (
    <div className="App">
      {data.map((user) => (
        <div className='container' key={user.id}>
        <div className='up'>
          <img alt= "logo" src={user.src} />
        </div>
        <div className='down'>
          <div className='price'>
          <p>{user.description}</p>
          <p>{user.price} </p>
          </div>
          <div className='content'>
            <p>{user.content}</p>
            {/* <button onClick={handleClick} ></button> yeh lokne pe click krne pe delete nh ho rha tha to uske liye apn ko id pass krna hga  */}
            <button onClick={()=>handleDelete(user.id)}>Not Interested</button> 
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
}

export default App;
