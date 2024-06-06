import { useState } from "react";

function CommentsForm() {
  let [formData, setformData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  function HandleInputChange(event) {
    setformData((currValue) => {
      return { ...currValue, [event.target.name]: event.target.value };
    });
  }

  let formSub = (event) => {
    event.preventDefault();
    console.log(formData);
    setformData({
      username: "",
      remarks: "",
      rating: "",
    });
  };
  return (
    <div>
      <form action="" onSubmit={formSub}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={formData.username}
          onChange={HandleInputChange}
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks:</label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="Remarks"
          value={formData.remarks}
          onChange={HandleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          placeholder="Add Rating"
          id="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={HandleInputChange}
          name="rating"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export { CommentsForm };
