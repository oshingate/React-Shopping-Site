import React from 'react';
import { render } from 'react-dom';
import { products } from '../data.json';
import _ from 'lodash';

class CartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article className='cartCard'>
        <div className='cartCard-imgDiv'>
          <img
            className='flexi-img'
            src={'/static/products/' + this.props.ele.sku + '_1.jpg'}
            alt={'cardimg'}
          />
        </div>
        <div className='cartCard-content'>
          <div>
            <h5>{this.props.ele.title}</h5>
            <h6>{this.props.ele.style}</h6>

            <span>
              Price:- {this.props.ele.currencyFormat} {this.props.ele.price}
            </span>
          </div>
          <div className='flex center addRemove-cart'>
            <a
              href='#'
              onClick={(event) => {
                this.props.handleIncInCart(event, this.props.ele);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-plus-circle'
                viewBox='0 0 16 16'
              >
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
              </svg>
            </a>
            <h4>
              {this.props.data.cart.items.reduce((acc, cv) => {
                if (cv.title === this.props.ele.title) {
                  acc = acc + 1;
                }
                return acc;
              }, 0)}
            </h4>
            <a
              href='#'
              onClick={(event) => {
                this.props.handleDecInCart(event, this.props.ele);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-dash-circle'
                viewBox='0 0 16 16'
              >
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' />
              </svg>
            </a>
          </div>
        </div>
      </article>
    );
  }
}

export default CartCard;
