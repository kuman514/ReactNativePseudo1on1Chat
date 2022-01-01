import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput
} from 'react-native';

export default function ChatList() {
  return (
    <ScrollView style={styles.chatList}>
      <View style={styles.yourMessage}>
        <Text>Your Message</Text>
      </View>
      <View style={styles.opponentMessage}>
        <Text>The Opponent's Message</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chatList: {

  },
  yourMessage: {

  },
  opponentMessage: {

  }
});
