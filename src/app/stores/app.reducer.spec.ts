import { Action } from '@ngrx/store';
import { appReducer, initialAppState } from './app.reducer';

describe('App Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;
      const result = appReducer(initialAppState, action);
      expect(result).toBe(initialAppState);
    });
  });
});
