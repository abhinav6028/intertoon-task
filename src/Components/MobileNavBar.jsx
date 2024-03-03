import { Grid, Box, Typography, Badge } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';


export default function MobileNavBar() {

    const navigate = useNavigate()

    const [menu, setMenu] = React.useState(false)


    const MenuBar = () => {

        setMenu(!menu)

    }

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
            display: { xs: "block", md: "none" }, overflow: 'none',
            bgcolor: "#0a367f"
        }}>

            <Grid container sx={{
                width: "100%", display: 'flex',
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
                position: "fixed",
                zIndex: "110", top: "0", left: "0",
                bgcolor: "#0a367f"
            }} >

                <Grid position="fixed" left="0" xs={2} sm={2} sx={{ bgcolor: "" }}>

                    {menu ? <CloseIcon sx={{ ml: 2, color: "#FFF", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
                        <MenuIcon sx={{ ml: 2, color: "#FFF", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

                </Grid>

                <Grid container xs={7} sm={7} bgcolor='' sx={{ justifyContent: 'end' }}>
                    <Grid

                        container
                        sm={7}
                        xs={7}
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                        component="img"
                        sx={{
                            bgcolor: '',
                            py: { xs: 0.6, sm: 1 },
                        }}
                        alt="The house from the offer."
                        src="https://mvecdemo.intertoons.com/ec/img/Intertoons_Logo.png"
                    />

                </Grid>

                <Grid container xs={5} sm={4} sx={{ bgcolor: '', justifyContent: 'end' }}>

                    <Badge badgeContent={4} color="primary" sx={{ bgcolor: '', mr: { xs: 2, sm: 4 }, cursor: 'pointer' }}>
                        <FavoriteBorderIcon color="action" sx={{ fontSize: 30, color: '#FFF' }} />
                    </Badge>

                    <Badge
                        onClick={() => navigate('/cart')}
                        badgeContent={data?.length} color="primary" sx={{ bgcolor: '', mr: { xs: 1, sm: 4 }, cursor: 'pointer' }}>
                        <ShoppingCartIcon color="red" sx={{ fontSize: 30, color: '#FFF' }} />
                    </Badge>

                    <MoreVertIcon sx={{ fontSize: 30, color: '#FFF', cursor: 'pointer', mr: { xs: 1, sm: 4 } }} />

                </Grid>


            </Grid>

        </Grid >
    )
}
