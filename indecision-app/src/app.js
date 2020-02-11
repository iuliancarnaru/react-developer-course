import React, { Component } from "react";

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  };

  handleAddOption = option => {
    if (!option) {
      return `Enter valid value to add item.`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option already exists.`;
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  };

  render() {
    const title = `Indecision`;
    const subtitle = `Put your life in the hands of a computer`;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

function Action({ handlePick, hasOptions }) {
  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions}>
        What should I do?
      </button>
    </div>
  );
}

function Options({ handleDeleteOptions, options }) {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove all</button>
      {options.map(option => (
        <Option key={option} optionText={option} />
      ))}
    </div>
  );
}

function Option({ optionText }) {
  return <div>{optionText}</div>;
}

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  handleAddOption = event => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

export default IndecisionApp;
