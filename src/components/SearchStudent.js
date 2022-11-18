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
import { useMemo } from "react";
import { useCallback } from "react";
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
        }
        .Mui-focused {
          color: ${({ theme }) => theme.colors.header};
          transform: scale(1);
        }
        .css-1ptx2yq-MuiInputBase-root-MuiInput-root::after {
          border-bottom: 4px solid ${({ theme }) => theme.colors.headeractive};
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



 return (
    <Searchwrapper>
          <Container className="search_section common_margin">
            <div className="search_area">
              <FormControl sx={{ m: 1, width: "40ch" }} onChange={findStudent} >
                <InputLabel htmlFor="student">
                  Search student By Name...
                </InputLabel>
                <Input
                  type="search"
                  value={list}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
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
