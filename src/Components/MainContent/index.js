import React, { useContext, useState } from "react";
import { Category } from "../Category";
import { CategoryProvider } from "../../Contexts/CategoryContext";

import './css/style.css'
import './css/tablet.css'
import './css/desktop.css'



const MainContent = () => {

  return(
    <main className="main">    
      <section className="main__container">
        
        <section className="banners">
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
        </section>

        <CategoryProvider>
          <Category />
        </CategoryProvider>

        <section className="products__container">
          <div className="products__container-title">
            <p>Featured Products</p>
          </div>

          <div className="products__container-cards">

            <div className="product-cards">
              <div className="product-cards-body">
                <img
                  src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="car"
                  className="product-cards-image"
                />
              </div>
              <div className="product-cards-footer">
                <div>
                  <p className="product-cards-footer-title">Name</p>
                  <p className="product-cards-footer-description">
                    Short description Lorem ipsum dolor sit amet. Proin egestas faucibus nisl, ut dignissim sapien mollis eu. Praesent convallis feugiat diam eget commodo. 
                  </p>
                </div>
                <div className="product-cards-footer-categories">
                  <div className="category">
                    Tag
                  </div>
                  <div className="category category-example">
                    Tag
                  </div>  
                </div>
                <div className="product-cards-footer-price">
                  <div className="category category-example">
                    Category
                  </div>              
                  <div className="footer-price">
                    $ 2000 USD
                  </div>
                </div>
              </div>
            </div>

            <div className="product-cards">
              <div className="product-cards-body">
                <img
                  src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="car"
                  className="product-cards-image"
                />
              </div>
              <div className="product-cards-footer">
                <div>
                  <p className="product-cards-footer-title">Name</p>
                  <p className="product-cards-footer-description">
                    Short description Lorem ipsum dolor sit amet. Proin egestas faucibus nisl, ut dignissim sapien mollis eu. Praesent convallis feugiat diam eget commodo. 
                  </p>
                </div>
                <div className="product-cards-footer-categories">
                  <div className="category">
                    Tag
                  </div>
                  <div className="category category-example">
                    Tag
                  </div>  
                </div>
                <div className="product-cards-footer-price">
                  <div className="category category-example">
                    Category
                  </div>              
                  <div className="footer-price">
                    $ 2000 USD
                  </div>
                </div>
              </div>
            </div>


            <div className="product-cards">
              <div className="product-cards-body">
                <img
                  src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="car"
                  className="product-cards-image"
                />
              </div>
              <div className="product-cards-footer">
                <div>
                  <p className="product-cards-footer-title">Name</p>
                  <p className="product-cards-footer-description">
                    Short description Lorem ipsum dolor sit amet. Proin egestas faucibus nisl, ut dignissim sapien mollis eu. Praesent convallis feugiat diam eget commodo. 
                  </p>
                </div>
                <div className="product-cards-footer-categories">
                  <div className="category">
                    Tag
                  </div>
                  <div className="category category-example">
                    Tag
                  </div>  
                </div>
                <div className="product-cards-footer-price">
                  <div className="category category-example">
                    Category
                  </div>              
                  <div className="footer-price">
                    $ 2000 USD
                  </div>
                </div>
              </div>
            </div>




            <div className="product-cards">
              <div className="product-cards-body">
                <img
                  src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="car"
                  className="product-cards-image"
                />
              </div>
              <div className="product-cards-footer">
                <div>
                  <p className="product-cards-footer-title">Name</p>
                  <p className="product-cards-footer-description">
                    Short description Lorem ipsum dolor sit amet. Proin egestas faucibus nisl, ut dignissim sapien mollis eu. Praesent convallis feugiat diam eget commodo. 
                  </p>
                </div>
                <div className="product-cards-footer-categories">
                  <div className="category">
                    Tag
                  </div>
                  <div className="category category-example">
                    Tag
                  </div>  
                </div>
                <div className="product-cards-footer-price">
                  <div className="category category-example">
                    Category
                  </div>              
                  <div className="footer-price">
                    $ 2000 USD
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </section>     






      </section>
    </main>
  )
}

export { MainContent }