import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from ".//Components/List.js";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

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
      <div className="main">
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <List input={inputText} />
      </div>
      <div className="card"></div>
    </>
  );
}

export default App;
