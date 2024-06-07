import { useState } from "react";

function Form() {
  let [fullName, setFullName] = useState("Varun");

  function handleNameChange(event) {
    setFullName(event.target.value);
  }

  return (
    <div>
      <form action="">
        <label htmlFor="text">Username:</label>
        <input
          type="text"
          id="text"
          placeholder="enter your name"
          value={fullName}
          onChange={handleNameChange} // Event associated With input is onChange
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export { Form };
