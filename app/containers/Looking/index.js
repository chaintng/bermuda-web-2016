/*
 *
 * Looking
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLooking from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class Looking extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.looking}>
        <FormattedMessage {...messages.header} />
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
