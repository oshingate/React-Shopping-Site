import React from 'react';

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
                <button
                  onClick={(event) => this.props.handleSortBySize(event, ele)}
                  className={
                    this.props.data.activeSize === ele
                      ? 'active-btn btn-round '
                      : 'btn-round '
                  }
                >
                  {ele}
                </button>
              </li>
            );
          })}
        </ul>

        <button className='btn-pri' onClick={this.props.handleResetSort}>
          Reset
        </button>
      </aside>
    );
  }
}

export default Aside;
