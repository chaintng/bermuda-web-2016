import { createSelector } from 'reselect';

/**
 * Direct selector to the sharing state domain
 */
const selectSharingDomain = () => (state) => state.get('sharing');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Sharing
 */

const selectSharing = () => createSelector(
  selectSharingDomain(),
  (substate) => substate.toJS()
);

export default selectSharing;
export {
  selectSharingDomain,
};
