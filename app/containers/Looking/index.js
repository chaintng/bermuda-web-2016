/*
 *
 * Looking
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLooking from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './styles.css';
import ItemBoxList from '../../components/ItemBoxList';
import ItemOnMap from '../../components/ItemOnMap';

export class Looking extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`${styles.looking} columns`} style={{ padding: '10px 0' }}>
        <div className="column is-half" style={{ padding: 20 }}><ItemBoxList /></div>
        <div className="column is-half" style={{ padding: 0 }}><ItemOnMap /></div>
      </div>
    );
  }
}

const mapStateToProps = selectLooking();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Looking);
