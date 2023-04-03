import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStudent } from '../redux/actions/studentActions';
import Item from '../components/Item';
import Typography from '@mui/material/Typography';
import leftbg from "../assets/images/left-bg.png";



const Topper = () => {
  const Topperwrapper=styled.div`
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
  
  `
//fetch student details
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getStudent());
}, []);


//get student list from store
const studentList = useSelector((state) => {
  return state.student;
});

console.log('topper page start');
console.log(studentList);

const result = studentList.filter((val,idx)=>{
  return val.topper===true
})

console.log('topper result');
console.log(result);


  return (
    <Topperwrapper>
      <Container className='areawrapper common_margin'>
      <Typography variant="h3" className='mt-3'>Topper list</Typography>
      <span className='count_head'>total no of topper student: <span className='count_stream'>{result.length}</span></span>

      <div className="item_container">
      {
        result.map((val,idx)=>{
                return (
                    <Item key={idx} id={idx} data={val} />
                )
            })
        }

      </div>
      </Container>

    </Topperwrapper>
  )
}

export default Topper