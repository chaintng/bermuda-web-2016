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
      <h1>
        <FormattedMessage {...messages.header} />
        <ul>
          <li><Link to="/looking">Looking around</Link></li>
          <li><Link to="/sharing">Love is share</Link></li>
        </ul>
      </h1>
    );
  }
}
