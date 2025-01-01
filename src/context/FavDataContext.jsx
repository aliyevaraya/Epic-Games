import { createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const FAV = createContext(null);

function FavDataContext({ children }) {
  const cookie = new Cookies();

  const [fav, setFav] = useState(cookie.get("favorite") || []);
  function addToFav(id, img, title, discount, discountPrice, price, endSale) {
    setFav((favs) => {
      const game = favs.find((item) => item.id === id);
      if (game) {
        return favs.filter((item) => item.id !== id);
      } else
        return [
          ...favs,
          { id, img, title, discount, discountPrice, price, endSale },
        ];
    });
    cookie.set("favorite", fav)
  }

  return (
    <FAV.Provider value={{ fav, setFav, addToFav }}>{children}</FAV.Provider>
  );
}

export default FavDataContext;
