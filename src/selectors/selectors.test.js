/**
 * Created by Mihail on 1/1/2017.
 */
import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'mihail-gaberov', firstName: 'Mihail', lastName: 'Gaberov'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'mihail-gaberov', text: 'Mihail Gaberov'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
