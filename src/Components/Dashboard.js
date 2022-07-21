import React, { useEffect, useState, useContext } from "react";
import Products from "./Products";
import { StoreData } from "./Store";

function Dashboard() {
  const { storeProducts } = useContext(StoreData);
  const { storeCategories } = useContext(StoreData);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productDatailsPageStatus, setProductDetailsPageStatus] =
    useState(true);

  const selectCategory = (e) => {
    const getSelectedProducts = async () => {
      const selectedProducts = await fetch(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      ).then((Response) => Response.json());
      setSelectedProducts(selectedProducts);
    };
    getSelectedProducts();
  };
  const goToProductDetailsPage = (e) => {
    setProductDetailsPageStatus(true);
  };

  return (
    <div className="m-3">
      <div>
        {storeCategories.map((item) => (
          <button
            className="btn  btn-info mx-3"
            value={item}
            onClick={selectCategory}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div className="row">
        {selectedProducts.length === 0
          ? storeProducts.map((item) => (
              <Products
                productInfo={item}
                goToProductDetailsPage={goToProductDetailsPage}
              />
            ))
          : selectedProducts.map((item) => (
              <Products
                productInfo={item}
                goToProductDetailsPage={goToProductDetailsPage}
              />
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
