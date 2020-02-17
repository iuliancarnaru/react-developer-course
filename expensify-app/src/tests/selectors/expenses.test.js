import getVisibleExpenses from "../../redux/selectors/expenses";
import moment from "moment";

// test data
const expenses = [
  {
    id: "1",
    description: "Fuel",
    note: "",
    amount: 6500,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "Rent",
    note: "Rent was going up this month",
    amount: 125000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "New jeans",
    note: "",
    amount: 3500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "n",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
