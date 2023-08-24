import React from 'react';
import featuredProducts from '../mocks/en-us/featured-products.json';

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      const response = featuredProducts?.results;
      if (response) {
        setError(false);
        setProducts(response);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        loading,
        error,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
