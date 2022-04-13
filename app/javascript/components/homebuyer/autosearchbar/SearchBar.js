import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export const SearchBar = () => {
  const items = [
    {
      id: 0,
      name: "Santa Monica",
    },
    {
      id: 1,
      name: "Los Angels",
    },
    {
      id: 2,
      name: "San Fransisco",
    },
    {
      id: 3,
      name: "New York",
    },
    {
      id: 4,
      name: "London",
    },
    {
      id: 5,
      name: "Delhi",
    },
  ];
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  const formatResult = (item) => {
    return (
      <div>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </div>
    );
  };
  return (
    <div className="search" style={{ zIndex: "99" }}>
      <header className="App-header">
        <div style={{ width: 600 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  );
};
