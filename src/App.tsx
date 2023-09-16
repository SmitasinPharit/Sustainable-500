import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <h1 className="title">
        Sustainable <span className="strike">500</span>
      </h1>
      <p className="subheading">
        Dive into a web application that rates the economic sustainability of
        every company on the <b>S&P 500</b>. With sleek visualizations and
        comprehensive data analytics, Sustainable 500 allows you to make
        informed investment decisions that align with your financial goals.
      </p>
      <p className="user-instructions">
        Enter the ticker for the company you would like to learn about:
      </p>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          LEARN MORE
        </button> */}
      </div>
    </>
  );
}

export default App;
