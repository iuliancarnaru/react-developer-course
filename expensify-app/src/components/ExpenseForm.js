import React, { Component } from "react";

class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    if (name !== "amount") {
      this.setState(() => ({ [name]: value }));
    } else if (value.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ [name]: value }));
    }
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="amount"
            id="amount"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.handleInputChange}
          />
          <textarea
            name="note"
            id="note"
            cols="30"
            rows="10"
            placeholder="Add a note for your expense (optional)"
            onChange={this.handleInputChange}
          ></textarea>
          <button type="submit">Add expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
