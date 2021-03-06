import React from 'react'
import '../../components/Checkout/Checkout.css'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import Subtotal from '../subtoltal/Subtotal'
import { useStateValue} from '../../StateProvider'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
          <div className="Checkout__l">
              <img  className="checkout__ima" src="https://cdn.pixabay.com/photo/2017/03/06/20/48/water-lily-2122505_960_720.jpg" alt="" />
             <div>
               <h3> Hello,,{user?.email}</h3>
             <h2 className="title">
                 Shopping Basket
             </h2>
             {basket.map(item=>(
                 <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                 />
             ))}

             </div>
          </div>
          <div className="checkout__r">
             <Subtotal />
          </div>
        </div>
    )
}

export default Checkout

