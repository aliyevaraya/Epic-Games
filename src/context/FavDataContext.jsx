import { createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const FAV = createContext(null);

function FavDataContext({ children }) {
  const cookie = new Cookies();

  const [fav, setFav] = useState(cookie.get("favorite") || []);
  function addToFav({id, img, title, discountPerc, discount, discountPrice, price, endSale, addedAt, tags}) {
    setFav((favs) => {
      const game = favs.find((item) => item.id === id);
      const updatedFavs = game
        ? favs.filter((item) => item.id !== id)
        : [
            ...favs,
            { id, img, title, discountPerc, discount, discountPrice, price, endSale, addedAt, tags},
          ];
          cookie.set("favorite", updatedFavs);
          return updatedFavs;
    });
  }

  return (
    <FAV.Provider value={{ fav, setFav, addToFav }}>{children}</FAV.Provider>
  );
}

export default FavDataContext;
