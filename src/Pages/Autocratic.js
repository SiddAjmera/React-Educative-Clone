import React from 'react';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function Autocratic() {
  return (
    <div>
      <h1>AUTOCRATIC</h1>
      <p>
        Autocratic leadership, also known as authoritarian leadership, is a
        leadership style characterized by individual control over all decisions
        and little input from group members. Autocratic leaders typically make
        choices based on their ideas and judgments and rarely accept advice from
        followers. Autocratic leadership involves absolute, authoritarian
        control over a group.
      </p>
      <p>
        <i>Characteristics of Autocratic Leadership</i>
      </p>
      <ul>
        <li>Little or no input from group members</li>
        <li>Leaders make the decisions</li>
        <li>Group leaders dictate all the work methods and processes</li>
        <li>
          Group members are rarely trusted with decisions or important tasks
        </li>
      </ul>
      <ButtonToolbar
        className="justify-content-between mt-4"
        aria-label="Section Buttons"
      >
        <Button variant="outline-secondary" as={Link} to="/leadership-styles">
          <i class="bi bi-arrow-left"></i> Back
        </Button>
        <Button variant="outline-primary" as={Link} to="/democratic">
          Next <i class="bi bi-arrow-right"></i>
        </Button>
      </ButtonToolbar>
    </div>
  );
}
