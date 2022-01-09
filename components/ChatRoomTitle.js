import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useSelector } from 'react-redux';

export default function ChatRoomTitle() {
  const chatTitleSelector = (state) => {
    return state.title;
  };
  const chatTitle = useSelector(chatTitleSelector);

  const [status, setStatus] = useState({
    editTitle: chatTitle
  });

  // Get mode for rendering edit
  const modeSelector = (state) => {
    return state.currentMode;
  };
  const currentMode = useSelector(modeSelector);

  return (
    <View style={styles.chatRoomTitle}>
      <Text style={styles.titleFont}>
        { chatTitle }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chatRoomTitle: {
    backgroundColor: 'brown',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  titleFont: {
    fontSize: 24,
    color: 'white'
  }
});
