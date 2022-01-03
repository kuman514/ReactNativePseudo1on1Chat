import {
  saveMessages,
  saveYourName,
  saveOpponentName,
  saveTitle
} from './State';

export function createMessage(state, newMessage) {
  if (newMessage.message === '') {
    return state;
  }

  const newMessageList = {
    ...state.messages,
    [Date.now()]: {
      sender: newMessage.sender,
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

export function updateMessage(state, newMessage) {
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

export function deleteMessage(state, key) {
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

export function changeMode(state, newMode) {
  if (state.currentMode === newMode) {
    return state;
  }

  return {
    ...state,
    currentMode: newMode
  };
};

export function changeSender(state, newSender) {
  if (state.currentSender === newSender) {
    return state;
  }

  return {
    ...state,
    currentSender: newSender
  };
};

export function changeTitle(state, newTitle) {
  if (newTitle === '' || newTitle === state.title) {
    return state;
  }

  saveTitle(newTitle);
  return {
    ...state,
    title: newTitle
  };
};

export function changeYourName(state, newName) {
  if (newName === '' || newName === state.yourName) {
    return state;
  }

  saveYourName(newName);
  return {
    ...state,
    yourName: newName
  };
};

export function changeOpponentName(state, newName) {
  if (newName === '' || newName === state.opponentName) {
    return state;
  }

  saveOpponentName(newName);
  return {
    ...state,
    opponentName: newName
  };
};
