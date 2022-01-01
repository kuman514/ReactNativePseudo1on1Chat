import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput
} from 'react-native';

export default function ChatManager() {
  return (
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
  );
}

const styles = StyleSheet.create({
  chatManager: {

  },
  modeButton: {

  },
  chatInput: {

  }
});
