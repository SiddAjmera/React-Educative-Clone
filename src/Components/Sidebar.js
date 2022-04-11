import React from 'react';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../style.css';

export default function Sidebar({
  show,
  handleClose,
  activeLink,
  handleSelect,
  percentageCompletion,
}) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Leadership Styles and Motivators</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>{percentageCompletion.toFixed(2)}% Completed</p>
        <ProgressBar variant="success" now={percentageCompletion} />
        <hr />
        <Nav
          activeKey={activeLink}
          className="flex-column"
          onSelect={handleSelect}
        >
          <Nav.Link as={NavLink} eventKey="/introduction" to="/introduction">
            Introduction
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            eventKey="/leadership-styles"
            to="/leadership-styles"
          >
            Leadership Styles
          </Nav.Link>
          <Nav.Link as={NavLink} eventKey="/autocratic" to="/autocratic">
            Autocratic
          </Nav.Link>
          <Nav.Link as={NavLink} eventKey="/democratic" to="/democratic">
            Democratic
          </Nav.Link>
          <Nav.Link as={NavLink} eventKey="/free-rein" to="/free-rein">
            Free Rein
          </Nav.Link>
          <Nav.Link as={NavLink} eventKey="/be-selective" to="/be-selective">
            Be Selective in your Leadership Style
          </Nav.Link>
          <Nav.Link as={NavLink} eventKey="/quiz" to="/quiz">
            Quiz
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
