import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const LiveItem = ({ style, data }) => {
  return (
    <Link className="live-item" to={data.href}>
      <div className="picture" style={{
        backgroundImage: `url(${data.picture})`
      }}></div>
      <div className="info">
        <div className="line">
          <p>{data.name}</p>
          <span>{data.sort_cname}</span>
        </div>
        <div className="line">
          <p>{data.nickname}</p>
          <span>{data.person_num}</span>
        </div>
      </div>
    </Link>
  );
};
LiveItem.defaultProps = {
  data: {}
};

const LiveList = (props) => {
  const { lives, history } = props;
  return (
    <ul className="live-list">
      {
        lives.map((item, index) => (
          <li key={`${item.room_id}`}>
            <LiveItem data={item} history={history} />
          </li>
        ))
      }
    </ul>
  );
};
LiveList.defaultProps = {
  lives: []
};

export default LiveList;