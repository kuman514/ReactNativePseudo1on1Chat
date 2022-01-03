import { createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  TITLE_KEY,
  YOUR_NAME_KEY,
  OPPONENT_NAME_KEY,
  MESSAGE_LIST_KEY
} from './StoreKeys';

/*
  title: string,
  yourName: string,
  opponentName: string,
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

// Dispatch Functions =================================================================
function createMessage(state, newMessage) {
  if (newMessage.message === '') {
    return state;
  }

  const newMessageList = {
    ...state.messages,
    [Date.now()]: {
      sender: state.currentSender,
      timestamp: String(new Date()),
      message: newMessage.message
    }
  };

  saveMessages(newMessageList);
  return {
    ...state,
    messages: newMessageList
  };
};

function updateMessage(state, newMessage) {
  if (newMessage.message === '') {
    return state;
  }

  const newMessageList = {
    ...state.messages
  };
  newMessageList[newMessage.key].message = newMessage.message;

  saveMessages(newMessageList);
  return {
    ...state,
    messages: newMessageList
  };
};

function deleteMessage(state, key) {
  const newMessageList = {
    ...state.messages
  };
  delete newMessageList[key];

  saveMessages(newMessageList);
  return {
    ...state,
    messages: newMessageList
  };
};

function changeMode(state, newMode) {
  if (state.currentMode === newMode) {
    return state;
  }

  return {
    ...state,
    currentMode: newMode
  };
};

function changeSender(state, newSender) {
  if (state.currentSender === newSender) {
    return state;
  }

  return {
    ...state,
    currentSender: newSender
  };
};

function changeTitle(state, newTitle) {
  if (newTitle === '' || newTitle === state.title) {
    return state;
  }

  saveTitle(newTitle);
  return {
    ...state,
    title: newTitle
  };
};

function changeYourName(state, newName) {
  if (newName === '' || newName === state.yourName) {
    return state;
  }

  saveYourName(newName);
  return {
    ...state,
    yourName: newName
  };
};

function changeOpponentName(state, newName) {
  if (newName === '' || newName === state.opponentName) {
    return state;
  }

  saveOpponentName(newName);
  return {
    ...state,
    opponentName: newName
  };
};
// End Of Dispatch Functions ==========================================================

// Initial State & Store ==============================================================
const initState = {
  title: 'Chat',
  yourName: 'You',
  opponentName: 'The Opponent',
  messages: {},
  currentMode: 'CREATE',
  currentSender: 'you'
};

function onDispatch(state = initState, action) {
  switch (action.type) {
    case 'INIT-STATE':
      return action.payload;
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
// End Of Initial State & Store =======================================================

// Storage Functions ==================================================================
async function getInitialState() {
  try {
    //await AsyncStorage.clear();

    // Get title
    const rawTitle = await AsyncStorage.getItem(TITLE_KEY);
    const title = (rawTitle !== null) ? rawTitle : 'Chat';

    // Get your name
    const rawYourName = await AsyncStorage.getItem(YOUR_NAME_KEY);
    const yourName = (rawYourName !== null) ? rawYourName : 'You';

    // Get opponent name
    const rawOpponentName = await AsyncStorage.getItem(OPPONENT_NAME_KEY);
    const opponentName = (rawOpponentName !== null) ? rawOpponentName : 'The Opponent';

    // Get chat list
    const rawMessageList = await AsyncStorage.getItem(MESSAGE_LIST_KEY);
    const messages = (rawMessageList !== null) ? JSON.parse(rawMessageList) : {};

    store.dispatch({
      type: 'INIT-STATE',
      payload: {
        title,
        yourName,
        opponentName,
        messages,
        currentMode: 'CREATE',
        currentSender: 'you'
      }
    });
  } catch (e) {
    console.log('An error occured loading from storage');
  }
}

getInitialState();

export async function saveMessages(newMessages) {
  try {
    const msgStr = JSON.stringify(newMessages);
    await AsyncStorage.setItem(MESSAGE_LIST_KEY, msgStr);
  } catch (e) {
    console.log('An error occured saving messages to storage');
  }
};

export async function saveYourName(newName) {
  try {
    await AsyncStorage.setItem(YOUR_NAME_KEY, newName);
  } catch (e) {
    console.log('An error occured saving your name to storage');
  }
};

export async function saveOpponentName(newName) {
  try {
    await AsyncStorage.setItem(OPPONENT_NAME_KEY, newName);
  } catch (e) {
    console.log('An error occured saving the opponent\'s name to storage');
  }
};

export async function saveTitle(newTitle) {
  try {
    await AsyncStorage.setItem(TITLE_KEY, newTitle);
  } catch (e) {
    console.log('An error occured saving title to storage');
  }
};
// End Of Storage Functions ===========================================================
