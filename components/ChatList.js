import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default function ChatList() {
  const tmpYourStyle = true;

  return (
    <ScrollView style={styles.chatList}>
      <View style={styles.chatCommon}>
        <View style={styles.yourChat}>
          <Text style={styles.name}>
            You
          </Text>
        </View>
        
        <View style={styles.yourChat}>
          <View style={{
            ...styles.message,
            ...(tmpYourStyle ? styles.yourMessage : styles.opponentMessage)
          }}>
            <Text style={styles.messageText}>
              Your Message
            </Text>
          </View>
          <View style={styles.timestamp}>
            <Text>Timestamp</Text>
          </View>
        </View>
      </View>

      <View style={styles.chatCommon}>
        <View style={styles.opponentChat}>
          <Text style={styles.name}>
            The Opponent
          </Text>
        </View>
        
        <View style={styles.opponentChat}>
          <View style={{
            ...styles.message,
            ...(!tmpYourStyle ? styles.yourMessage : styles.opponentMessage)
          }}>
            <Text style={styles.messageText}>
              The Opponent's Message
            </Text>
          </View>
          <View style={styles.timestamp}>
            <Text>Timestamp</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chatList: {
    alignSelf: 'stretch'
  },
  chatCommon: {
    marginHorizontal: 10,
    marginVertical: 8
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5
  },
  message: {
    padding: 10,
    borderRadius: 5
  },
  messageText: {
    fontSize: 20
  },
  timestamp: {
    flexDirection: 'column-reverse'
  },
  yourChat: {
    flexDirection: 'row-reverse'
  },
  yourMessage: {
    backgroundColor: 'yellow'
  },
  opponentChat: {
    flexDirection: 'row'
  },
  opponentMessage: {
    backgroundColor: 'white'
  }
});
