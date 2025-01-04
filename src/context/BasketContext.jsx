import { createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const BASKET = createContext(null);

function BasketContext({ children }) {
  const cookie = new Cookies();

  const [basket, setBasket] = useState(cookie.get("basket") || []);
  function addToBasket(id, img, title, discountPerc, discount, discountPrice, price, endSale) {
    setBasket((cart) => {
      const game = cart.find((item) => item.id === id);
      const updatedBasket = game
        ? cart.filter((item) => item.id !== id)
        : [
            ...cart,
            { id, img, title, discountPerc, discount, discountPrice, price, endSale },
          ];
          cookie.set("basket", updatedBasket);
          return updatedBasket;
    });
  }
  return (
    <BASKET.Provider value={{ basket, setBasket, addToBasket }}>
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
