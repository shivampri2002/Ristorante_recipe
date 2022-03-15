import logo from './logo.svg';
import { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './components/MenuComponent';
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
      <MenuComponent dishes={dishes} />
    </div>
  );
}

export default App;