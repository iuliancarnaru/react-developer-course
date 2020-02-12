import React from "react";
import Modal from "react-modal";

function OptionModal({ selectedOption, handleToggleModal }) {
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={handleToggleModal}
      ariaHideApp={false}
    >
      <h3>Selected option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={handleToggleModal}>Ok</button>
    </Modal>
  );
}

export default OptionModal;
