import React from 'react'
import { Link } from "react-router-dom";

function SingleBeer(oneBeer) {
  return (
    <>
     <Link style={{display: 'block', backgroundColor: '#6CB4EE', height: '100px'}} to="/"> Home </Link> 

     <h1>Beer Details</h1>  

      { oneBeer && oneBeer.map((beer) => {
        return (
        <div key={beer._id}>
        <img src={beer.image_url} height={300} alt={beer.name.toLowerCase()} />
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        </div>
        )
        
      })}

    </>
  )
}

export default SingleBeer