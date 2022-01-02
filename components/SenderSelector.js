import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';

export default function SenderSelector() {
  return (
    <View style={styles.senderSelector}>
      <Pressable style={styles.selectorButton}>
        <Text style={styles.selectorText}>
          Opponent
        </Text>
      </Pressable>
      <Pressable style={styles.selectorButton}>
        <Text style={styles.selectorText}>
          You
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  senderSelector: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'white'
  },
  selectorButton: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  selectorText: {
    fontSize: 24
  }
});
