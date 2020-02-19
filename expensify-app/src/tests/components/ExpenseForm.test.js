import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expenses } from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with data correctly", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission ", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New description";
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New note";
  wrapper.find("textarea").simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "23.50";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});

test("should set amount if invalid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "25.5555";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});
