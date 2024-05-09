import { createContext,useState } from "react";

const UserProgressContext= createContext({
        progress:"",
        showCart: () =>{},
        hideCart: () => {},
        showCheckOut: () =>{},
        hideCheckOut:() => {},
        submitOrder:() => {},
        hideSubmitOrder:() => {}
    })

export function UserProgressContextProvider({ children}){
    const[userProgress,setUserProgress]= useState("");

    function showCart(){
        setUserProgress("cart")
    
    }
    function hideCart(){
        setUserProgress("");
    }
    function showCheckOut(){
        setUserProgress("checkout");

    }
    function hideCheckOut(){
        setUserProgress("")
    }
    function submitOrder(){
        setUserProgress("submit")
    }
    function hideSubmitOrder(){
        setUserProgress("")
    }
    const  userProgressCtx= {
        progress:userProgress,
        showCart,
        hideCart,
        showCheckOut,
        hideCheckOut,
        submitOrder,
        hideSubmitOrder
    }
    return(
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    )
    
}

export default UserProgressContext;