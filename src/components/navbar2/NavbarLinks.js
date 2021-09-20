import React from "react"
// import { Link } from "gatsby"
import {Link} from 'react-router-dom'
import styled from "styled-components"

const NavbarLinks = () => {
  return (
    <div>
        <NavItem to="/">HOME</NavItem>
      <NavItem to="/about">ABOUT</NavItem>
      <NavItem to="/projects">WORK</NavItem>
      <NavItem to="/blogs">BLOG</NavItem>
      <NavItem to="/links">LINKS</NavItem>
      <NavItem to="/contact">CONTACT</NavItem>
      </div>
  )
}

const NavItem = styled(Link)`

text-decoration: none;
display: inline-block;
white-space: nowrap;
margin: 1vw 1vw;
transition: all 200ms ease-in;
position: relative;
font-size: 0.7rem;
font-weight: 600;
color: black;
font-family: Roboto, sans-serif;
:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '';
    color: transparent;
    background: #fc6c85;
    height: 1px;
    transition: all 0.4s ease-in;
}
:hover {
    ::after {
        width: 100%;
    }
}
@media (max-width: 768px) {
    padding: 8px 30px;
    margin-left: 25px;
    font-size: 30px;
    z-index: 6;
    align-self: baseline;
    font-weight: 900;
    font-family: Arial, sans-serif;
}

`

export default NavbarLinks