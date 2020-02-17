import expensesReducer from "../../redux/reducers/expenses";
import moment from "moment";

// test data
export const expenses = [
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

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "5",
    description: "New car",
    note: "my first car",
    amount: 650000,
    createdAt: moment(0).add(3, "days")
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
  // OR
  // expect(state[state.length - 1].description).toBe("New car");
});
test("should edit an expense", () => {
  const amount = 128000;

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { amount }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});
test("should not edit an expense if id not found", () => {
  const amount = 128000;

  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: { amount }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
