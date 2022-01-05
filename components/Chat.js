import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput
} from 'react-native';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

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

  // Get message
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

  // Declare message text for editing
  const [status, setStatus] = useState({
    editText: message.message
  });

  // Get the sender's name
  const senderNameSelector = (state) => {
    return (areYouSender ? state.yourName : state.opponentName);
  };
  const name = useSelector(senderNameSelector);

  // Update functions
  const onChangeText = (payload) => {
    setStatus({
      editText: payload
    });
  };
  const updateMessage = (key, changedMessage) => {
    dispatch({
      type: 'UPDATE-MESSAGE',
      payload: {
        newMessage: {
          key: key,
          message: changedMessage
        }
      }
    });
    setStatus({
      editText: changedMessage
    });
  };
  const resetText = () => {
    setStatus({
      editText: message.message
    });
  };

  // Delete this message
  const deleteMessage = (key) => {
    dispatch({
      type: 'DELETE-MESSAGE',
      payload: {
        key: key
      }
    });
  };

  // Get mode for rendering a mode button
  const modeSelector = (state) => {
    return state.currentMode;
  };
  const currentMode = useSelector(modeSelector);
  const renderModeIcon = (mode, key) => {
    switch (mode) {
      case 'UPDATE':
        return (
          <Pressable
            style={
              areYouSender ? styles.yourChat : styles.opponentChat
            }
            onPress={() => {
              updateMessage(key, status.editText);
            }}
          >
            <Ionicons
              name="build-outline"
              size={24}
              color="black"
            />
          </Pressable>
        );
      case 'DELETE':
        return (
          <Pressable
            style={
              areYouSender ? styles.yourChat : styles.opponentChat
            }
            onPress={() => {
              deleteMessage(key);
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

  //console.log(message);

  useEffect(() => {
    if (currentMode !== 'UPDATE' && status.editText !== message.message) {
      resetText();
    }
  });

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
          {
            currentMode === 'UPDATE' ? (
              <TextInput
                style={{
                  ...styles.messageText,
                  ...styles.editText
                }}
                value={status.editText}
                onChangeText={onChangeText}
                onSubmitEditing={() => {
                  updateMessage(props.id, status.editText);
                }}
              />
            ) : (
              <Text style={styles.messageText}>
                { message.message }
              </Text>
            )
          }
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
  editText: {
    textDecorationLine: 'underline'
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

