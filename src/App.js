import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from ".//Components/List.js";
import data from "./data/Simple_ESG.json";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [selectedCompnayValue, setSelectedCompanyValue] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    setSelectedCompanyValue("");
  };

  return (
    <>
      <h1 className="title">
        Sustainable <span className="strike">500</span>
      </h1>
      <p className="subheading">
        Dive into a single page web application that retrieves the
        sustainability of every company on the <b>S&P 500</b>. With concise
        visualizations and simple design, Sustainable 500 allows you to make
        informed investment decisions based off the company's ESG score.
      </p>
      <p className="subheading">
        <b>What is an ESG score?</b> ESG stands for Environmental, Social, and
        Governance, and is a measure of how well a company addresses risks and
        concerts related to the three categories.
      </p>
      <p className="user-instructions">
        Enter a ticker to retrieve a company's ESG score:
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
        <List input={inputText} setSelectedCompany={setSelectedCompanyValue} />
      </div>
      {/* <p className="esg-text">
        ESG (Environment, Social, and Governance) Score:
      </p> */}
      <div className="card">{selectedCompnayValue}</div>
    </>
  );
}

export default App;
