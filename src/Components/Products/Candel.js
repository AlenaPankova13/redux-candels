import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ChangeQuantity from '../Cart/ChangeQuantity';
import { addItemToCart } from '../../redux/cartSlice';


const Candel = ({ candel }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return (
        <div className='product-box'>
        <div className='product-card'>
                <h3 className='candel-name'>{candel.name}</h3>
                <img className='img-candel' src={candel.image} width='300px' alt='candel'/>
                {/* <p>{candel.description}</p> */}
                <h4>Price: $ {candel.price}</h4>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className='button-add-to-cart' onClick={() => dispatch(addItemToCart({candel, quantity}))}>Add to cart</button>
        </div>
        </div>

    )
}

export default Candel;