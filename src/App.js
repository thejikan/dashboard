import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import { useState } from 'react';
import { Route, Redirect, Routes, Router } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from './components/SideBar';
import Components from './components/default';


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };



  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Sidebar
        // image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Routes>
          <Route path="/components" element={<Components/>} />
          <Route path="/profile" element={<Components/>} />
          <Route path="/not-found" element={<Components/>} />
          <Route path="/" element={<Content/>}/>
            
          {/* </Route> */}
          {/* <Redirect to="/not-found" /> */}
        </Routes>
        {/* <Footer /> */}
      </main>
    </div>


    // <div className="App">
    //     {/* <Header /> */}
    //     {/* <SideBar /> */}
    //     <Content />
    //   </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
