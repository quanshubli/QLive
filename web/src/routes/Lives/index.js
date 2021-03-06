import React from "react";

import AllLives from "../../containers/AllLives";

const Lives = (props) => {
  return (
    <AllLives key={props.match.url} {...props} />
  );
};

export default Lives;