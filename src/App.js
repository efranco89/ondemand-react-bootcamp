import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { MainContent } from './Components/MainContent';
import { CategoryProvider } from './Contexts/CategoryContext';
import { ProductProvider } from './Contexts/ProductsContext';
import { BannerProvider } from './Contexts/BannerContext';
import './App.css';

function App() {
  return (
    <>
      <BannerProvider>
        <CategoryProvider>
          <ProductProvider>
            <Header />
            <MainContent />
            <Footer />
          </ProductProvider>
        </CategoryProvider>
      </BannerProvider>
    </>
  );
}

export default App;
