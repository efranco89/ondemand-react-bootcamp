import React from "react";

const ProductCardItem = ({
  src, alt, shortDescription, tags, category, price, name
}) => {
  return(
    <div className="product-cards">
      <div className="product-cards-body">
        <img
          src={src}
          alt={alt}
          className="product-cards-image"
        />
      </div>
      <div className="product-cards-footer">
        <div className="footer-info">
          <p className="product-cards-footer-title">{name}</p>
          <div className="product-cards-footer-description">
            {shortDescription}
          </div>
        </div>
        <div className="product-cards-footer-categories">
          {
            tags?.map( tag => (
              <div key={tag} className="category">
                {tag}
              </div>
            ))
          }
        </div>
        <div className="product-cards-footer-price">
          <div className="category category-example">
            {category}
          </div>              
          <div className="footer-price">
            $ {price} USD
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductCardItem }