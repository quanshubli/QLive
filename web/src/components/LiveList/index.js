import React from "react";

import "./index.scss";

const LiveItem = ({ style, data }) => {
  return (
    <div
      className="live-item"
      style={{ width: 240, minHeight: 200, ...style }}
    >
      <img src={data.picture} width="100%" height="135" />
      <div className="info">
        <div className="line">
          <p>{data.name}</p>
          <span>{data.classification_cname}</span>
        </div>
        <div className="line">
          <p>{data.nickname}</p>
          <span>{data.person_num}</span>
        </div>
      </div>
    </div>
  );
};
LiveItem.defaultProps = {
  style: {},
  data: {}
};

const LiveList = (props) => {
  const { lives } = props;
  return (
    <ul className="live-list">
      {
        lives.map((item, index) => (
          <li key={`${item.room_id}`}>
            <LiveItem
              style={{ margin: "0 auto" }}
              data={item}
            />
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