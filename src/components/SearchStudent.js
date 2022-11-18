import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Item from "./Item";
import leftbg from "../assets/images/left-bg.png";
import rightbg from "../assets/images/right-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../redux/actions/studentActions";
import emptyImage from "../assets/images/empty.png"
import { useRef } from "react";




const SearchStudent = () => {
  //styled start
  const Searchwrapper = styled.section`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    display:flex;

    .search_section {
      .search_area {
        text-align: center;
        input {
          height: 2rem;
          color: ${({ theme }) => theme.colors.text7};
          border:none;
          border-bottom:1px solid ${({ theme }) => theme.colors.text7};
          width:40%;
          margin-bottom:20px;
          padding-bottom:10px;
          &:focus{
            outline:none;
          }
        }
       
      }
    }
  `;
  //styled end

  //fetch student details
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getStudent());
  },[]);



  //get student list from store  
  const studentList = useSelector((state)=>{
    return state.student;
  })

 //calling search student query
 const [list, setList] = useState("");

 const findStudent=(e)=>{
  const {value} = e.target;
  setList(value);
}

const searchResult = studentList.filter((val, index) => {
  return list !== "" ? val.name.includes(list) : val;
});


//display search data using condition
let displayData;
if(searchResult.length==0){
  displayData=<img src={emptyImage} alt="empty list" className="emptyImage"/>
}
else{
  displayData=searchResult.map((val,idx)=>{
      return <Item key={idx} id={idx} data={val}/>
  })
}

const inputVal = useRef("");
console.log(inputVal.current.input);

useEffect(()=>{
  inputVal.current.focus();
},[list])

 return (
    <Searchwrapper>
          <Container className="search_section common_margin">
            <div className="search_area">
              <input type="text" placeholder="Search student by name..." ref={inputVal} value={list} onChange={findStudent}/>
            </div>
            <div className="item_container">
              {
                displayData
              }
            </div>

           
          </Container>
    </Searchwrapper>
  );
};

export default SearchStudent;
