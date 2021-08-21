import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='hero-sec'>
        <div className='flex container jsb aic'>
          <h4>{this.props.data.productNo} Products found</h4>
          <div className='flex center'>
            <h4>Order By </h4>
            <select
              onChange={(event) => {
                this.props.handleSortByMRP(event);
              }}
            >
              <option value='normal'>Normal</option>
              <option value='desc'>Highest to Lowest</option>
              <option value='asc'>Lowest to Highest</option>
            </select>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
