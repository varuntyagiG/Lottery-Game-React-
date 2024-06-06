import { useState } from "react";

function MultipleInput() {
  let [formData, setformData] = useState({
    username: "",
    fullName: "",
    password: "",
  });

  function HandleInputChange(event) {
    setformData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }
  function FormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setformData({
      username: "",
      fullName: "",
      password: "",
    });
  }

  return (
    <div>
      <form action="" onSubmit={FormSubmit}>
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
        <br />
        <br />
        <label htmlFor="text2">Password:</label>
        <input
          type="password"
          id="text2"
          placeholder="enter password"
          value={formData.password}
          onChange={HandleInputChange}
          name="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export { MultipleInput };
