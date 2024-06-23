import {createSlice} from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const initialState = {
    //to save the state in redux state as well so when refresh the state still remains the same 
    cartItems: localStorage.getItem("cartItems") 
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //add to cart
        add(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1
                toast.info(`${state.cartItems[itemIndex].breed} quantity successfully increased`, {
                    position: "top-right",
                    autoClose: 1000, 
                });
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.info(`${action.payload.breed} added to the cart`, {
                    position: "top-right",
                    autoClose: 1000, 
                })
            }
            //adding item in local storage(global object -localStorage has a method -setItem and these accepts two parameter key and value)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        //remove from the cart
        remove(state, action) {
            const nextCartItems = state.cartItems.filter(
                item => item.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.breed} removed from cart`, {
                position: "top-right",
                autoClose: 1000, 
            })
        },
        //quanity decreased from the cart
        decreaseQuantity(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            //check for the quantity
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1
                toast.info( `Decreased ${action.payload.breed} cart quantity `,{
                    posiiton: "top-right",
                    autoClose: 1000, 
                })
            }else if (state.cartItems[itemIndex].cartQuantity ===1){
                const nextCartItems = state.cartItems.filter(
                    item => item.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
                toast.error(`${action.payload.breed} removed from cart`, {
                    position: "top-right",
                    autoClose: 1000, 
                })
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        //clear cart
        clearCart(state, action){
            state.cartItems = [];
            toast.error("Cart Cleared", {
                position: "top-right",
                autoClose: 1000, 
            })
        },
        //subtotal
        getTotals(state, action) {
           let{total, quantity} =  state.cartItems.reduce((cartTotal, cartItem) => {
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total +=itemTotal
                cartTotal.quantity +=cartQuantity
                
                return cartTotal;
            }, 
            {
                total: 0,
                quantity: 0
            }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})

export const {add, remove, decreaseQuantity, clearCart, getTotals} = cartSlice.actions;
export default cartSlice.reducer;