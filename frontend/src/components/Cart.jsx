import { useContext } from "react"
import Modal from "./UI/Modal"
import CartContext from "../store/CartContext"
import { currencyFormat } from "../util/currencyformat";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem"
export default function Cart(){
    const cartCtx=useContext(CartContext);

    const userProgressCtx=useContext(UserProgressContext)

    const cartTotal=cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity * item.price,0)

        function handleCartToClose(){
            userProgressCtx.hideCart();
        }
    function handleGoToCheckOut(){
        userProgressCtx.showCheckOut();
    }
    
    return (
        <Modal className="cart" open={userProgressCtx.progress==="cart"}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                <CartItem 
                key={item.id} 
                        name={item.name} 
                        price={item.price} 
                        quantity={item.quantity}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                        onIncrease={() => cartCtx.addItem(item)}
                />
                ))}
            </ul>
            <p className="cart-total">{currencyFormat.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCartToClose}>Close</Button>
                {cartCtx.items.length > 0?<Button onClick={handleGoToCheckOut}>Go to CheckOut</Button>:null}
            </p>
        </Modal>
    )
}