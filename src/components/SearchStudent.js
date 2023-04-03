import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Item from "./Item";
import leftbg from "../assets/images/left-bg.png";
import rightbg from "../assets/images/right-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../redux/actions/studentActions";
import emptyImage from "../assets/images/empty.png";
import { useRef } from "react";
import { PageIndex } from "../Context";
import { useContext } from "react";
import Postpagination from "./Postpagination";

const SearchStudent = () => {
  //styled start
  const Searchwrapper = styled.section`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    display: flex;

    .search_section {
      .search_area {
        text-align: center;
        input {
          height: 2rem;
          color: ${({ theme }) => theme.colors.text7};
          border: none;
          border-bottom: 1px solid ${({ theme }) => theme.colors.text7};
          width: 40%;
          margin-bottom: 20px;
          padding-bottom: 10px;
          &:focus {
            outline: none;
          }
        }
      }
    }
  `;
  //styled end

  //fetch student details
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent());
  }, []);

  //context page number
  const { page,setPage } = useContext(PageIndex);
  const inputVal = useRef("");



  //get student list from store
  const studentList = useSelector((state) => {
    return state.student;
  });

  //------
  //------calling search student query
  const [list, setList] = useState("");

  const findStudent = (e) => {
    const { value } = e.target;
    setList(value);
    setPage(1);
  };

  const searchResult = studentList.filter((val, index) => {
    return list !== ""
      ? val.name.includes(list) || val.area.includes(list) 
      : val;
  });

  //------
  //------pagination code start
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchResult.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    inputVal.current.focus();
    setCurrentPage(page);
  }, [page,searchResult]);
  // pagination code end

  //------
  //------display search data using condition
  let displayData;
  if (searchResult.length == 0) {
    displayData = (
      <img src={emptyImage} alt="empty list" className="emptyImage" />
    );
  } else {
    displayData = currentPosts.map((val, idx) => {
      return <Item key={idx} id={idx} data={val} />;
    });
  }

  useEffect(() => {
    inputVal.current.focus();
  }, [list]);



  return (
    <Searchwrapper>
      <Container className="search_section common_margin">
        <div className="search_area">
          <input
            type="search"
            placeholder="Search student by name or area..."
            ref={inputVal}
            value={list}
            onChange={findStudent}
          />
        </div>
        <div className="item_container">{displayData}</div>
        <div className="pagination_container">
          {
            <Postpagination
              postsPerPage={postsPerPage}
              totalPost={searchResult.length}
            />
          }
        </div>
      </Container>
    </Searchwrapper>
  );
};

export default SearchStudent;
