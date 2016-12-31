/**
 * Created by Mihail on 12/31/2016.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
