import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'
import book from '../assets/images/book.png'
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import rightbg from '../assets/images/right-bg.png';
import Skewright from './Skewright';
import Typewriter from "typewriter-effect";


const Hero = () => {
    const Hero=styled.section`
        margin-top:66px;
        height: 100vh;
        position: relative;
        background-image:url(${rightbg});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        .parent{
            display:flex;
            flex-wrap:wrap;
            align-content:center;
            flex-direction:row;
            height:70vh;
            .section{
                flex: 1 1 50%;
            }
            .logo{
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                flex-direction: column;
                justify-content: center;
                img{
                    max-width:40%;
                    align-self:center;
                }
                Button{
                    align-self: center;
                }
                h3{
                    color:${({theme})=>theme.colors.headeractive};
                    font-family:inherit;
                    font-size:2.5rem;
                    margin-top: 30px!important;
                }
            }
            .image{
                display: flex;
                justify-content: flex-end;
                img{
                    max-width:65%;
                }
            }
        }
    `;

  return (
    <Hero>
        <Container>
           <div className='parent'>
            <div className='logo section'>
                <img src={logo} alt="student logo"/>
                <Button variant="contained" className='mt-3 common_button' startIcon={<StarBorderIcon />}>
                    Topper
                </Button>
                <Typography variant="h3" className='mt-3'>
                        <Typewriter options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "I want to be a Doctor",
                                "I want to be an Engineer",
                                "I want to be a Teacher"
                        ]
                        }}/>
                    
                </Typography>
                
                
            </div>
            <div className='image section text-center'>
                <img src={book} alt="student logo"/>
            </div>
           </div>
        </Container>
        <Skewright/>
    </Hero>
  )
}

export default Hero