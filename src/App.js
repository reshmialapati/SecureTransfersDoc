import React, { useState, useEffect, useRef} from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


const App = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const contentRef = useRef(null);

  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
      alert("Copying is not allowed!");
    };

    const handleCut = (e) => {
      e.preventDefault();
      alert("Cutting is not allowed!");
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("Right-click is disabled!");
    };
  
    const content = contentRef.current;
    content.addEventListener("copy", handleCopy);
    content.addEventListener("cut", handleCut);
    content.addEventListener("contextmenu", handleContextMenu);

    return () => {
      content.removeEventListener("copy", handleCopy);
      content.removeEventListener("cut", handleCut);
      content.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`} ref={contentRef}>
   
      <Header
        isDarkMode={isDarkMode}
        setSelectedItem={setSelectedItem}
        toggleDarkMode={toggleDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
     
      <div className="app-body">
        <Sidebar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <MainContent selectedItem={selectedItem} searchTerm={searchTerm} />
        
      </div>
      
    </div>
  );
};

export default App;
