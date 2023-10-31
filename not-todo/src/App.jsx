import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((currentTasks) => {
      return [...currentTasks, { id: 0, title: value, inProgress: false }];
    });

    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""></label>
          <input value={value} onChange={handleChange} type="text" />
        </div>
        <button>Submit</button>
      </form>
      <form action="">
        <div>
          <h1>Here's what you shouldn't do...</h1>
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <label>
                    <input type="radio" />
                    {task.title}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </>
  );
}

export default App;
