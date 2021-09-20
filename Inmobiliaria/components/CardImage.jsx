import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CardImage = ({rating = '4.2'}) => {
  return(
    <ImageBackground
      source={{
        uri: 'https://centrourbano.com/revista/wp-content/uploads/Vivienda_Quintana-Roo_Sadas%C3%AD.jpg'
      }}
      resizeMode='cover'
      style={styles.image}
    >
      <View
        style={styles.ratingContainer}
      >
        <FontAwesome 
          name='star'
          size={13}
          color='#eeb823'
          style={styles.icon}
        />
        <Text
          style={styles.ratingText}
        >
          {rating}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  ratingContainer: {
    marginBottom: 6,
    borderRadius: 8,
    backgroundColor: '#fbecb9',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignContent: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 5,
  },
  icon: {
    alignSelf: 'center',
  }
});

export default CardImage;