import React from "react";
import Option from "./Option";

function Options({ handleDeleteOption, handleDeleteOptions, options }) {
  return (
    <div>
      <div className="widget-header">
        <h3>Your options</h3>
        <button className="button button--link" onClick={handleDeleteOptions}>
          Remove all
        </button>
      </div>
      {!options.length && (
        <p className="widget-message">Please add an option to get started!</p>
      )}
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
