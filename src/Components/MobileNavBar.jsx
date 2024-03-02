import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


export default function MobileNavBar() {

    const navigate = useNavigate()

    const [menu, setMenu] = React.useState(false)

    const navbarItems = [
        { name: 'HOME', path: '/' },
        { name: 'PROFILE', path: '/profile' },
        { name: 'REPORTS', path: '/reports' },
        { name: 'INSIGHT', path: '/insight' },
    ]


    const MenuBar = () => {

        setMenu(!menu)

    }

    return (
        <Grid container sx={{
            display: { xs: "block", md: "none" }, overflow: 'none'

        }}>

            <Box sx={{
                width: "100%", display: 'flex',
                justifyContent: "center", alignItems: "center",
                py: 1,
                position: "fixed",
                zIndex: "110", top: "0", left: "0",
                bgcolor: "#0a367f"
            }} >

                <Box position="fixed" left="0" sx={{}}>

                    {menu ? <CloseIcon sx={{ ml: 2, color: "#FFF", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
                        <MenuIcon sx={{ ml: 2, color: "#FFF", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

                </Box>

                <Box

                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }}
                    component="img"
                    sx={{
                        bgcolor: '',
                        py: { xs: 0.6, sm: 1 },
                        height: { sm: 50, xs: 40 },
                        width: { sm: 150, xs: 120 },

                    }}
                    alt="The house from the offer."
                    src="https://mvecdemo.intertoons.com/ec/img/Intertoons_Logo.png"
                />

                

            </Box>


        </Grid >
    )
}
