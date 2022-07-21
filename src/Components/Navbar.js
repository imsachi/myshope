import React, { useContext } from "react";
import Searchbar from "./Searchbar";
import { StoreData } from "./Store";

function Navbar() {
  const { cartItems } = useContext(StoreData);
  return (
    <div className=" p-3  ">
      <div className="row ">
        <div className="col col-lg-3" name="Brandname">
          <a className=" ">
            <h3>taskzero</h3>
          </a>
        </div>
        <div className="col-md-auto">
          <Searchbar />
        </div>
        <div className="col col-lg-3 float-right" name="user-and-cart">
          <button className="btn  mx-3" name="cart">
            <i className="bi bi-cart"></i>
            <span class="bg-info p-1" style={{ borderRadius: "10px" }}>
              <b style={{ color: "white" }}>{cartItems}</b>
            </span>
          </button>

          <button className="btn btn-light mx-3">
            <i className="bi bi-person"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
