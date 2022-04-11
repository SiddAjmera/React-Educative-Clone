import React from 'react';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function FreeRein() {
  return (
    <div>
      <h1>FREE-REIN</h1>
      <p>
        Free-rein leadership, also called Laissez-Faire, is a type of leadership
        style in which leaders are hands-off and allow group members to make the
        decisions. Mangers set objectives and employees are free to do whatever
        is appropriate to accomplish those objectives.
      </p>
      <img
        className="img-fluid"
        src="https://i.ibb.co/44WqQG0/img-01.jpg"
        alt="Leadership Styles"
      />
      <ButtonToolbar
        className="justify-content-between mt-4"
        aria-label="Section Buttons"
      >
        <Button variant="outline-secondary" as={Link} to="/democratic">
          <i class="bi bi-arrow-left"></i> Back
        </Button>
        <Button variant="outline-primary" as={Link} to="/be-selective">
          Next <i class="bi bi-arrow-right"></i>
        </Button>
      </ButtonToolbar>
    </div>
  );
}
