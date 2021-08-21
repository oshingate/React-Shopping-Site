import React from 'react';

import Card from './Card';

class CardSec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='card-sec sec-padding'>
        <div className='container card-div flex fw'>
          {this.props.data.arrOfItems.map((ele) => {
            return (
              <Card
                key={ele.id}
                ele={ele}
                handleAddToCart={this.props.handleAddToCart}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default CardSec;
