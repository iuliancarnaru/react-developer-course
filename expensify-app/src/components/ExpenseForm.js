import React, { Component } from "react";
import moment from "moment";

import { SingleDatePicker } from "react-dates";
import uuid from "uuid";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = event => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = event => {
    const amount = event.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onSubmit = event => {
    event.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            name="amount"
            id="amount"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={createdAt =>
              createdAt ? this.setState({ createdAt }) : ""
            }
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            id={uuid()}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name="note"
            id="note"
            cols="30"
            rows="10"
            placeholder="Add a note for your expense (optional)"
            onChange={this.onNoteChange}
          ></textarea>
          <button type="submit">Add expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
