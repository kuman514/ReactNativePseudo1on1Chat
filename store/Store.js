import { createStore } from 'redux';

import {
  initState
} from './State';
import {
  createMessage,
  updateMessage,
  deleteMessage,
  changeMode,
  changeSender,
  changeTitle,
  changeYourName,
  changeOpponentName
} from './DispatchFunctions';

function onDispatch(state = initState, action) {
  switch (action.type) {
    case 'CREATE-MESSAGE':
      return createMessage(state, action.payload.newMessage);
    case 'UPDATE-MESSAGE':
      return updateMessage(state, action.payload.newMessage);
    case 'DELETE-MESSAGE':
      return deleteMessage(state, action.payload.key);
    case 'CHANGE-MODE':
      return changeMode(state, action.payload.newMode);
    case 'CHANGE-SENDER':
      return changeSender(state, action.payload.newSender);
    case 'CHANGE-TITLE':
      return changeTitle(state, action.payload.newTitle);
    case 'CHANGE-YOUR-NAME':
      return changeYourName(state, action.payload.newName);
    case 'CHANGE-OPPONENT-NAME':
      return changeOpponentName(state, action.payload.newName);
    default:
      return state;
  }
}

export const store = createStore(onDispatch);
