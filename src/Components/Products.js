import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreData } from "./Store";

function Products({ productInfo, goToProductDetailsPage }) {
  const { addToCart } = useContext(StoreData);
  return (
    <div className="card m-3 shadow" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={productInfo.image}
        alt="Card image cap"
        style={{ height: "300px", width: "auto" }}
      />
      <div
        className="card-body d-flex flex-column "
        style={{ textAlign: "left" }}
      >
        <Link
          to={`products/${productInfo.id}`}
          className="card-title"
          style={{ textDecoration: "none" }}
        >
          {productInfo.title.slice(0, 40)}...
        </Link>
        <hr />
        <div>
          Price : <b>{productInfo.price}</b>
        </div>
        <div>
          User rating : <b>{productInfo.rating.rate}</b>
        </div>
        <hr />
        <p className="card-text ">{productInfo.description.slice(0, 100)}...</p>
        <hr />
        <div className=" mt-auto">
          <Link
            to={`products/${productInfo.id}`}
            className="btn "
            onClick={() => addToCart()}
            style={{ backgroundColor: "pink" }}
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
