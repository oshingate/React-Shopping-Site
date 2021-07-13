import React from 'react';
import { render } from 'react-dom';
import { products } from '../data.json';
import _ from 'lodash';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <aside className='aside-sec'>
        <ul className='flex size-div'>
          {this.props.data.arrOfSize.map((ele, i) => {
            return (
              <li key={i}>
                <a
                  onClick={(event) => this.props.handleSortBySize(event, ele)}
                  className={
                    this.props.data.activeSize === ele
                      ? 'active-btn btn-round '
                      : 'btn-round '
                  }
                  href='#'
                >
                  {ele}
                </a>
              </li>
            );
          })}
        </ul>

        <a href='#' className='btn-pri' onClick={this.props.handleResetSort}>
          Reset
        </a>
      </aside>
    );
  }
}

export default Aside;
