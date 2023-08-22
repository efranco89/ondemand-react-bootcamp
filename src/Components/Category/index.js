import React from "react";
import { CategoryCard } from "../CategoryCard";
import { CategoryCardItem } from "../CategoryCardItem";
import { CategoryContext } from "../../Contexts/CategoryContext";
import { Error } from "../Error";
import { Loading } from "../Loading";
import './css/style.css'
import './css/tablet.css'
import './css/desktop.css'

const Category = () => {

  const { loading, 
    error, 
    categories 
  } = React.useContext(CategoryContext);

  return(
    <section className="categories__container">
      <div className="categories__container-title">
        <p>Categories</p>
      </div>
      <CategoryCard
        error={error}
        loading={loading}
        categories={categories}

        onError={() => <Error />}
        onLoading={() => <Loading />}
        render={ category => (
          <CategoryCardItem
            key={category.id}
            alt={category.data.main_image.alt}
            url={category.data.main_image.url}
            slugs={category.slugs}
          />

        )}
      >          
      </CategoryCard>
    </section>
  )
}

export { Category }