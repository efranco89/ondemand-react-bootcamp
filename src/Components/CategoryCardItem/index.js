import React from "react";

function CategoryCardItem({url, alt, slugs}) {

  return(
    <div className="category-cards">
      <div className="category-cards-body">
        <img src={url} alt={alt} className="category-cards-image" />
      </div>
      <div className="category-cards-footer">
        {
          slugs.map(slug => (
            <div key={slug} className="category">
              {slug}
            </div>
          ))
        }               
      </div>
    </div>
  )
}

export { CategoryCardItem }