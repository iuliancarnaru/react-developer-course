import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../redux/actions/filters";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import uuid from "uuid";

// a controled input is when the value is controlled by JS.
class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={event => {
            this.props.dispatch(setTextFilter(event.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={event => {
            if (event.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (event.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={uuid()}
          endDate={this.props.filters.endDate}
          endDateId={uuid()}
          onDatesChange={({ startDate, endDate }) => {
            this.props.dispatch(setStartDate(startDate));
            this.props.dispatch(setEndDate(endDate));
          }}
          focusedInput={this.state.calendarFocused}
          onFocusChange={calendarFocused => this.setState({ calendarFocused })}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
