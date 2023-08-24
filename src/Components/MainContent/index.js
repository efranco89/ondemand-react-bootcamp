import { Category } from '../Category';
import { Product } from '../Product';
import { Banner } from '../Banner';

import './css/style.css';
import './css/tablet.css';
import './css/desktop.css';

const MainContent = () => {
  return (
    <main className='main'>
      <section className='main__container'>
        <Banner />

        <Category />

        <Product />

        <div className='while-fix'></div>
      </section>
    </main>
  );
};

export { MainContent };
