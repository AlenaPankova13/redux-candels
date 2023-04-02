const ChangeQuantity = ({ quantity, setQuantity }) => {
    const removeQuantity = () => {
        if (quantity <= 1) return quantity
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    return (
        <div>
            <button className="quantity" onClick={removeQuantity}>-</button>
            <span className="quantity-numbers"> {quantity} </span>
            <button className="quantity" onClick={addQuantity}>+</button>
        </div>
    )
}

export default ChangeQuantity;