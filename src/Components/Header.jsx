import { Badge, Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    // const navigate = useNavigate()

    // const [data, setData] = useState();
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://mvecdemo.intertoons.com/mvecomapi/api/v2/Order/CartList?cusId=18&guestId&pincode=8');
    //             setData(response);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     fetchData();
    // }, []); // Fetch data initially when component mounts

    // const handleRefetchData = () => {
    //     setLoading(true); // Set loading state to true while fetching
    //     fetchData(); // Call fetchData function to refetch data
    // };  


    const navigate = useNavigate()

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://mvecdemo.intertoons.com/mvecomapi/api/v2/Order/CartList?cusId=18&guestId&pincode=8');
            setData(response.data?.Data?.cartList);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRefetchData = () => {
        setLoading(true);
        fetchData();
    };



    return (
        <Grid container sx={{
            bgcolor: '#0a367f',
            justifyContent: 'center',
            py: 3,
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
            position: 'fixed', zIndex: 500
        }}>
            <Grid container bgcolor="" md={11.5} lg={11.5}>

                <Grid container md={2.5} lg={2.5} sx={{ bgcolor: '' }}>

                    <Grid
                        lg={9}
                        md={10}
                        component='img'
                        src='https://mvecdemo.intertoons.com/ec/img/Intertoons_Logo.png'
                        alt=''
                        onClick={() => navigate('/')}

                        sx={{ cursor: 'pointer' }}
                    />

                </Grid>


                <Grid container md={6} lg={4.5} sx={{ bgcolor: '', alignItems: 'center' }}>

                    <Grid container md={2.5} lg={2} sx={{ height: '100%', bgcolor: '#FFF', alignItems: 'center' }}>

                        <Grid md={8} lg={8} container sx={{
                            bgcolor: '', justifyContent: 'center'
                        }}>

                            <Typography color="#000">All</Typography>

                        </Grid>

                        <Grid>
                            <KeyboardArrowDownIcon sx={{ color: '#000' }} />
                        </Grid>
                    </Grid>

                    <Grid container md={7} lg={9} sx={{ height: '100%', bgcolor: '', }}>
                        <input
                            type="text"
                            placeholder='Search for products'
                        />
                    </Grid>
                    <Grid container md={1} lg={1} sx={{ height: '100%', bgcolor: '#60a605', alignItems: 'center', justifyContent: 'center' }}>
                        <SearchIcon sx={{ fontSize: 22, color: '#FFF' }} />
                    </Grid>
                </Grid>

                <Grid container md={3} lg={5} sx={{ bgcolor: '', justifyContent: 'end', alignItems: 'center', ml: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Box sx={{ mr: { md: 2, lg: 4 } }}>
                            <select name="cars" id="cars">
                                <option value="volvo">
                                    <Typography sx={{ cursor: 'pointer' }}>Login</Typography>
                                </option>
                            </select>
                        </Box>

                        <Badge badgeContent={4} color="primary" sx={{ bgcolor: '', mr: { md: 2, lg: 4 }, cursor: 'pointer' }}>
                            <FavoriteBorderIcon color="action" sx={{ fontSize: 30, color: '#FFF' }} />
                        </Badge>

                        <Badge
                            onClick={() => navigate('/cart')}
                            badgeContent={data?.length} color="primary" sx={{ bgcolor: '', mr: { md: 2, lg: 4 }, cursor: 'pointer' }}>
                            <ShoppingCartIcon color="red" sx={{ fontSize: 30, color: '#FFF' }} />
                        </Badge>

                        <MoreVertIcon sx={{ fontSize: 30, color: '#FFF', cursor: 'pointer' }} />

                    </Box>
                </Grid>

            </Grid >
        </Grid >
    )
}
