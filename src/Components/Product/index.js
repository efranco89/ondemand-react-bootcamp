import React from 'react';
import { ProductContext } from '../../Contexts/ProductsContext';
import { ProductCard } from '../ProductCard';
import { ProductCardItem } from '../ProductCardItem';
import { Error } from '../Error';
import { Loading } from '../Loading';

import './css/style.css';
import './css/tablet.css';
import './css/desktop.css';

const Product = () => {
  const { loading, error, products } = React.useContext(ProductContext);

  return (
    <section className='products__container'>
      <div className='products__container-title'>
        <p>Featured Products</p>
      </div>
      <ProductCard
        error={error}
        loading={loading}
        products={products}
        onError={() => <Error />}
        onLoading={() => <Loading />}
        render={(product) => (
          <ProductCardItem
            key={product.id}
            alt={product.data.mainimage.alt}
            src={product.data.mainimage.url}
            shortDescription={product.data.short_description}
            tags={product.tags}
            category={product.data.category.slug}
            price={product.data.price}
            name={product.data.name}
          />
        )}
      />
    </section>
  );
};

export { Product };
