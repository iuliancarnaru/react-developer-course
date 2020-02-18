import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  // expect(wrapper.find("h1").length).toBe(1);
  // expect(wrapper.find("h1").text()).toBe("Expensify");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
