import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import CardContainer from './CardContainer';
import TextAddress from './TextAddress';
import TextWithIcon from './textWithIcon';
import CardImage from './CardImage';

const Card = () => {
  return(
    <CardContainer>
      <View
        style={styles.imageContainer}
      >
        <CardImage 
          rating='4.7'
        />
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
        <View
          style={styles.containerIcons}
        >
          <TextWithIcon
            icon='bed'
            size={18}
            color='#474747' 
          >
            3
          </TextWithIcon>
          <TextWithIcon
            icon='bath'
            size={18}
            color='#474747' 
          >
            2
          </TextWithIcon>
          <TextWithIcon
            icon='home'
            size={18}
            color='#474747' 
          >
            230 ft
          </TextWithIcon>
        </View>
        <View>
          <Text
            style={styles.cardPrice}
          >
            $440/m
          </Text>
        </View>
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: 95,
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 2,
    paddingLeft: 18,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4,
  },
  containerIcons: {
    marginTop: 3,
    marginBottom: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardPrice: {
    fontWeight: 'bold',
    fontSize: 17,
  }
});

export default Card;
