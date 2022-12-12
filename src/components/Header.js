import React from 'react'
import {Outlet, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const Header = () => {
    const Header = styled.section`
        background-color:${({theme})=>theme.colors.white};
        position: fixed;
        width: 100%;
        z-index: 9999;
        padding: 10px 0px;
        top:0px;
        ul{
            display:flex;
            flex-wrap:wrap;
            justify-content:right;
            list-style-type:none;
            margin:0px;
            align-item:center;
            li{
                display:inline-block;
                a{
                    padding:10px 10px;
                    display:block;
                    color:${({theme})=>theme.colors.header};
                    font-weight:500;
                    &:hover{
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                    }
                    &.active{
                        font-weight:500;
                       color:${({theme})=>theme.colors.headeractive};
                       box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                    }

                }
            }
        }
    `;

  return (
        <Header>
            <Container>
                <nav>
                    <ul>
                        <li><NavLink to="/studentportfolio">Home</NavLink></li>
                        <li><NavLink to="/stream">Stream</NavLink></li>
                        <li><NavLink to="/area">Area</NavLink></li>
                        <li><NavLink to="/topper">Topper</NavLink></li>
                        <li><NavLink to="/announcement">Announcement</NavLink></li>
                        <li><NavLink to="/team">Team</NavLink></li>
                    </ul>
                </nav>
            </Container>
        </Header>
    )

   
}

export default Header