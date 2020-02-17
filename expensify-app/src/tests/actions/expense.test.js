import {
  addExpense,
  editExpense,
  removeExpense
} from "../../redux/actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "Last rent" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "Last rent" }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "New jeans",
    amount: 5500,
    createdAt: 2000,
    note: "Brand new pair of jeans"
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
