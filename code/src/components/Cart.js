import React from 'react';
import { render } from 'react-dom';
import { products } from '../data.json';
import _ from 'lodash';
import CartCard from './CartCard';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section
        className={this.props.data.toggleCart ? 'cart-sec' : 'cart-sec disable'}
      >
        <div className='cart-header flex jsb'>
          <div>
            <a href='#' className='cart-logo cart-logo-cart'>
              <i className='fas fa-shopping-cart'></i>
              {this.props.data.cart.items.length === 0 ? (
                ''
              ) : (
                <span>{this.props.data.cart.items.length}</span>
              )}
            </a>
          </div>
          <a href='#' className='close' onClick={this.props.handleCartClose}>
            X
          </a>
        </div>

        <div className='div-padding cart-main'>
          <h2>Cart have ({this.props.data.cart.items.length}) items</h2>
          <div className='cart-contaienr'>
            {_.uniq(this.props.data.cart.items).map((ele, i) => {
              return (
                <CartCard
                  ele={ele}
                  data={this.props.data}
                  handleIncInCart={this.props.handleIncInCart}
                  handleDecInCart={this.props.handleDecInCart}
                  key={i}
                />
              );
            })}
          </div>
          <div className='cartCard-total'>
            <h3>Total Amount:- {this.props.data.cart.total}</h3>
            <div className='flex center'>
              <a href='#' className='btn-sec'>
                Checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
