import React, { Component } from "react";

class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = event => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
