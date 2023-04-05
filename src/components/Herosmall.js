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
import hero from '../assets/images/hero1.png';
import Skewright from './Skewright';
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom';


const Herosmall = (props) => {
    const Hero=styled.section`
        margin-top:64px;
        margin-bottom: 50px;
        height: 40vh;
        position: relative;
        background-image:url(${hero});
        background-color:rgb(106,106,179,.5);
        background-size: 100%;
        background-repeat: no-repeat;
        ${'' /* background-position:right; */}
        .parent{
            display:flex;
            flex-direction:column;
            padding: 20px 0px;
            height: 40vh;
            justify-content: space-around;
            .section{
                flex-basis:100%;
            }
            .part1{
                h1{
                    position: relative;
                    overflow: hidden;
                    padding-left: 20px;
                    color: white;
                    font-weight: 200;
                    letter-spacing: 2px;
                    &::before{
                        content: "";
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        background: #ff9898;
                        transform: rotate(42deg);
                        left: -22px;
                        top: -19px;
                    }
                    span{
                        font-weight:400;
                    }
                }
            }
            .part2{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: flex-start;
                article{
                    border-left:1px solid #dfb6b6;
                    flex-basis: 30%;
                    padding-left: 10px;
                    h6{
                        color: #ff9898;
                        font-size: 20px;
                        font-weight: 400;
                        span{
                            font-weight:300;
                            color: #ff9898;
                        }
                    }
                    span{
                        font-size: 21px;
                        color: white;
                        font-weight: 600;
                    }
                }
            }
        }
    `;

    const {pageName,areaName,areaTotalStudent,field} = props;
    console.log('areatotal');
    console.log(areaTotalStudent);   
    const navigate = useNavigate();

  return (
    <Hero>
        <Container>
           <div className='parent'>
           <div className='section part1'>
                <h1>{pageName} <span>{areaName}</span></h1>
           </div>
           {

            areaTotalStudent!==undefined?
            <div className='section part2'>
               <article>
                    <h6>total <span>{areaName}</span> {field}</h6>
                    <span>{areaTotalStudent}</span>
                </article>
           </div>
           :"" 
           }
           </div>
        </Container>
    </Hero>
  )
}

export default Herosmall