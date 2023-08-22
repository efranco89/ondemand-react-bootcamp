import React from "react";
import { Category } from "../Category";
import { CategoryProvider } from "../../Contexts/CategoryContext";
import { Product } from "../Product";
import { ProductProvider } from "../../Contexts/ProductsContext";
import { Banner } from "../Banner";
import { BannerProvider } from "../../Contexts/BannerContext";

import './css/style.css'
import './css/tablet.css'
import './css/desktop.css'

const MainContent = () => {
  
  return(
    <main className="main">    
      <section className="main__container">
        <BannerProvider>
          <Banner />
        </BannerProvider>
        {/* <section className="banners">
          <figure className="banners-figure">

            <img
              src="https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg?auto=compress,format&rect=0,0,1429,700&w=1440&h=705"
              alt="car"
              className="banners-img"
              />
          </figure>
          <div className="banners-footer">
            <p className="banners-footer-title">Title </p>
            <p className="banners-footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

              
          </div>
        </section> */}

        <CategoryProvider>
          <Category />
        </CategoryProvider>

        <ProductProvider>
          <Product />
        </ProductProvider>
        <div className="while-fix"></div>

      </section>
    </main>
  )
}

export { MainContent }