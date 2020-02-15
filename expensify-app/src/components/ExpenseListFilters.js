import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../redux/actions/filters";

// a controled input is when the value is controlled by JS.

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={event => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={event => {
        if (event.target.value === "date") {
          props.dispatch(sortByDate());
        } else if (event.target.value === "amount") {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
