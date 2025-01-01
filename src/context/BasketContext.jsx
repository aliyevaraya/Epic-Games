import { createContext, useState } from "react";
import { Cookies } from "react-cookie";

export const BASKET = createContext(null);

function BasketContext({ children }) {
  const cookie = new Cookies();

  const [basket, setBasket] = useState(cookie.get("basket") || []);
  function addToCart(id, img, title, discount, discountPrice, price, endSale) {
    setBasket((cart) => {
      const game = cart.find((item) => item.id === id);
      if (game) {
        return cart.filter((item) => item.id !== id);
      } else
        return [
          ...cart,
          { id, img, title, discount, discountPrice, price, endSale },
        ];
    });
    cookie.set("basket", basket);
  }
  return (
    <BASKET.Provider value={{ basket, setBasket, addToCart }}>
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
