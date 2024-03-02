import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import axios from 'axios'

export default function HomePage({ fetchedData }) {

    // Fetching product details 
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://mvecdemo.intertoons.com/mvecomapi/api/v2/PopularProduct?custId=18&guestId=');
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

            <Slider fetchedData={fetchedData} />

            <Products fetchedData={data} />
        </Grid>
    )
}
