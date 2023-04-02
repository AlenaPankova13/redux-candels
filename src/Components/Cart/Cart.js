import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import './Cart.css'

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div className="cart-container">
            <div className="cart">
                {cartItems.map(cartItem => (
                    <CartItem cartItem={cartItem} key={cartItem.candelId}/>
                ))}
                <h3>TOTAL: $ {totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart;