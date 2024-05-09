import { useContext } from "react";
import { currencyFormat } from "../util/currencyformat";
import Modal from "./UI/Modal";
import Input from "./Input";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";


export default function CheckOut(){
    const cartCtx=useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext)

    const cartTotal=cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity * item.price,0)

    function handleCheckoutClose(){
        userProgressCtx.hideCheckOut();
    }
    function handleSubmitOrder(e){
        e.preventDefault();
        userProgressCtx.submitOrder();
    }
    

    return (
        <Modal open={userProgressCtx.progress==="checkout"}>
            <form onSubmit={handleSubmitOrder}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormat.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="full-name"/>
                <Input label="E-Mail Address" type="email" id="email"/>
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code " type="text" id="postal-code"  />
                    <Input label="City" type="text" id="city" />

                </div>
                <p className="modal-actions">
                    <Button onClick={handleCheckoutClose} type="button" textOnly> Close</Button>
                    <Button type="Submit">Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}