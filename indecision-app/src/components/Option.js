import React from "react";

function Option({ handleDeleteOption, optionText }) {
  return (
    <div>
      {optionText}
      <button onClick={event => handleDeleteOption(optionText)}>Remove</button>
    </div>
  );
}

export default Option;
