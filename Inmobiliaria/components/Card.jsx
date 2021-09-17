import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import CardContainer from './CardContainer';
import TextAddress from './TextAddress';

const Card = () => {
  return(
    <CardContainer>
      <View
        style={styles.imageContainer}
      >

      </View>
      <View
        style={styles.infoContainer}
      >
        <View>
          <Text
            style={styles.cardTitle}
          >
            The Willows
          </Text>
        </View>
        <View>
          <TextAddress 
            address={'3517 W. Gray St. Utica'}
          />
        </View>
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 2,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4,
  }
});

export default Card;
