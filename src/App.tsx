import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Concerts from './components/Concerts';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

import MenuContext from './context/menu';

import './App.css';

function App() {
  const { isMenuVisible } = useContext(MenuContext)

  return (
    <div className="App">
      <Header/>
      {isMenuVisible ? 
        <Menu/> :
        <Routes>
          <Route path="/" element={
            <div>
              <h1 className="a">DANS TES OREILLES</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          } />
          <Route path="/concerts" element={<Concerts />} />
        </Routes>
      }
      <Footer />
    </div>
  );
}

export default App;
