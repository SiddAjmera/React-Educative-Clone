import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const StyledNavbar = styled(Navbar)`
  justify-content: revert;
`;

const StyledNavBarBrand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
`;

const StyledBrandLogo = styled.img`
  width: 25px;
  margin-right: 10px;
`;

export default function Header() {
  const [activeLink, setActiveLink] = useState();
  const [show, setShow] = useState(false);
  const [percentageCompletion, setPercentageCompletion] = useState(0);
  const percentageCompletionMap = new Map();
  percentageCompletionMap.set('/introduction', (100 / 7) * 0);
  percentageCompletionMap.set('/leadership-styles', (100 / 7) * 1);
  percentageCompletionMap.set('/autocratic', (100 / 7) * 2);
  percentageCompletionMap.set('/democratic', (100 / 7) * 3);
  percentageCompletionMap.set('/free-rein', (100 / 7) * 4);
  percentageCompletionMap.set('/be-selective', (100 / 7) * 5);
  percentageCompletionMap.set('/quiz', (100 / 7) * 6);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelect = (eventKey) => {
    console.log('eventKey: ', eventKey);
    const percentageCompletionToSet = percentageCompletionMap.get(eventKey);
    setPercentageCompletion(percentageCompletionToSet);
    setActiveLink(eventKey);
    handleClose();
  };

  return (
    <StyledNavbar bg="light" expand={false}>
      <Button variant="light" onClick={handleShow}>
        <i className="bi bi-justify"></i>
      </Button>
      <Sidebar
        show={show}
        handleClose={handleClose}
        activeLink={activeLink}
        handleSelect={handleSelect}
        percentageCompletion={percentageCompletion}
      />
      <StyledNavBarBrand as={Link} to="/">
        <StyledBrandLogo
          src="https://i.ibb.co/gmLT9gy/Educative-Logo.png"
          alt="Brand Logo"
        />
        educative
      </StyledNavBarBrand>
    </StyledNavbar>
  );
}
