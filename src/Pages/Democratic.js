import React from 'react';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function Democratic() {
  return (
    <div>
      <h1>DEMOCRATIC</h1>
      <p>
        Democratic leadership, also known as participative leadership, is a type
        of leadership style in which members of the group take a more
        participative role in the decision-making process.
      </p>
      <p>
        <i>Characteristics of Democratic Leadership</i>
      </p>
      <ul>
        <li>
          Group members are encouraged to share ideas and opinions, even though
          the leader retains the final say over decisions.
        </li>
        <li>Members of the group feel more engaged in the process.</li>
        <li>Creativity is encouraged and rewarded.</li>
      </ul>
      <ButtonToolbar
        className="justify-content-between mt-4"
        aria-label="Section Buttons"
      >
        <Button variant="outline-secondary" as={Link} to="/autocratic">
          <i class="bi bi-arrow-left"></i> Back
        </Button>
        <Button variant="outline-primary" as={Link} to="/free-rein">
          Next <i class="bi bi-arrow-right"></i>
        </Button>
      </ButtonToolbar>
    </div>
  );
}
