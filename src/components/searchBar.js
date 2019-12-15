import React from "react";
import SearchButton from "./controlButton";

const SearchBar = props => {
  const [search, setSearch] = React.useState();
  const [result, setResult] = React.useState([]);
  let searchFunctionality = (query, currentParentId) => {
    console.log(currentParentId, "curr");
    setResult([]);
    let children = props.fs[currentParentId].children;
    let searchResult = [];
    children.map(ele => {
      let name = props.fs[ele].name;
      let id = props.fs[ele].id;
      if (name.includes(query)) {
        searchResult = [...searchResult, id];
      }
      setResult([...searchResult]);
    });
  };
  return (
    <div className="search_wrapper">
      <div>
        <label className="flex">
          <input id="search_bar" className="search_bar" type="text" />
          <SearchButton
            handleClick={e => console.log("Searching..")}
            src="/images/search_icon.svg"
            handleClick={() => {
              let tosearch = document.getElementById("search_bar").value;
              setSearch(!search);
              searchFunctionality(tosearch, props.currentParent);
            }}
          />
        </label>
      </div>
      <ul className={!search ? "hide" : "result_wrapper no-padding"}>
        {result.length === 0 && <li>Nothing Found</li>}
        {result.map(ele => {
          return (
            <li
              key={ele}
              onClick={() => {
                setSearch(!search);
                props.fs[ele].type === "folder"
                  ? props.handleClick(ele)
                  : props.handleClick(props.fs[ele].parent);
              }}
            >
              {props.fs[ele].name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
