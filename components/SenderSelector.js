import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function SenderSelector() {
  const dispatch = useDispatch();
  
  // Get current sender
  const curSenderSelector = (state) => {
    return state.currentSender;
  };
  const curSender = useSelector(curSenderSelector);
  const areYouActive = (curSender === 'you');
  const isOpponentActive = (curSender === 'opponent');

  // Get mode for rendering edit
  const modeSelector = (state) => {
    return state.currentMode;
  };
  const currentMode = useSelector(modeSelector);

  // Switch the current sender
  const convertSender = (who) => {
    dispatch({
      type: 'CHANGE-SENDER',
      payload: {
        newSender: who
      }
    });
  };

  // Get senders' names
  const senderNameSelector = (state) => {
    return {
      opponentName: state.opponentName,
      yourName: state.yourName
    };
  };
  const senderNames = useSelector(senderNameSelector);
  const [status, setStatus] = useState({
    opponentEditName: senderNames.opponentName,
    yourEditName: senderNames.yourName
  });

  // Update functions
  const onChangeText = (who, payload) => {
    switch (who) {
      case 'you':
        setStatus({
          ...status,
          yourEditName: payload
        });
        break;
      case 'opponent':
        setStatus({
          ...status,
          opponentEditName: payload
        });
        break;
    }
  };
  const updateName = (who, newName) => {
    switch (who) {
      case 'you':
        dispatch({
          type: 'CHANGE-YOUR-NAME',
          payload: {
            newName: newName
          }
        });
        break;
      case 'opponent':
        dispatch({
          type: 'CHANGE-OPPONENT-NAME',
          payload: {
            newName: newName
          }
        });
        break;
    }
  };
  const resetName = () => {
    setStatus({
      opponentEditName: senderNames.opponentName,
      yourEditName: senderNames.yourName
    });
  };

  useEffect(() => {
    if (
      currentMode !== 'UPDATE' && (
        status.opponentEditName !== senderNames.opponentName || 
        status.yourEditName !== senderNames.yourName
      )) {
        resetName();
    }
  });

  // TODO: Implement and apply update mode views
  return (
    <View style={styles.senderSelector}>
      {
        (currentMode === 'UPDATE') ? (
          <TextInput
            style={{
              ...styles.selectorButton,
              ...styles.editName
            }}
            value={status.opponentEditName}
            onChangeText={(payload) => {
              onChangeText('opponent', payload);
            }}
            onSubmitEditing={() => {
              updateName('opponent', status.opponentEditName);
            }}
          />
        ) : (
          <Pressable
            style={styles.selectorButton}
            onPress={() => {
              convertSender('opponent');
            }}
          >
            <Text style={{
              ...styles.selectorText,
              ...(isOpponentActive ? styles.active : {})
            }}>
              { senderNames.opponentName }
            </Text>
          </Pressable>
        )
      }

      {
        (currentMode === 'UPDATE') ? (
          <TextInput
            style={{
              ...styles.selectorButton,
              ...styles.editName
            }}
            value={status.yourEditName}
            onChangeText={(payload) => {
              onChangeText('you', payload);
            }}
            onSubmitEditing={() => {
              updateName('you', status.yourEditName);
            }}
          />
        ) : (
          <Pressable
            style={styles.selectorButton}
            onPress={() => {
              convertSender('you');
            }}
          >
            <Text style={{
              ...styles.selectorText,
              ...(areYouActive ? styles.active : {})
            }}>
              { senderNames.yourName }
            </Text>
          </Pressable>
        )
      }
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
    fontSize: 24,
    color: '#CCCCCC'
  },
  active: {
    color: 'black'
  },
  editName: {
    fontSize: 24,
    textDecorationLine: 'underline'
  }
});
