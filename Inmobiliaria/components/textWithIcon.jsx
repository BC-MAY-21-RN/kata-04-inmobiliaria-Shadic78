import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TextWithIcon = ({icon, size, color, children}) => {
  return(
    <View
      style={styles.container}
    >
      <FontAwesome 
        name={icon}
        size={size}
        color={color}
      />
      <Text
        style={styles.text}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 8,
  }
});

export default TextWithIcon;