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

export const initState = await getInitialState();

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
