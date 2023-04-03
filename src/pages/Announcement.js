import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import leftbg from "../assets/images/left-bg.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Announcement = () => {
  const Announcementrwrapper=styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
  h3{
     color:${({theme})=>theme.colors.headeractive};
     font-family:inherit;
     margin-bottom:20px;
     margin-top:0px!important;
   }
   span{
        color:${({theme})=>theme.colors.text7};
        position: relative;
        font-size:14px;
  }

  .accordion_section{
    margin-top: 20px;
  }


`
  return (
    <Announcementrwrapper>
      <Container className='announcementwrapper common_margin'>
        <Typography variant="h3" className='mt-3'>Announcement</Typography>
        <span>below are the announcement list</span>

        <div className='accordion_section'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

      </Container>
    </Announcementrwrapper>
  )
}

export default Announcement