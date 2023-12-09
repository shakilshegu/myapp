import React, { useEffect, useState } from "react";

export const Pagination = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit-100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((pro) => {
            return (
              <span key={pro.id} className="product__signle">
                <img src={pro.thumbnail} alt={pro.title} />
                <span>{pro.title}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
