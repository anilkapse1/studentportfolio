import React from 'react'
import {Outlet, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';

const Header = () => {

    const Header = styled.header`
        margin-top:10px;
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
                    border:1px solid #f8f8f8;
                    

                    &:hover{
                        border-right:1px solid ${({theme})=>theme.colors.headerborder};
                        border-bottom:1px solid ${({theme})=>theme.colors.headeractive};
                    }
                    &.active{
                       font-weight:bold;     
                       color:${({theme})=>theme.colors.headeractive};
                    }

                }
            }
        }
    `;

  return (
        <React.Fragment>
            <Header>
                <Container>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/stream">Stream</NavLink></li>
                            <li><NavLink to="/area">Area</NavLink></li>
                            <li><NavLink to="/topper">Topper</NavLink></li>
                            <li><NavLink to="/announcement">Announcement</NavLink></li>
                            <li><NavLink to="/team">Team</NavLink></li>
                        </ul>
                    </nav>
                </Container>
            </Header>
        </React.Fragment>
    )

   
}

export default Header