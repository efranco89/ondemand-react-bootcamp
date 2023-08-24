import React from 'react';
import featuredBanners from '../mocks/en-us/featured-banners.json';

const BannerContext = React.createContext();

function BannerProvider({ children }) {
  const [banners, setBanners] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      const response = featuredBanners?.results;
      if (response) {
        setError(false);
        setBanners(response);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <BannerContext.Provider
      value={{
        loading,
        error,
        banners,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}

export { BannerContext, BannerProvider };
