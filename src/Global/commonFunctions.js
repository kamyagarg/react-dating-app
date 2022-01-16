import React from "react";

const commonFunctions = {
  capitalizeFirstLetterOfEachWord: (str) => {
    const string = str.toLowerCase();
    return string
      ?.split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    // OR RegRx for the same
    // return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  },
};

export default commonFunctions;