import React from 'react';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function Introduction() {
  return (
    <div>
      <h1>Introduction</h1>
      <p>
        The course introduces students to some basic fundamentals of Leadership.
      </p>
      <h2>Learning Objectives</h2>
      <p>By the end of this module, you should be able to:</p>
      <ul>
        <li>Describe the three different leadership styles</li>
      </ul>
      <ButtonToolbar
        className="justify-content-end mt-4"
        aria-label="Section Buttons"
      >
        <Button variant="outline-primary" as={Link} to="/leadership-styles">
          Next <i class="bi bi-arrow-right"></i>
        </Button>
      </ButtonToolbar>
    </div>
  );
}
