import React from "react";
import { render } from "react-dom";
// Higher Order Component (HOC) - a component that renders another component

// 1. reuse code
// 2. render hijacking
// 3. prop manipulation
// 4. abstract state

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

render(
  <AdminInfo isAdmin={false} info="Here are the details" />,
  document.getElementById("root")
);
