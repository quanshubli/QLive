import React from "react";

import Container from "../../components/Container";
import AllLivesContainer from "../../containers/allLives";

import "./index.scss";

const AllLives = () => {
  return (
    <Container width={1100}>
      <p className="all-title">全部直播</p>   
      <AllLivesContainer />
    </Container>
  );
};

export default AllLives;