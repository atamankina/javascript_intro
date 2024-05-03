import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodList from './components/FoodList';
import LuckyNumber from './components/LuckyNumber';

function App() {

  const name = "Galina";
  const year = new Date().getFullYear();

  return (
    <>
      <Header name={name} />
      <FoodList />
      <LuckyNumber />
      <Footer name={name} year={year}/>
    </>
  );
}

export default App;
