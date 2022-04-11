import React from 'react';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function BeSelective() {
  return (
    <div>
      <h1>Be Selective in your Leadership Style</h1>
      <p>
        Managing employees are not a 'one size fits all' approach. You will need
        to use all three leadership styles here on a daily basis. Consider which
        is your natural leadership style, and which you feel you need to work
        on.
      </p>
      <img
        className="img-fluid"
        src="https://i.ibb.co/vvGybzG/img-02.jpg"
        alt="Be Selective"
      />
      <ButtonToolbar
        className="justify-content-between mt-4"
        aria-label="Section Buttons"
      >
        <Button variant="outline-secondary" as={Link} to="/free-rein">
          <i class="bi bi-arrow-left"></i> Back
        </Button>
        <Button variant="outline-primary" as={Link} to="/quiz">
          Next <i class="bi bi-arrow-right"></i>
        </Button>
      </ButtonToolbar>
    </div>
  );
}
