import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const Cart = ({ cart, cartEventHandler, children }) => {


    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1
        }
        // product.quantity = product.quantity || 1
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = shipping * 7 / 100
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected product: {quantity}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax.toFixed(2)} </p>
            <p>Grand Total:$ {grandTotal}</p>
            <button onClick={cartEventHandler} className='btn-cart'>
                <span> Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
           

        </div>
    );
};

export default Cart;