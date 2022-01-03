import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function Chat() {
  const tmpYourStyle = true;

  return (
    <View style={styles.chatCommon}>
      <View style={
        tmpYourStyle ? styles.yourChat : styles.opponentChat
      }>
        <Text style={styles.name}>
          You
        </Text>
      </View>
      
      <View style={
        tmpYourStyle ? styles.yourChat : styles.opponentChat
      }>
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
  );
}

const styles = StyleSheet.create({
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

