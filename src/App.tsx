import React from 'react';
import Header from './components/layout/Header/Header';
import './App.css';
import ContactList from './components/layout/ContactList/ContactList';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Home from './components/pages/home/Home';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="main-content">
          <Home />
        </div>
        <ContactList />
      </div>
    </div>
  );
};

export default App;
