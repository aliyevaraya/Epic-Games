import React, { useEffect, useState } from "react";

import { createContext } from "react";
import { getMostPlayed, getTopSeller, getWishlist } from "../services/api";
export const DATA = createContext([]);
function DataContext({ children }) {
  const [sell, setTopSell] = useState([]);
  const [play, setMostPlay] = useState([]);
  const [wishlist, setWishlist] = useState([]);



  useEffect(() => {
    getTopSeller().then((res) => setTopSell(res));
    getMostPlayed().then((res) => setMostPlay(res));
    getWishlist().then((res) => setWishlist(res));
  }, []);

  return (
    <>
      <DATA.Provider value={{ sell, play, wishlist }}>{children}</DATA.Provider>
    </>
  );
}

export default DataContext;
