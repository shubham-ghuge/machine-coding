import React from "react";
import { Route, Routes } from "react-router";
import { ProductListing } from "../ProductListing";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
