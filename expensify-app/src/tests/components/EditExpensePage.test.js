import React from "react";
import { shallow } from "enzyme";
import { expenses } from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";

let editExpense, removeExpense, wrapper;

beforeEach(() => {
  (editExpense = jest.fn()), (removeExpense = jest.fn());
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      expense={expenses[2]}
    />
  );
});

test("should render EditExpansePage", () => {
  expect(wrapper).toMatchSnapshot();
});
test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});
test("should handle removeExpense", () => {
  wrapper.find("button").simulate("click");
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
