import Header from "./components/Header"
import Meals from "./components/Meals";
import { CartContextProvider} from "./store/CartContext";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut.jsx"
import SubmitOrder from "./components/SubmitOrder.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext";
function App() {
  return (
    <>
    <UserProgressContextProvider >
      <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <CheckOut />
      <SubmitOrder />
      </CartContextProvider>
    </UserProgressContextProvider>
    </>
  );
}

export default App;
