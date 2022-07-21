import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreData } from "./Store";

function ProductDetailsPage() {
  const { addToCart } = useContext(StoreData);
  const { storeProducts } = useContext(StoreData);
  const { userId } = useParams();
  const product = { ...storeProducts[userId - 1] };
  const rating = { ...product.rating };

  return (
    <div className="container p-5  ">
      <div className="row border rounded border-secondary">
        <div className="col">
          <img
            src={product.image}
            name={product.title}
            style={{ width: "300px" }}
          />
        </div>
        <div className="col p-5" style={{ textAlign: "left" }}>
          <h6 className="m-3">{product.title}</h6>
          <div>
            Price : <h5>{product.price}</h5>
          </div>
          <hr />
          <p>{product.description}</p>
          <hr />
          <b>Rating: {rating.rate}</b>
          <button
            className="btn btn-outline-info m-3 "
            style={{ width: "100%" }}
            onClick={() => addToCart()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
