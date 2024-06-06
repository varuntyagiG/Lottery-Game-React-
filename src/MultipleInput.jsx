import { useState } from "react";

function MultipleInput() {
  let [formData, setformData] = useState({ username: "", fullName: "" });

  function HandleInputChange(event) {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setformData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  }
  function FormFunc(event) {
    event.preventDefault();
    setformData({
      username: "",
      fullName: "",
    });
  }

  return (
    <div>
      <form action="" onSubmit={FormFunc}>
        <label htmlFor="text">Username:</label>
        <input
          type="text"
          id="text"
          placeholder="enter your name"
          value={formData.username}
          onChange={HandleInputChange} // Event associated With input is onChange
          name="username"
        />
        <br />
        <br />
        <label htmlFor="text1">FullName:</label>
        <input
          type="text"
          id="text1"
          placeholder="enter your FullName"
          value={formData.fullName}
          onChange={HandleInputChange} // Event associated With input is onChange
          name="fullName"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export { MultipleInput };
