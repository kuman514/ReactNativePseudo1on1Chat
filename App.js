import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View
} from 'react-native';

import { store } from './store/Store';
import { Provider } from 'react-redux';

import ChatRoomTitle from './components/ChatRoomTitle';
import ChatList from './components/ChatList';
import ChatManager from './components/ChatManager';
import SenderSelector from './components/SenderSelector';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ChatRoomTitle />
        <ChatList />
        <ChatManager />
        <SenderSelector />

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
