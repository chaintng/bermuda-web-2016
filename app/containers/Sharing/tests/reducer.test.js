import expect from 'expect';
import sharingReducer from '../reducer';
import { fromJS } from 'immutable';

describe('sharingReducer', () => {
  it('returns the initial state', () => {
    expect(sharingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
