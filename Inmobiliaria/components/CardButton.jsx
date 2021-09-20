import React from 'react';
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CardButton = ({onPress = () => {}}) => {
  return(
    <View
      style={styles.container}
    >
      <TouchableOpacity
        onPress={onPress}
      >
        <FontAwesome 
          name='heart'
          size={14}
          color='#fff'
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18af75',
    alignSelf: 'flex-end',
    padding: 6,
    borderRadius: 50,
    marginTop: 2,
  },
});

export default CardButton;