import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import UserScreen from './src/screens/UserScreen'
import configureStore from './src/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  const store = configureStore

  return (
    <Provider store = {store}>
      <UserScreen styles={styles.container} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
