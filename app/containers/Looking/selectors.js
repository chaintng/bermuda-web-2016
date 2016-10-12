import { createSelector } from 'reselect';

/**
 * Direct selector to the looking state domain
 */
const selectLookingDomain = () => (state) => state.get('looking');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Looking
 */

const selectLooking = () => createSelector(
  selectLookingDomain(),
  (substate) => substate.toJS()
);

export default selectLooking;
export {
  selectLookingDomain,
};
