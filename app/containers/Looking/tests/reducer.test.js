import expect from 'expect';
import lookingReducer from '../reducer';
import { fromJS } from 'immutable';

describe('lookingReducer', () => {
  it('returns the initial state', () => {
    expect(lookingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
