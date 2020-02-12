import React, { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (err) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleToggleModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    console.log(`clicked`);
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = option => {
    if (!option) {
      return `Enter valid value to add item.`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option already exists.`;
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  render() {
    const title = `Indecision`;
    const subtitle = `Put your life in the hands of a computer`;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOption={this.handleDeleteOption}
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleToggleModal={this.handleToggleModal}
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;
