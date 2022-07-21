import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreData } from "./Store";

function Searchbar() {
  const [searchResult, setSearchResult] = useState([]);
  const { storeProducts } = useContext(StoreData);
  var word = null;
  const filterSearch = (e) => {
    word = e.target.value;
    const result = storeProducts.filter((item) =>
      item.title.toLowerCase().includes(word.toLowerCase())
    );
    if (word === "") {
      setSearchResult([]);
    } else setSearchResult(result);
  };

  return (
    <div className=" container">
      <div className=" row">
        <div className="input-group">
          <input
            type="search"
            class="form-control "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={null}
            onChange={(e) => {
              filterSearch(e);
            }}
          />
          <button type="button" class="btn btn-outline-secondary ">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div
        className=" row mx-1 "
        style={{
          width: "300px",
          position: "absolute",
          backgroundColor: "white",
          zIndex: "100",
        }}
      >
        {searchResult.map((item) => (
          <Link
            to={`products/${item.id}`}
            onClick={() => setSearchResult([])}
            style={{
              textAlign: "left",
              textDecoration: "none",
              margin: "10px",
            }}
          >
            {item.title.slice(0, 30)}...
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Searchbar;
