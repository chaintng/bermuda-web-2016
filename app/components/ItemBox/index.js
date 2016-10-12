/**
*
* ItemBox
*
*/

import React from 'react';

import styles from './styles.css';

class ItemBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`${styles.itemBox} column`}>
        <div className="box">
          <div>
            <img src="http://placehold.it/200x200" alt="placeholder" />
          </div>
          <div>
            Name: {this.props.name}
          </div>
        </div>
      </div>
    );
  }
}

ItemBox.propTypes = {
  name: React.PropTypes.string,
};

export default ItemBox;
