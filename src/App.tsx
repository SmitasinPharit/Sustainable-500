import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div> */}
      {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
      {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      {/* </div> */}
      <h1 className="title">
        Sustainable <span className="strike">500</span>
      </h1>
      <p className="subheading">
        Dive into a web application that rates the economic sustainability of
        every company on the S&P 500. With sleek visualizations and
        comprehensive data analytics, Sustainable 500 allows you to make
        informed investment decisions that align with your financial goals.
      </p>
      <p className="user-instructions">Enter the ticker for the company you would like to learn about.</p>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          LEARN MORE
        </button> */}
      </div>
    </>
  );
}

export default App;
