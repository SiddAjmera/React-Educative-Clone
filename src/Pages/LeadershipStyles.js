import React from 'react';
import { Link } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default function LeadershipStyles() {
  return (
    <div>
      <h1>Leadership Styles</h1>
      <p>
        Leadership styles refers to the broad approach adopted by a leader. All
        leaders (at least all those leaders who already have followers) have
        one. If you are already a leader, that includes you. You just might not
        know what it is yet. But your followers do!
      </p>
      <p>
        Style is often based on a leader’s own beliefs, personality,
        experiences, working environment and their assessment of the situation
        at the time.
      </p>
      <img
        className="img-fluid"
        src="https://i.ibb.co/sjFC2p2/img-03.jpg"
        alt="Leadership Styles"
      />
      <p>
        Three common leadership styles that we all naturally gravitate to are:
      </p>
      <ul>
        <li>AUTOCRATIC</li>
        <li>DEMOCRATIC</li>
        <li>FREE-REIN</li>
      </ul>
      <ButtonToolbar
        className="justify-content-between mt-4"
        aria-label="Section Buttons"
      >
        <Button variant="outline-secondary" as={Link} to="/introduction">
          <i class="bi bi-arrow-left"></i> Back
        </Button>
        <Button variant="outline-primary" as={Link} to="/autocratic">
          Next <i class="bi bi-arrow-right"></i>
        </Button>
      </ButtonToolbar>
    </div>
  );
}
