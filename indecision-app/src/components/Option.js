import React from "react";

function Option({ count, handleDeleteOption, optionText }) {
  return (
    <div className="option">
      <p className="option__text">
        {count}: {optionText}
      </p>
      <button
        className="button button--link"
        onClick={event => handleDeleteOption(optionText)}
      >
        Remove
      </button>
    </div>
  );
}

export default Option;
