import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import leftbg from "../assets/images/left-bg.png";
import { useEffect } from 'react';
import { getStudent } from '../redux/actions/studentActions';
import Streamseparation from '../components/Streamseparation';
import emptyImage from "../assets/images/empty.png";
import Filterarea from '../components/Filterarea';



const Area = () => {
  const Areawrapper=styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;

    
`;

//fetch student details
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getStudent());
}, []);

//get student list from store
const studentList = useSelector((state) => {
  return state.student;
});
console.log('student list');
console.log(studentList);



const [filteredarea, setFilteredArea] = useState("khattalawada")


const groupArea = studentList.reduce((acc,value)=>{
  acc[value.area] = acc[value.area] || {};
  acc[value.area][value.group] = acc[value.area][value.group] || [];
  acc[value.area][value.group].push(value)
  return acc
},[])

console.log('area');
console.log(groupArea);
const filterOption = Object.keys(groupArea);

console.log('group by area',filteredarea);
const result = groupArea[filteredarea];

console.log(result);


  //------display search data using condition
  let displayData;
  if (result == undefined) {
    displayData = (
      <img src={emptyImage} alt="empty list" className="emptyImage" />
    );
  } else {
    displayData = Object.keys(result).map((val, idx) => {
      return <Streamseparation key={idx} id={idx} groupName={val} data={result[val]}  />;
    })
  }


  const filterChangeHandler=(val)=>{
    setFilteredArea(val)

  }

  return (
    <Areawrapper>
      <Container className='areawrapper common_margin'>
      <Filterarea  
        onFilterChange={filterChangeHandler}
        selectedFiltered={filteredarea}
        filterVal={filterOption}
        />
      {
         displayData
      }
      </Container>
    </Areawrapper>
  )
}

export default Area