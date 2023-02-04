import'./App.css';
import Nav from "./component/Nav";
import Footer from './component/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from './data';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import React, { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, book])
  }

  useEffect(()=>{
    console.log(cart)
  }, [cart])

  //function addToCart(book){
    //const dupeItem = cart.find(item => +item.id === +book.id)
    //if(dupeItem){
      //setCart(cart.map(item=>{
        //if(item.id === dupeItem.id){
          //return{
            //...item, quantity:item.quantity+1
          //}
        //}
        //else{
          //return item
        //}
      //}))
    //}
    //else{
      //setCart([...cart, {...book, quantity}])
    //}
  //}

  useEffect(()=>{
    console.log(cart)
  },[cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact render={() => <Books books={books}/>}/>
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>}/>
        <Route path="/cart" render={() => <Cart books={books} cart={cart}/>}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
