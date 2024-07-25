// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length
      const cartItemSummary = cartList.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0,
      )

      return (
        <div className="cart-summary-container">
          <h1 className="cat-price-heading">
            Order Total:{' '}
            <span className="summary-price">Rs {cartItemSummary}/-</span>
          </h1>
          <p className="cart-summary-count">{cartItemsCount} Items in cart</p>
          <button type="button" className="check-out-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
