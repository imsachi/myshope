import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const Product = await fetch(
      `https://fakestoreapi.com/products/${param.userId}`
    ).then((Response) => Response.json());
    setProduct(Product);
  };
  getProduct();

  return (
    <div className="card m-2" style={{ width: "250px" }}>
      <img className="card-img-right" src={product.image} />
      <a>
        <p className="card-title"></p>
      </a>
      <p className="card-text"></p>
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  );
}

export default ProductDetailsPage;
