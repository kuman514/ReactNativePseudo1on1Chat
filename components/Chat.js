import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export default function Chat(props) {
  /*
    Chat props
    - id: string
  */

  const dispatch = useDispatch();

  const msgSelector = (state) => {
    return state.messages[props.id];
  };
  const message = useSelector(msgSelector);
  const areYouSender = (message.sender === 'you');
  const sentDate = new Date(message.timestamp);
  const [year, month, day, hour, minute, second] = [
    sentDate.getFullYear(),
    sentDate.getMonth(),
    sentDate.getDate(),
    String(sentDate.getHours()).padStart(2, '0'),
    String(sentDate.getMinutes()).padStart(2, '0'),
    String(sentDate.getSeconds()).padStart(2, '0')
  ];

  const senderNameSelector = (state) => {
    return (areYouSender ? state.yourName : state.opponentName);
  };
  const name = useSelector(senderNameSelector);

  const modeSelector = (state) => {
    return state.currentMode;
  };
  const currentMode = useSelector(modeSelector);
  const renderModeIcon = (mode, key) => {
    switch (mode) {
      case 'UPDATE':
        return (
          <View />
        );
      case 'DELETE':
        return (
          <Pressable
            style={
              areYouSender ? styles.yourChat : styles.opponentChat
            }
            onPress={() => {
              dispatch({
                type: 'DELETE-MESSAGE',
                payload: {
                  key: key
                }
              });
            }}
          >
            <Ionicons
              name="trash-outline"
              size={24}
              color="black"
            />
          </Pressable>
        );
      default:
        return (
          <View />
        );
    }
  };

  return (
    <View style={styles.chatCommon}>
      <View style={
        areYouSender ? styles.yourChat : styles.opponentChat
      }>
        <Text style={styles.name}>
          { name }
        </Text>
      </View>
      
      <View style={
        areYouSender ? styles.yourChat : styles.opponentChat
      }>
        <View style={{
          ...styles.message,
          ...(areYouSender ? styles.yourMessage : styles.opponentMessage)
        }}>
          <Text style={styles.messageText}>
            { message.message }
          </Text>
        </View>
        <View style={styles.timestamp}>
          <Text>
            { `${MONTHS[month]} ${day} ${year}, ${hour}:${minute}:${second}` }
          </Text>
          {
            renderModeIcon(currentMode, props.id)
          }
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

