import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Logo = () => {
  return <LogoDesign to="/">VIRENDER.codes</LogoDesign>
}

const LogoDesign = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  align-self: center;
  font-family: -apple-system, Ubuntu, Cantarell, "Open Sans", sans-serif;
  :hover {
    color:red;


    transition-duration: 0.3s;
  }
  @media (max-width: 768px) {
    padding-left: 1.5rem;
    font-size: 12px;
    font-weight: 400;
  }
`

export default Logo