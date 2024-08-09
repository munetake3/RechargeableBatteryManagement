// src/ButtonTest.tsx
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ButtonTest = () => {
  const [text, setText] = useState('');

  function buttonClick() {
    setText('hello track');
  }

  return (
    <div>
      <Button variant='primary' onClick={buttonClick}>ボタン</Button>
      <p>{text}</p>
    </div>
  );
};

export default ButtonTest;
