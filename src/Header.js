import React from 'react';
import './Header.css';

import MyToggle from './MyToggle';
import { AiFillHome } from 'react-icons/ai';

const Header = ({ isDarkMode, toggleDarkMode, searchTerm, setSearchTerm,setSelectedItem }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={"./logo_DarkBG.png"} alt="Logo" className="logo" />
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
  
        <div>
               <MyToggle state={isDarkMode} setState={toggleDarkMode}/>
            </div>
        
      </div>
    </header>
  );
};

export default Header;
