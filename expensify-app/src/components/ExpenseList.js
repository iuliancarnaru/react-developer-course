import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses";

export const ExpenseList = ({ expenses }) => (
  <div>
    {!expenses.length ? (
      <p>No expenses</p>
    ) : (
      expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
