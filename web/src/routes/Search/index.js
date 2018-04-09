import React from 'react';

import SearchContainer from '../../containers/Search';

const Search = (props) => {
  return (
    <SearchContainer key={props.match.url} {...props} />
  );
};

export default Search;