import { createStore } from 'redux';

/*
  chatRoomTitle: string
  messages: {
    [Date.now()]: {
      sender: 'you' | 'opponent',
      timestamp: new Date(),
      message: string
    }, ...
  }
  currentMode: 'CREATE' | 'UPDATE' | 'DELETE'
  currentSender: 'you' | 'opponent'
*/

function onDispatch(state = {}, action) {
  switch (action.type) {
    case 'CREATE-MESSAGE':
      break;
    case 'UPDATE-MESSAGE':
      break;
    case 'DELETE-MESSAGE':
      break;
    case 'CHANGE-MODE':
      break;
    case 'CHANGE-SENDER':
      break;
    default:
      return action;
  }
}

export const store = createStore(onDispatch);
