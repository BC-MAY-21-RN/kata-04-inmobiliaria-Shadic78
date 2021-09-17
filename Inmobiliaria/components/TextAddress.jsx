import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TextAddress = ({address}) => {
  return(
    <View
      style={styles.container}
    >
      <FontAwesome 
        name='map-marker' 
        size={18} 
        color='#474747' 
      />
      <Text
        style={styles.addressText}
      >
        {address}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  addressText: {
    marginLeft: 10,
    color: '#474747',
    fontSize: 13,
  }
});

export default TextAddress;
