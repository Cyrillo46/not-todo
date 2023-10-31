import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor=""></label>
          <input value={value} onChange={handleChange} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
