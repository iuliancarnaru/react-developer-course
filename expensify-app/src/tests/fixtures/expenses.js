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
