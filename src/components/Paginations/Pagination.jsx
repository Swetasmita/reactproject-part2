import React, { useState, useEffect } from "react";
import "./pagination.css";


const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      console.log(data);
      if (data && data.products) {
        setProducts(data.products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  //Page handler
  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  return (
    <div>
      <div className="products-container">
        {products.length > 0 && products ? (
          products.slice(page * 10 - 10, page * 10).map((prods) => {
            return (
              <span className="products__single">
                <img src={prods.thumbnail} alt={prods.title} />
                <span>{prods.title}</span>
              </span>
            );
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
      {/* Paginations button */}
      <div className="pagination-container">
        {products.length > 0 && (
          <>
            <button onClick={() => selectPageHandler(page - 1)}
            disabled={page === 1}>Prev </button>
            {/* 100/10 = 10 pages on each page */}
            {[...Array(Math.ceil(products.length / 10))].map((_, i) => {
              return (
                <span
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                  key={i}
                >
                  {i + 1} {/* i+ 1 = i starts from 0. so i = 1 */}
                </span>
              );
            })}
            <button onClick={() => selectPageHandler(page + 1)}
                disabled = {page === Math.ceil(products.length/10)}>Next </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
