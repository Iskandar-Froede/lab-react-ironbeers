import React from 'react'
import { Link } from "react-router-dom";
import image1 from '../assets/beers.png';
import image2 from '../assets/random-beer.png';
import image3 from '../assets/new-beer.png';



function Home() {

  return (
    <>
    
    <img src={image1} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '50px' }} alt="beer" />
    <Link to="/beers">All Beers</Link>
    <img src={image2} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '50px' }} alt="random-beer" />
    <Link to="/random-beer">Random Beer</Link>
    <img src={image3} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '50px' }} alt="new-beer" />
    <Link to="/new-beer">Add New Beer</Link>
    </>
  )
}

export default Home