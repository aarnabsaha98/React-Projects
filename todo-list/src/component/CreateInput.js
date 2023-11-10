import { useState, useEffect } from "react";

const CreateInput = ({ onCreateTasks, setCreateTaskInput }) => {


  const [input, setInput] = useState(' ');

  const handleKeyDown = (event) => {
    console.log('key name : ' + event.key);
    console.log('hey create :: ' + event.target.value);
    setInput(event.target.value);

    if (event.key === 'Enter') {
      console.log('input :: ' + input);
      onCreateTasks(input);
      setCreateTaskInput(false);
    }
  };

  useEffect(() => {
    console.log('updated input :: ' + input);
  }, [input]);

  return <>
    <div className="input-group input-group-sm mb-4 create-input-container">
      <input
        type="text"
        placeholder="Enter your Search Text"
        className="form-control create-input"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
      />

    </div>

  </>

}

export default CreateInput;