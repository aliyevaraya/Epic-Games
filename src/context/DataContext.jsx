import React, { useEffect, useState } from "react";

import { createContext } from "react";
import {
  getMostPlayed,
  getTopSeller,
  getWishlist,
  games,
  getNewRelease,
  getVideos,
  getSliderImg
} from "../services/api";
export const DATA = createContext([]);

function DataContext({ children }) {
  const [sell, setTopSell] = useState([]);
  const [play, setMostPlay] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const [video, setVideo] = useState([]);
  const [sliderImg, setSliderImg] = useState([]);

  useEffect(() => {
    getTopSeller().then((res) => setTopSell(res));
    getMostPlayed().then((res) => setMostPlay(res));
    getWishlist().then((res) => setWishlist(res));
    getNewRelease().then((res) => setNewRelease(res));
    getVideos().then((res) => setVideo(res));
    getSliderImg().then((res) => setSliderImg(res));
  }, []);

  return (
    <>
      <DATA.Provider value={{ sell, play, wishlist, games, newRelease, video, sliderImg }}>
        {children}
      </DATA.Provider>
    </>
  );
}

export default DataContext;
