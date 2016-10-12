/**
*
* ItemBoxList
*
*/

import React from 'react';
import ItemBox from '../ItemBox';

import styles from './styles.css';

const mockItems = [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }];

class ItemBoxList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`${styles.itemBoxList} columns`}>
        {mockItems.map((item) => <ItemBox name={item.name} key={item.name} />)}
      </div>
    );
  }
}

export default ItemBoxList;
