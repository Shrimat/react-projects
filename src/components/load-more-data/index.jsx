import React, { useEffect, useState } from "react";
import './styles.css';

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // Number of times the load button is clicked
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  const handleLoadButtonClick = () => {
    setCount((prev) => prev+1);
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length ? (
          products.map((product) => {
            return (
              <div className='product' key={product.id}>
                <img src={product.thumbnail} alt={product.title}/>
                <p>{product.title}</p>
              </div>
            );
          })
        ) : null}
      </div>
      <div className="button-container">
        <button onClick={handleLoadButtonClick}>Load More Products</button>
      </div>
    </div>
  );
}

export default LoadMoreData;
