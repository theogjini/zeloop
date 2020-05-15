import React from "react";
import LoopBox from "./LoopBox/LoopBox.jsx";
import "./App.css";

function App() {
  // async function getFirstApi(event) {
  //   event.preventDefault();
  //   const req = await fetch('/api');
  //   const parsed = await req.json();
  //   if (parsed.success) {
  //     alert("Hello from api server!!!")
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={getFirstApi}>Hello world</button> */}
        <LoopBox />
      </header>
    </div>
  );
}

export default App;
