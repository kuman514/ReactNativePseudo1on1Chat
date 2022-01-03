import {
  StyleSheet,
  View,
  Pressable,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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
  };

  return (
    <View style={styles.chatManager}>
      <Pressable style={styles.button}>
        <Ionicons name="build-outline" size={36} color="black" />
      </Pressable>
      <Pressable style={styles.button}>
        <Ionicons name="trash-outline" size={36} color="black" />
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
