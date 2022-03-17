import logo from './logo.svg';
import { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './components/MenuComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { DISHES } from './shared/dishes';
import './App.css';

function App() {
  
  const [dishes,setDishes]=useState(DISHES);

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <HeaderComponent />
      <MenuComponent dishes={dishes} />
      <FooterComponent />
    </div>
  );
}

export default App;