import React from 'react'
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Skewleft from './Skewleft';
import Typography from '@mui/material/Typography';
import award from '../assets/images/award.jpg'
import award1 from '../assets/images/award1.png'
import award2 from '../assets/images/award2.png'
import award3 from '../assets/images/award3.png'

const Areacounting = () => {
    const Countingwrapper = styled.section`
        display:flex;
        position:relative;
        .counting_section{
            margin-top:270px;
            .parent{
                div{
                }
                .label{
                    margin-bottom:15px;
                    h3{
                    color:${({theme})=>theme.colors.headeractive};
                    font-family:inherit;
                    margin:0!important;
                    }
                    span{
                        color:${({theme})=>theme.colors.text7};
                        position: relative;
                        font-size:14px;

                    }
                }
                .list_details{
                    display:flex;
                    flex-wrap:wrap;
                    flex-direction:row;
                    .list{
                        flex:0 1 17%;
                        text-align:center;
                        padding:15px;
                        box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
                        margin: 0 25px 25px 0;
                        border-top-right-radius: 10%;
                        border-bottom-left-radius: 10%;
                        .image_container{
                            width:80%;
                            margin:auto;
                            position:relative;
                            img{
                                object-fit:cover;
                                width:75%;
                            }
                            span{
                                position: absolute;
                                left: 50%;
                                top: 40%;
                                transform: translate(-50%, -40%);
                                color: white;
                            }
                        }
                        span{
                            color:${({theme})=>theme.colors.text7};
                            position: relative;
                            font-size:14px;

                        }
                    }
                }
            }
        }
    
    `;

  return (
    <Countingwrapper>
        <Skewleft/>
        <Container className="counting_section common_margin">
            <div className='parent'>
                <div className='label'>
                    <Typography variant="h3" className='mt-3'>Let's check</Typography>
                    <span>No. of student by Area</span>
                </div>
                <div className='list_details'>
                <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                    <section className='list'>
                        <div className='image_container'>
                            <img src={award} alt="demko"/>
                            <span>98</span>
                        </div>
                        <span>khattalawada</span>                        
                    </section>
                </div>
            </div>
        </Container>
    </Countingwrapper>
  )
}

export default Areacounting