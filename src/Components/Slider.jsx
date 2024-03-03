import { Grid } from '@mui/material'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Slider({ fetchedData }) {


    console.log(fetchedData, "?????????????????//////////")

    return (

        <Grid container sx={{
            mt: { xs: 8.5, sm: 14, md: 11, lg: 11.5 },
            justifyContent: 'center', bgcolor: ''
        }}
        >
            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    fetchedData?.MainBanners?.map((data, index) =>

                        < SwiperSlide >
                            <Grid container >
                                <Grid container sx={{ justifyContent: 'center' }}>
                                    <Grid container xs={11.5} sm={11.5} md={12} lg={12} sx={{
                                        height: { xs: 100, sm: 160, md: 300 }
                                    }}>
                                        <img src={`http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl}`}
                                            alt=""
                                            width="100%"
                                            height="100%"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>


                        </SwiperSlide>

                    )
                }


            </Swiper>

            <Grid container xs={11.5} sm={11.5} lg={12} md={12}
                sx={{
                    justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'center' }, bgcolor: '',
                    mt: 1
                }}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                    {
                        fetchedData?.Promo31?.map((data, index) =>

                            <Grid container xs={3.8} sm={3.8} md={3.8} lg={3.8} sx={{
                                mt: 1
                            }}
                                component='img'
                                src={`http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl}`}
                                sx={{
                                    height: { xs: 70, sm: 100, md: 200, lg: 200 }
                                }}

                            />

                        )
                    }
                </Grid>

            </Grid>


        </Grid >
    )
}

// <Grid
// component='img'
// src={`http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl}`}
// container
// sx={{ bgcolor: 'red' }}>
// Slide 1
// </Grid>

// import { Grid } from '@mui/material';
// import React from 'react';

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

// export default function Slider({ fetchedData }) {

//     return (
//         <Grid container justifyContent="center">
//             <Grid container xs={11.5} sm={11.5} lg={12} md={12} sx={{ height: "", mt: .5 }}>
//                 <AwesomeSlider style={{ height: '400px', maxWidth: '100%' }} bullets={false} mobileTouch={true}>

//                     {
//                         fetchedData?.MainBanners?.map((data, index) =>

//                             <div
//                                 className='sliderImage'
//                                 style={{

//                                     backgroundImage: `url(http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl})`,

//                                 }} />

//                         )
//                     }

//                 </AwesomeSlider>

//         <Grid container sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'center' }, bgcolor: '' }}>

// <Grid container md={11.5} lg={11.7} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'center' }, bgcolor: '' }}>
//     <Grid container sx={{ justifyContent: 'space-between' }}>
//         {
//             fetchedData?.Promo31?.map((data, index) =>

//                 <Grid container xs={3.8} sm={3.8} md={3.8} lg={3.8} sx={{
//                     mt: 1
//                 }}
//                     component='img'
//                     src={`http://mvecdemo.intertoons.com/webadmin/${data?.imageUrl}`}

//                 />

//             )
//         }
//     </Grid>

// </Grid>
//         </Grid>
//     </Grid>

// </Grid >
//     )
// }

