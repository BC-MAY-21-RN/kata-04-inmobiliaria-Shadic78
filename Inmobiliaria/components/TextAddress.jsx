import React from 'react';
import {Text, View} from 'react-native';

const TextAddress = ({address}) => {
  return(
    <View>
      <Text>
        {address}
      </Text>
    </View>
  );
};

export default TextAddress;
