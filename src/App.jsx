import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Main />} />
        <Route path="/" element />
        <Route path="/" element />
      </Route>
    </Routes>
  );
}

export default App;
