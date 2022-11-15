import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'
import footer_logo from '../assets/images/footer_logo.png'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Footer = () => {
  const Footerwrapper=styled.section`
  background-color:${({theme})=>theme.colors.text7};
  display:flex;
  .widget{
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    padding-bottom:50px;
    padding-bottom: 50px;
    border-bottom: 1px solid #8b8b8b;
    .footer_logo{
      img{
        width:60%;
      }
    }
    section{
      flex:1 1 25%;
      color:white;
      padding:16px;
      h1{
        font-size:1rem;
        text-transform: uppercase;
        font-weight: 500;
      }
      span{
        font-weight:200;
      }
    }
  }
  .copyright{
    padding: 10px;
    width: 50%;
    margin: 50px auto 0 auto;
    text-align:center;
    span{
      font-weight:200;
      color:white;
    }
    button{
      margin:0 15px;
    }
  }

  
  `;

  return (
    <Footerwrapper>
      <Container className='common_footer_margin'>
        <div className='widget'>
          <section className='footer_logo'>
            <img src={footer_logo} alt="demo"/>
          </section>
          <section>
            <h1>weebly themes</h1>
            <span>pre-sale faqs</span>
            <span>submit a ticket</span>
          </section>
          <section>
            <h1>services</h1>
            <span>theme tweak</span>
          </section>
          <section>
            <h1>showcase</h1>
            <span>widgetkit</span>
            <span>support</span>
          </section>
        </div>
        <div className='copyright'>
          <Fab size="small" color="secondary" aria-label="add">
            <HomeIcon />
          </Fab>
          <Fab size="small" color="secondary" aria-label="add">
            <ShareRoundedIcon />
          </Fab>
          <div className='my-4'>
            <span>Handcrafted with <FavoriteIcon/> kapsecode.com</span>
          </div>
        </div>

      </Container>        
    </Footerwrapper>
  )

}

export default Footer