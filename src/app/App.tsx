import React from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import {Catalog} from "../features/Catalog/Catalog";
import {Cart} from "../features/Cart/Cart";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Catalog/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
