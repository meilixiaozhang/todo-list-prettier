import React, { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, content];
    });
    setContent("");
    console.log(items);
  }

  function handleChange(event) {
    setContent(event.target.value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={content} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
