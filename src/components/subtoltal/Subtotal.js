import React from 'react'
import "../subtoltal/Subtotal.css"
import CurrencyFormat from 'react-currency-format'

import {useStateValue} from '../../StateProvider'
import { basketTotal } from '../../reducer'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
              renderText={(value) =>(
                  <>
                    <p>Subtotal ({basket.length}): <strong>{value}</strong></p>
                    <small className="subtotal__small"> 
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                  </>
              )}
              decimalScale={2}
              value={basketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button>Procced to checkout</button>
        </div>
    )
}

export default Subtotal
