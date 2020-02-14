// Set text filter
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// Sort by date
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// Sort by amount
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// Set start date
export const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});

// Set end date
export const setEndDate = date => ({
  type: "SET_END_DATE",
  date
});
