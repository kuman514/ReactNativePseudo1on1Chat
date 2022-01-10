import {
  StyleSheet,
  View,
  Pressable,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  scrollToTheEnd
} from './ChatScroll';

export default function ChatManager() {
  const [status, setStatus] = useState({
    chatInput: ''
  });

  const dispatch = useDispatch();

  const onChangeTextInput = (payload) => {
    setStatus({
      ...status,
      chatInput: payload
    });
  };

  const onSendChat = () => {
    dispatch({
      type: 'CREATE-MESSAGE',
      payload: {
        newMessage: {
          message: status.chatInput
        }
      }
    });
    setStatus({
      ...status,
      chatInput: ''
    });
    scrollToTheEnd();
  };

  const onChangeMode = (mode) => {
    dispatch({
      type: 'CHANGE-MODE',
      payload: {
        newMode: mode
      }
    });
  };

  const updateModeSelector = (state) => {
    return (state.currentMode === 'UPDATE');
  };
  
  const deleteModeSelector = (state) => {
    return (state.currentMode === 'DELETE');
  };

  const isUpdateActive = useSelector(updateModeSelector);
  const isDeleteActive = useSelector(deleteModeSelector);

  return (
    <View style={styles.chatManager}>
      <Pressable
        style={styles.button}
        onPress={
          isUpdateActive ? () => {
            onChangeMode('CREATE');
          } : () => {
            onChangeMode('UPDATE');
          }
        }
      >
        <Ionicons
          name="build-outline"
          size={36}
          color={
            isUpdateActive ? 'black' : '#CCCCCC'
          }
        />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={
          isDeleteActive ? () => {
            onChangeMode('CREATE');
          } : () => {
            onChangeMode('DELETE');
          }
        }
      >
        <Ionicons
          name="trash-outline"
          size={36}
          color={
            isDeleteActive ? 'black' : '#CCCCCC'
          }
        />
      </Pressable>
      <TextInput
        style={styles.chatInput}
        placeholder="Enter a chat."
        returnKeyType="send"
        value={status.chatInput}
        onChangeText={onChangeTextInput}
        onSubmitEditing={onSendChat}
      />
      <Pressable
        style={styles.button}
        onPress={onSendChat}
      >
        <FontAwesome name="send-o" size={36} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  chatManager: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'white'
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 8
  },
  chatInput: {
    flex: 1,
    fontSize: 18
  }
});
