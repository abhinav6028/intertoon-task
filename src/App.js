import logo from './logo.svg';
import './App.css';
import { Grid, useForkRef } from '@mui/material';
import Slider from './Components/Slider';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Components/Products';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';

import CartItems from './Pages/CartItems';
import MobileNavBar from './Components/MobileNavBar';


function App() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mvecdemo.intertoons.com/mvecomapi/api/v2/Products/HomeProducts');
        setData(response.data?.Data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container>

      <Header />

      <MobileNavBar />

      <Routes>

        <Route path="/" element={<HomePage fetchedData={data} />} />
        <Route path="/cart" element={<CartItems />} />

      </Routes>

    </Grid>


  );
}

export default App;


// <Header />

// <Slider fetchedData={data} />

// <Products />