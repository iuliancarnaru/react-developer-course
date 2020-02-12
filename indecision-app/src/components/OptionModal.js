import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, handleToggleModal }) => {
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={handleToggleModal}
    >
      <h3>Selected option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={handleToggleModal}>Ok</button>
    </Modal>
  );
};

export default OptionModal;
