import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';

const Navbar2 = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <Navigation>
            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
                <Navbox>
                    <NavbarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}
        </Navigation>
    );
};

export default Navbar2;

const Navigation = styled.nav`
    height: 0vh;
    display: flex;
    position: relative;
    justify-content: center;
    text-transform: uppercase;
    padding: 5vh 3vw;
    z-index: 2;
    background-color: black;
    @media (max-width: 768px) {
        position: sticky;
        height: 7vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }
`;

const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    padding: 0 7vw;
    @media (max-width: 768px) {
        display: flex;
    }
`;

const Navbox = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: flex-start;
        padding-top: 15vh;
        background: #000;
        transition: all 0.3s ease-in;
        top: 0;
        left: ${props => (props.open ? '-100%' : '0')};
    }
`;

const Hamburger = styled.div`
    background-color: #fff;
    width: 30px;
    height: 4px;
    transition: all 0.3s linear;
    align-self: center;
    position: relative;
    align-self: center;
    margin-right: 80vw;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};
    ::before,
    ::after {
        width: 30px;
        height: 4px;
        background-color: #fff;
        content: '';
        position: absolute;
        transition: all 0.3s linear;
    }
    ::before {
        transform: ${props =>
            props.open
                ? 'rotate(-90deg) translate(-10px, 0px)'
                : 'rotate(0deg)'};
        top: -10px;
    }
    
    ::after {
        opacity: ${props => (props.open ? '0' : '1')};
        transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
        top: 10px;
    }
`;