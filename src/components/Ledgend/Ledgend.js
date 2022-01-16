import React from "react";

import "./Ledgend.css";

const Ledgend = ({ledgentItemsToDisplay}) => {

  console.log("ledgentItemsToDisplay",ledgentItemsToDisplay);
  return(
    <div className="ledgent-container flex align-items-center  ">
      {ledgentItemsToDisplay.map((item) => {
        return(
          <div key={item.title}
            className="ledgend-each flex justify-content-center"
            style={{
              backgroundColor: item.color,
              color: item.textColor,
              // display:"flex",
              // flex: 1,
              // flexDirection: "column",
              // height: "100%"

            }}
          >
            <span className="ledgend-text flex justify-content-center align-items-center">{item.title}</span>
          </div>
        )
      })}
    </div>
  );
}

export default Ledgend;