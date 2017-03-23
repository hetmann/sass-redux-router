import { AUTHENTICATED, AUTHENTICATING, AUTHENTICATE_FAILED } from './action-types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isTalkingToServer: false,
  isLoggedIn: false,
  info: {}
});

const userInformation = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return state
        .update('info', () => fromJS(action.info))
        .update('isTalkingToServer', () => false)
        .update('isLoggedIn', () => true);
    case AUTHENTICATING:
      return state
        .update('isTalkingToServer', () => action.isTalkingToServer)
        .update('reason', () => '');
    case AUTHENTICATE_FAILED:
      return state
        .update('reason', () => action.reason)
        .update('isTalkingToServer', () => false);
    default: return state
  }
}

export default { userInformation };
