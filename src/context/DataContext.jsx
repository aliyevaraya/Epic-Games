import React, { useEffect, useState } from "react";

import { createContext } from "react";
import {
  getMostPlayed,
  getTopSeller,
  getWishlist,
  games,
  getNewRelease
} from "../services/api";
export const DATA = createContext([]);

function DataContext({ children }) {
  const [sell, setTopSell] = useState([]);
  const [play, setMostPlay] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    getTopSeller().then((res) => setTopSell(res));
    getMostPlayed().then((res) => setMostPlay(res));
    getWishlist().then((res) => setWishlist(res));
    getNewRelease().then((res) => setNewRelease(res));
  }, []);

  return (
    <>
      <DATA.Provider value={{ sell, play, wishlist, games, newRelease }}>
        {children}
      </DATA.Provider>
    </>
  );
}

export default DataContext;
