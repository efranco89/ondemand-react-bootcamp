import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { MainContent } from './Components/MainContent';
import './App.css';
// import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
     
      {/* <main>
        This is the main <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis orci et ante tincidunt pharetra. Suspendisse auctor ultricies ornare. Nam sit amet turpis id ante laoreet posuere. Maecenas accumsan mi sed tempus bibendum. Suspendisse in enim ac erat ornare tempor at a quam. Sed fringilla id lacus sed molestie. Sed nec auctor mi.
        </p>
      </main> */}

    </>
  );
}

export default App;
