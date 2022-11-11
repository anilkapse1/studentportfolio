import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Item from './Item';
import leftbg from '../assets/images/left-bg.png';
import rightbg from '../assets/images/right-bg.png';




const Home = () => {

  const Homewrapper=styled.section`
    position:relative;
    display:flex;
    background-color:white;
    
  background-image:url(${leftbg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  
    .search_section{
      .search_area{
        text-align:center;
        input{
          height:2rem;
          color:${({theme})=>theme.colors.text7}
        }
        .Mui-focused{
          color:${({theme})=>theme.colors.header}
        }
        .css-1ptx2yq-MuiInputBase-root-MuiInput-root::after{
          border-bottom:4px solid ${({theme})=>theme.colors.headeractive}
        }
      }
    }

  `;

  return (
    <Homewrapper>
      <Container className='search_section common_margin'>
      {/*search text field start*/}
        <div className='search_area'>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Search student By Name...</InputLabel>
          <Input
            id="standard-adornment-password"
            type= 'search'
            onChange=""
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
                  aria-label="toggle password visibility"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
        {/*search text field end*/}

        <div className='item_container'>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>

      </Container>
    </Homewrapper>
  )
}

export default Home