
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Rowlist from './components/Rows/RowList/Rowlist';

function App() {
  return (
    <div className="App">
        <Header />

        <Banner />
        <Rowlist/>
        <Footer />
    </div>
  );
}

export default App;
