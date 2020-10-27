import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'

import './Subtotal.css'

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
             <CurrencyFormat renderText={(value) => (
                 <>
                    <p>
                        Subtotal ({cart.length}):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal-gift">
                        <input type="checkbox" /> This Order contains a gift
                    </small>
                 </>
             )}
             decimalScale={2}
             value={getCartTotal(cart)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"Rp."} />
             <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
