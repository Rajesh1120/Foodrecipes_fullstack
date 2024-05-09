import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
export default function SubmitOrder(){

    const userProgressCtx=useContext(UserProgressContext)
    function handleCloseSubmitOrder(){
        userProgressCtx.hideSubmitOrder()
    }

    return (
        <Modal open={userProgressCtx.progress=="submit"}>
            <p >Successfully Submitted</p>
            <div className="modal-actions">
            <Button textOnly onClick={handleCloseSubmitOrder}>Close</Button>
            </div>
        </Modal>
    )
}