import '../Styles/App.css'
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Banner />
      <div className='lmj-main'>
        <Cart />
        <ShoppingList />
      </div>
    <Footer/>
    </div>)
}

export default App;
