import React from 'react'
import { Link } from "react-router-dom"; 
import image1 from '../assets/beers.png';
import { useEffect, useState } from 'react';
import axios from "axios";

function AllBeers({beerList}) {

  const [beers, setBeers] = useState([])

  useEffect (() => {
    const fetchBeers = async () => {
      try {
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(response.data)
      setBeers(response.data)   
      }
      catch(err) {
        console.log(err)
      }   
    }
      fetchBeers()
  }, []);
 
  return (
    
    <>
     <Link style={{display: 'block', backgroundColor: '#6CB4EE', height: '100px'}} to="/"> Home </Link> 

     <h1>All Beers</h1>  

      { beerList && beerList.map((beer) => {
        return (
        
        <div key={beer._id}>
        <img src={beer.image_url} height={300} alt={beer.name.toLowerCase()} />
        <Link to={`/singleBeer/${beer._id}`}>
        <h2>{beer.name}</h2>
        </Link>
       
        <h3>{beer.tagline}</h3>
        <p>Created by: {beer.contributed_by}</p>
        </div>
       
        )
        
      })}

    </>
   
  )
}

export default AllBeers