import React from "react";
import Option from "./Option";

function Options({ handleDeleteOption, handleDeleteOptions, options }) {
  return (
    <div>
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove all
      </button>
      {options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
    </div>
  );
}

export default Options;
