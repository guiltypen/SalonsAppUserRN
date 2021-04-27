import { SearchBarStyled } from "./styles";
import React from "react";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for your Salon"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
