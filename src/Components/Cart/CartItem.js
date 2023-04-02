import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { data } from "../Data/Data";

const CartItem = ({ cartItem }) => {
    const candels = data.find (item => item.id === cartItem.candelId)
    const dispatch = useDispatch();
    return (
        <div>
          <div>
            <p>{candels.name}</p>
            <p>{cartItem.quantity} item(s)</p>
            <p>$ {candels.price * cartItem.quantity}</p>
            <hr className="lineCart"/>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='logo'/> 
            </span>
          </div>
        </div>
    )
}

export default CartItem;