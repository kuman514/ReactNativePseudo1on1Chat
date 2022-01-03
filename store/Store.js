import { createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// Keys
const TITLE_KEY = '@title';
const YOUR_NAME_KEY = '@yourName';
const OPPONENT_NAME_KEY = '@opponentName';
const MESSAGE_LIST_KEY = '@messages';

// Init state
async function getInitialState() {
  try {
    // Get title
    const rawTitle = await AsyncStorage.getItem(TITLE_KEY);
    const title = (rawTitle !== null) ? rawTitle : 'Chat';

    // Get your name
    const rawYourName = await AsyncStorage.getItem(YOUR_NAME_KEY);
    const yourName = (rawYourName !== null) ? rawYourName : 'You';

    // Get opponent name
    const rawOpponentName = await AsyncStorage.getItem(OPPONENT_NAME_KEY);
    const opponentName = (rawOpponentName !== null) ? rawOpponentName : 'You';

    // Get chat list
    const rawMessageList = await AsyncStorage.getItem(MESSAGE_LIST_KEY);
    const messages = (rawMessageList !== null) ? JSON.parse(rawMessageList) : {};

    return {
      title,
      yourName,
      opponentName,
      messages,
      currentMode: 'CREATE',
      currentSender: 'you'
    };
  } catch (e) {
    console.log('An error occured loading from storage');
  }
}

const initState = await getInitialState();

// Functions on dispatch
function createMessage(state, newMessage) {
  // TODO: Implement creating message
}

function updateMessage(state, key, newMessage) {
  // TODO: Implement updating message
}

function deleteMessage(state, key) {
  // TODO: Implement deleting message
}

function changeMode(state, newMode) {
  // TODO: Implement changing mode
}

function changeSender(state, newSender) {
  // TODO: Implement changing sender
}

function onDispatch(state = initState, action) {
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
      return state;
  }
}

export const store = createStore(onDispatch);
