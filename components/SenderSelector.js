import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput
} from 'react-native';

export default function SenderSelector() {
  return (
    <View style={styles.senderSelector}>
      <Pressable>
        <Text>Opponent</Text>
      </Pressable>
      <Pressable>
        <Text>You</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  senderSelector: {

  }
});
