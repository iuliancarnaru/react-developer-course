import React from "react";
import Modal from "react-modal";

function OptionModal({ selectedOption, handleToggleModal }) {
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={handleToggleModal}
      ariaHideApp={false}
      className="modal"
    >
      <h3 className="modal__title">Selected option</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={handleToggleModal}>
        Ok
      </button>
    </Modal>
  );
}

export default OptionModal;
