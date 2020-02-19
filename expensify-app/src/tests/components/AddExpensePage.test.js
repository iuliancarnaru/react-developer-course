import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import { expenses } from "../fixtures/expenses";

let addExpense, navigate, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  navigate = jest.fn();
  wrapper = shallow(<AddExpensePage onSubmit={addExpense} navigate={navigate} />);
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  // TODO: expect(navigate).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
