import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../redux/actions/expenses";
import { navigate } from "@reach/router";

export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.addExpense(expense);
    setTimeout(() => navigate("/"), 0);
  };

  render() {
    return (
      <div>
        <h1>Add expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
