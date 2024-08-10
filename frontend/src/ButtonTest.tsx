// src/ButtonTest.tsx
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const ButtonTest = () => {
  const [text, setText] = useState('');

  function buttonClick() {
    setText('hello track');
  }

  return (
    <div>
      <Button variant="primary" onClick={buttonClick} id="track-button">Click me!!</Button>
      <div id="track-text">{text}</div>
    </div>
  );
};

export default ButtonTest;
