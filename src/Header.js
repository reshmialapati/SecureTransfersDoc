import React from 'react';
import './Header.css';
import logo_DarkBG from './assets/logo_DarkBG.png';
import logo_whiteBG from './assets/logo_whiteBG.png';
import MyToggle from './MyToggle';
import { AiFillHome } from 'react-icons/ai';

const Header = ({ isDarkMode, toggleDarkMode, searchTerm, setSearchTerm,setSelectedItem }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={isDarkMode ? logo_DarkBG : logo_whiteBG} alt="Logo" className="logo" />
      </div>
      <div className="header-right">
      <button className="home-button" onClick={() => setSelectedItem('Home')}>
          <AiFillHome />
        </button>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
        <div>
               <MyToggle state={isDarkMode} setState={toggleDarkMode}/>
            </div>
        
      </div>
    </header>
  );
};

export default Header;
