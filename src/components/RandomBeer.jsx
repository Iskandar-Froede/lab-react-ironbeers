import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

function RandomBeer(props) {

  const [randomBeer, setRandomBeer] = useState([]);

  useEffect (() => {
    const fetchBeers = async () => {
      try {
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(response.data)
      setRandomBeer(response.data)   
      }
      catch(err) {
        console.log(err)
      }   
    }
      fetchBeers()
  }, []);
  
  return (

    <>
    <Link to="/"> Home </Link> 
    <h1>Random Beer</h1>  
   

      
        return (

        <div key={randomBeer._id}>
        <img src={randomBeer.image_url} height={300} alt={randomBeer.name.toLowerCase()} />
        <h2>{randomBeer.name}</h2>
        <h3>{randomBeer.tagline}</h3>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
        </div>
        )
        
    
   </>
   
  )
}

export default RandomBeer