import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const SortItem = ({ data }) => {
  return (
    <Link className="sort-item" to={`/lives/${data.ename}`}>
      <div className="picture" style={{
        backgroundImage: `url(${data.picture})`
      }}></div>
      <p>{data.cname}</p>
    </Link>
  );
};

const SortList = (props) => {
  const { sorts, history } = props;
  return (
    <ul className="sort-list">
      {
        sorts.map((item, index) => (
          <li key={`${index}-${item.id}`}>
            <SortItem data={item} history={history} />
          </li>
        ))
      }
    </ul>
  );
};
SortList.defaultProps = {
  sorts: []
};

export default SortList;