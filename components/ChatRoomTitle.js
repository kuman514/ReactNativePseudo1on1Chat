import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function ChatRoomTitle() {
  return (
    <View style={styles.chatRoomTitle}>
      <Text style={styles.titleFont}>
        Chat Room Title
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chatRoomTitle: {
    backgroundColor: 'brown',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  titleFont: {
    fontSize: 24,
    color: 'white'
  }
});
