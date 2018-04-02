import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const SortItem = ({ sort }) => {
  return (
    <Link className="sort-item" to={`/lives/${sort.name}`}>
      <div className="picture" style={{
        backgroundImage: `url(${sort.picture})`
      }}></div>
      <p>{sort.name}</p>
    </Link>
  );
};
SortItem.defaultProps = {
  sort: {}
};

export default SortItem;