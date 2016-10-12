/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 className="title"><FormattedMessage {...messages.header} /></h1>
        <div className="columns">
          <div className="column"><span className="button is-large"><Link to="/looking">Looking around</Link></span></div>
          <div className="column"><span className="button is-large"><Link to="/sharing">Love is share</Link></span></div>
        </div>
      </div>
    );
  }
}
