import { useState } from "react";

function TextBox() {
  let [text, setText] = useState("Add some info");

  function addText() {
    let newText = text.toUpperCase();
    setText(newText); // jo chej setText k under h vo ek text h
  }
  function Onchange(event) {
    setText(event.target.value); // setText function set the text value
  }
  return (
    <>
      <textarea
        value={text}
        rows={20}
        cols={100}
        placeholder="Add Data"
        onChange={Onchange}
      ></textarea>
      <br />
      <br />
      <button onClick={addText}>submit</button>
    </>
  );
}

export { TextBox };
