import React from "react";

function Action({ handlePick, hasOptions }) {
  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions}>
        What should I do?
      </button>
    </div>
  );
}

export default Action;
