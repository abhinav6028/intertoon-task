import { Grid } from '@mui/material';
import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Slider({ fetchedData }) {

    return (
        <Grid container justifyContent="center">
            <Grid container xs={11.5} sm={11.5} lg={12} md={12} sx={{ height: "", mt: .5 }}>
                <AwesomeSlider style={{ height: '400px', maxWidth: '100%' }} bullets={false} mobileTouch={true}>

                    {
                        fetchedData?.MainBanners?.map((data, index) =>

                            <div
                                className='sliderImage'
                                style={{

                                    backgroundImage: `url(http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl})`,

                                }} />

                        )
                    }

                </AwesomeSlider>

                <Grid container sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'center' }, bgcolor: '' }}>

                    <Grid container md={11.5} lg={11.7} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'center' }, bgcolor: '' }}>
                        <Grid container sx={{ justifyContent: 'space-between' }}>
                            {
                                fetchedData?.Promo31?.map((data, index) =>

                                    <Grid container xs={3.8} sm={3.8} md={3.8} lg={3.8} sx={{
                                        mt: 1
                                    }}
                                        component='img'
                                        src={`http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl}`}

                                    />

                                )
                            }
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </Grid >
    )
}

