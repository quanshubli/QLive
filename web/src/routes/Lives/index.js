import React from "react";

import Container from "../../components/Container";
import LivesContainer from "../../containers/Lives";

import "./index.scss";

const AllLives = (props) => {
  return (
    <Container width={1100}>
      <p className="all-title">全部直播</p>
      <LivesContainer {...props} />
    </Container>
  );
};

export default AllLives;