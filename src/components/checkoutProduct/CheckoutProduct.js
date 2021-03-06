import React from 'react'
import "../../components/checkoutProduct/Style.css"
import { useStateValue } from '../../StateProvider'

function CheckoutProduct({ id, image, title, price}) {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
     dispatch({
         type: 'REMOVE_FROM_BASKET',
         id:id,
     })
    }
    return (
        <div  className="checkout">
            <img className="check__img" src={image} /> 
            <div className="check__info">
               <p className="check__title">{title}</p>
                <p className="check__price"> 
                <small>$</small>
                   <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
