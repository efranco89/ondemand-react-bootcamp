import React from 'react';
import product_categories from '../mocks/en-us/product-categories.json';

const CategoryContext = React.createContext();

function CategoryProvider({ children }) {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      const response = product_categories?.['results'];

      if (response) {
        setError(false);
        setCategories(response);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        loading,
        error,
        categories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export { CategoryContext, CategoryProvider };
