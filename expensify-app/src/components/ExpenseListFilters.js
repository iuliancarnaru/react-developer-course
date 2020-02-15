import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../redux/actions/filters";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={event => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
