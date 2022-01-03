import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function SenderSelector() {
  const dispatch = useDispatch();
  
  const curSenderSelector = (state) => {
    return state.currentSender;
  };
  const curSender = useSelector(curSenderSelector);
  const areYouActive = (curSender === 'you');
  const isOpponentActive = (curSender === 'opponent');

  const convertSender = (who) => {
    dispatch({
      type: 'CHANGE-SENDER',
      payload: {
        newSender: who
      }
    });
  };

  const changeName = () => {

  };

  return (
    <View style={styles.senderSelector}>
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
