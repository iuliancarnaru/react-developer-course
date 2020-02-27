import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../redux/actions/expenses";

export class EditExpensePage extends Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    setTimeout(() => navigate("/"), 0);
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    setTimeout(() => navigate("/"), 0);
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
