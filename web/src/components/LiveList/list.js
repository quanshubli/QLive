import React from "react";

const Item = ({ data }) => {
  return (
    <a className="live-item" href={data.href} target="_blank">
      <div className="picture" style={{
        backgroundImage: `url(${data.picture})`
      }}></div>
      <div className="info">
        <div className="line">
          <p title={data.name}>{data.name}</p>
          <span>{data.sort_cname}</span>
        </div>
        <div className="line">
          <p>{data.nickname}</p>
          <span>{data.person_num}</span>
        </div>
      </div>
    </a>
  );
};
Item.defaultProps = {
  data: {}
};

const List = ({ data }) => {
  return (
    <ul className="live-list">
      {
        data.map((item, index) => (
          <li key={`${item.room_id}`}>
            <Item data={item} />
          </li>
        ))
      }
    </ul>
  );
};
List.defaultProps = {
  data: []
};

export default List;