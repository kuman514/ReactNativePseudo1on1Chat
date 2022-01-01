import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput
} from 'react-native';

import { store } from './store/Store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.chatRoomTitle}>
          <Text>Chat Room Title</Text>
        </View>

        <ScrollView style={styles.chatList}>
          <View style={styles.yourMessage}>
            <Text>Your Message</Text>
          </View>
          <View style={styles.opponentMessage}>
            <Text>The Opponent's Message</Text>
          </View>
        </ScrollView>

        <View style={styles.chatManager}>
          <Pressable style={styles.modeButton}>
            <Text>Update Mode</Text>
          </Pressable>
          <Pressable style={styles.modeButton}>
            <Text>Delete Mode</Text>
          </Pressable>
          <View style={styles.chatInput}>
            <TextInput
              placeholder='Enter a chat.'
            />
            <Pressable>
              <Text>Send</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.senderSelector}>
          <Pressable>
            <Text>Opponent</Text>
          </Pressable>
          <Pressable>
            <Text>You</Text>
          </Pressable>
        </View>

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatRoomTitle: {

  },
  chatList: {

  },
  yourMessage: {

  },
  opponentMessage: {

  },
  chatManager: {

  },
  modeButton: {

  },
  chatInput: {

  },
  senderSelector: {

  }
});
