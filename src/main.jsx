import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./context/DataContext.jsx";
import FavDataContext from "./context/FavDataContext.jsx";
import BasketContext from "./context/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContext>
      <FavDataContext>
        <BasketContext>
          <App />
        </BasketContext>
      </FavDataContext>
    </DataContext>
  </BrowserRouter>
);
