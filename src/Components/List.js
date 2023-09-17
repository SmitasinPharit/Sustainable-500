import { React, useState } from "react";
// import data from "./ListData.json";
import data from "./ESG.json";

const company_tickers = Object.keys(data.esgChart);

function List(props) {
  //   const filteredData = company_tickers.filter((el) => {
  //     if (props.input === "") {
  //       return el;
  //     } else {
  //       return el.text.toLowerCase().includes(props.input);
  //     }
  //   });
  return (
    <ul>
      {company_tickers.map((company_tickers) => (
        <li key={company_tickers}>{company_tickers}</li>
      ))}
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
