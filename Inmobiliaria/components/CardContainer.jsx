import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CardContainer = ({children}) => {
  return(
    <View
      style={styles.container}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#f5fdff',
    flexDirection: 'row',
    height: 'auto',
    borderRadius: 8,
    minHeight: 100,
    marginTop: 15,
    padding: 12,
  }
});

export default CardContainer;