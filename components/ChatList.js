import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';

import Chat from './Chat';

export default function ChatList() {
  const chatIdSelector = (state) => {
    return Object.keys(state.messages);
  };
  const chatIds = useSelector(chatIdSelector);

  return (
    <ScrollView style={styles.chatList}>
      <View style={styles.chatCommon}>
        {
          chatIds.map((chatId) => {
            return (
              <Chat
                key={chatId}
                id={chatId}
              />
            );
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chatList: {
    alignSelf: 'stretch'
  }
});
