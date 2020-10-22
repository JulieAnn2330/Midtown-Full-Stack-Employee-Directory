import React from 'react';
import Wrapper from "./components/Wrapper";
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
    <div className="body">
      <Wrapper>
       <Header />
       <Table />
       <Footer />
      </Wrapper>
    </div>
  </div>
  ); 
}

export default App;

