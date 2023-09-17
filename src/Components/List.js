import { React, useState } from "react";
// import data from "./ListData.json";
// import data from "./ESG.json";
import data from "../data/Simple_ESG.json";

const company_tickers = Object.keys(data); //array of the company tickers

function List(props) {
  console.log(company_tickers);
  const filteredData = company_tickers.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData
        .map((company_ticker) => (
          <li key={company_ticker}>
            <button
              onClick={() => {
                props.setSelectedCompany(data[company_ticker]);
              }}
            >
              {company_ticker}
            </button>
          </li>
        ))
        .slice(0, 5)}
    </ul>
  );
}

export default List;

// import { React, useState } from "react";
// import data from "./ESG.json";

// function List(props) {
//   const filteredData = data.filter((el) => {
//     if (props.input === "") {
//       return el;
//     } else {
//       return el.text.toLowerCase().includes(props.input);
//     }
//   });
//   return (
//     <ul>
//       {filteredData.map((item) => (
//         <li key={item.id}>{item.text}</li>
//       ))}
//     </ul>
//   );
// }

// export default List;
