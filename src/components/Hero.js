import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import student from '../assets/images/student.jpg'
import student1 from '../assets/images/student1.png'
import logo from '../assets/images/logo.png'
import graduate from '../assets/images/graduate.png'
import book from '../assets/images/book.png'
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Skewc from './Skewc';



const Hero = () => {
    const Hero=styled.section`
        margin-top:66px;
        height: 100vh;
        position: relative;
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
                    Total No of student 
                    {/* <Fab aria-label="edit" className='mx-2 common_button'>
                        1001
                    </Fab> */}
                </Typography>
                
                
            </div>
            <div className='image section text-center'>
                <img src={book} alt="student logo"/>
            </div>
           </div>
        </Container>
        <Skewc/>
    </Hero>
  )
}

export default Hero