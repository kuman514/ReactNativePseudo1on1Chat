import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform
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

  // Dispatch changing target's name
  const changeName = (who, newName) => {
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

  // TODO: Implement and apply update mode views
  return (
    <View style={styles.senderSelector}>
      {
        (currentMode === 'UPDATE') ? (
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
              Opponent
            </Text>
          </Pressable>
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
              Opponent
            </Text>
          </Pressable>
        )
      }

      {
        (currentMode === 'UPDATE') ? (
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
              You
            </Text>
          </Pressable>
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
              You
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
  }
});
