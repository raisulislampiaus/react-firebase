import React from 'react'
import '../product/Product.css'
import {useStateValue} from "../../StateProvider"


function Product({ id, title, image, price }) {
    const [{ basket}, dispatch] = useStateValue();

    
    const addToBasket = () => {
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: id,
              title: title,
              image: image,
              price: price,
          }
      })
    }
    return (
        <div className="products">
            <div className="lorem">
               <p>{title}</p>
               <p className="price">
                 <small>$</small>
             <strong>{price}</strong>
               </p>
               
            </div>

            <img src={image} alt='' />


            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
    
}

export default Product
