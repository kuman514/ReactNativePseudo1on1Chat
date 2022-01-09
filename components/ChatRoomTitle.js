import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function ChatRoomTitle() {
  const dispatch = useDispatch();

  const chatTitleSelector = (state) => {
    return state.title;
  };
  const chatTitle = useSelector(chatTitleSelector);

  // Declare title text for editing
  const [status, setStatus] = useState({
    editTitle: chatTitle
  });

  // Update functions
  const onChangeText = (payload) => {
    setStatus({
      editTitle: payload
    });
  };
  const updateTitle = (changedTitle) => {
    dispatch({
      type: 'CHANGE-TITLE',
      payload: {
        newTitle: changedTitle
      }
    });
    setStatus({
      editTitle: changedTitle
    });
  };
  const resetText = () => {
    setStatus({
      editTitle: chatTitle
    });
  };

  // Get mode for rendering edit
  const modeSelector = (state) => {
    return state.currentMode;
  };
  const currentMode = useSelector(modeSelector);

  useEffect(() => {
    if (currentMode !== 'UPDATE' && status.editTitle !== chatTitle) {
      resetText();
    }
  });

  return (
    <View style={styles.chatRoomTitle}>
      {
        (currentMode === 'UPDATE') ? (
          <TextInput
            style={{
              ...styles.titleFont,
              ...styles.editTitle
            }}
            value={status.editTitle}
            onChangeText={onChangeText}
            onSubmitEditing={() => {
              updateTitle(status.editTitle);
            }}
          />
        ) : (
          <Text style={styles.titleFont}>
            { chatTitle }
          </Text>
        )
      }
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
  },
  editTitle: {
    textDecorationLine: 'underline'
  }
});
