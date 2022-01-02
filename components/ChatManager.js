import {
  StyleSheet,
  View,
  Pressable,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function ChatManager() {
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
      />
      <Pressable style={styles.button}>
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
    flex: 1
  }
});
