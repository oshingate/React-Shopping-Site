import React from 'react';
import { render } from 'react-dom';
import { products } from '../data.json';
import _ from 'lodash';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article key={this.props.ele.id} className='card flex-25'>
        <div className='card__img-div'>
          <img
            className='flexi-img'
            src={'/static/products/' + this.props.ele.sku + '_1.jpg'}
            alt={'cardimg'}
          />
          <span>Free shipping</span>
        </div>
        <h3>{this.props.ele.title}</h3>
        <div className='card__line'></div>
        <h4>{this.props.ele.currencyFormat + ' ' + this.props.ele.price}</h4>
        <div className='flex center'>
          <a
            href='#'
            className='btn-pri'
            onClick={(event) => {
              this.props.handleAddToCart(event, this.props.ele);
            }}
          >
            Add to cart
          </a>
        </div>
      </article>
    );
  }
}

export default Card;
