import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';




const Home = () => {

  const Homewrapper=styled.section`
    position:relative;
    display:flex;
    .search_section{
      margin-top:200px;
      margin-bottom:100px;
      text-align:center;
      .search_area{
        input{
          height:2rem;
        }
      }
    }

  `;

  return (
    <Homewrapper>
      <Container className='search_section'>
        <div className='search_area'>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Search student...</InputLabel>
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
      </Container>
    </Homewrapper>
  )
}

export default Home