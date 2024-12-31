import React, { useEffect } from "react";
import Layout from "./Layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main/Main";
import Support from "./components/Main/Support";
import Detail from "./components/Main/Detail";
import Wishlist from "./components/Main/Wishlist";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/support" element={<Support />} />
        <Route path="/game/:id" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
}

export default App;
