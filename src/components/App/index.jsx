import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../Home";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
