import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'
import Home from './components/Home'



function App() {




  return (
    <div className="App">

          
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<AllBeers beerList={beers} />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />       
   </Routes>
    </div>
  );
}

export default App;
