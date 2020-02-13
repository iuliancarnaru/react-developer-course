import React from "react";
import { Link, navigate } from "@reach/router";

const NotFoundPage = () => {
  return (
    <div>
      <p>Uppsss ... 404 Page not found! </p>
      <Link to="/">Go back to home page.</Link>
      {/* {setTimeout(() => navigate(`/`), 2000)} */}
    </div>
  );
};

export default NotFoundPage;
