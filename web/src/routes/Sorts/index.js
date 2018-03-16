import React from "react";

import Container from "../../components/Container";
import SortContainer from "../../containers/Sorts";

const Sort = (props) => {
  return (
    <Container width={1100}>
      <p className="all-title">全部分类</p>
      <SortContainer />
    </Container>
  );
};

export default Sort;