import { useState } from 'react';
import { useRef } from 'react';

const Komp2 = () => {
  const inputRef = useRef();
  const [someText, setSomeText] = useState('')
  const inputHandler = () => {
    //console.log(inputRef.current.value);
    setSomeText(inputRef.current.value)
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={inputHandler}>Pateikti</button>
      <p>{someText}</p>
    </div>
  );
};

export default Komp2;
