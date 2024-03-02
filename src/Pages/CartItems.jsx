import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Products from '../Components/Products'
import axios from 'axios';

export default function CartItems() {

    // Fetching cart items 
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://mvecdemo.intertoons.com/mvecomapi/api/v2/Order/CartList?cusId=18&guestId&pincode=8');
                setData(response?.data?.Data?.cartList);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Grid container sx={{ justifyContent: 'center', mt: 13 }}>

            <Grid container xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={{ bgcolor: '' }}>
                <Typography sx={{
                    fontSize: { xs: 24, sm: 24, md: 25, lg: 28 },
                    fontWeight: 'bold'
                }}>CART ITEMS</Typography>

                <Products
                    fetchedData={data}
                />



            </Grid>

        </Grid>
    )
}
