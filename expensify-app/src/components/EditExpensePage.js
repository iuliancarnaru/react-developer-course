import React from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../redux/actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          setTimeout(() => navigate("/"), 0);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          setTimeout(() => navigate("/"), 0);
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.id)
});

export default connect(mapStateToProps)(EditExpensePage);
