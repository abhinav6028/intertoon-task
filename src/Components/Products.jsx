import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Products({ fetchedData }) {

    const pathName = useLocation()

    console.log("????????????", pathName?.pathname);

    return (
        <Grid container sx={{ justifyContent: 'center' }}>
            <Grid container xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={{
                justifyContent: { xs: 'space-between', sm: 'start', md: 'start', lg: 'start' },
                // bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: '#0a367f' },
            }}>
                {
                    fetchedData?.map((data, index) =>

                        <Grid container xs={5.5} sm={3.5} md={2.8} lg={2.1} sx={{
                            bgcolor: '', justifyContent: "center", my: 2,
                            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            py: 3,
                            borderRadius: 2,
                            m: { sm: 2, md: 1, lg: 2 },
                            // mt: { xs: 0, sm: 1, md: 0, lg: 0 }

                        }}>
                            <Grid
                                component='img'
                                src={`http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl}`}
                                container
                                lg={9} md={9} sm={9} xs={9}
                            />

                            <Grid container lg={11} md={9} sm={9} xs={9}>

                                <Grid container lg={10}>
                                    <Typography sx={{
                                        fontSize: { lg: 16 },
                                        my: { xs: 1 }
                                    }}>
                                        {data?.prName}
                                    </Typography>
                                </Grid>

                                <Grid container sx={{ bgcolor: '', alignItems: 'center' }}>
                                    <Grid container xs={8} sm={9} md={9} lg={9} bgcolor="">

                                        <Typography sx={{
                                            fontSize: { xs: 15, lg: 20 },
                                            fontWeight: 'bold'
                                        }}>
                                            QR {data?.unitPrice}.00
                                        </Typography>
                                    </Grid>

                                    <Grid container xs={4} sm={3} md={3} lg={3} bgcolor="" sx={{ justifyContent: 'center' }}>

                                        <Box sx={{
                                            mt: 'auto', bgcolor: 'grey', borderRadius: '',
                                            width: { xs: 35, sm: 40, md: 40, lg: 40 },
                                            height: { xs: 35, sm: 40, md: 40, lg: 40 },
                                            display: pathName?.pathname == '/cart' ? 'none' : 'flex',
                                            justifyContent: 'center', alignItems: 'center', borderRadius: '50px',
                                            cursor: 'pointer', mb: { md: 1, lg: 0 }

                                        }}

                                            onClick={() => {
                                                axios.post('https://mvecdemo.intertoons.com/mvecomapi/api/v2/Order/AddToCart', {

                                                    "urlKey": data?.urlKey,
                                                    "productQty": 1,
                                                    "cusId": data?.catId,
                                                    "guestId": null

                                                })
                                                    .then(function (response) {
                                                        alert(response?.data?.Message)

                                                    })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                    });
                                            }}

                                        >
                                            <ShoppingCartIcon sx={{ fontSize: { xs: 18, sm: 20, md: 20, lg: 20 } }} />
                                        </Box>



                                        <Box sx={{
                                            mt: 'auto', bgcolor: 'red', borderRadius: '',
                                            width: { xs: 35, sm: 40, md: 40, lg: 40 },
                                            height: { xs: 35, sm: 40, md: 40, lg: 40 },
                                            display: pathName?.pathname == '/cart' ? 'flex' : 'none',
                                            justifyContent: 'center', alignItems: 'center', borderRadius: '50px',
                                            cursor: 'pointer', mb: { md: 1, lg: 0 }

                                        }}

                                            onClick={() => {
                                                alert("Oops something wrong there")
                                            }}

                                        >
                                            <DeleteIcon sx={{ fontSize: { xs: 18, sm: 20, md: 20, lg: 20 } }} />
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    )
                }
            </Grid>
        </Grid >
    )
}
