import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <View style={styles.home}>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
});

export default App;
