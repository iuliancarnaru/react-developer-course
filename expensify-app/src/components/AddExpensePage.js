import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../redux/actions/expenses";
import { navigate } from "@reach/router";

const AddExpensePage = ({ dispatch }) => {
  return (
    <div>
      <h1>Add expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          dispatch(addExpense(expense));
          setTimeout(() => navigate("/"), 0);
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
