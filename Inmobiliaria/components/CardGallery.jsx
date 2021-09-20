import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Card from './Card';

const CardGallery = () => {
  return (
    <ScrollView 
      contentContainerStyle={styles.home}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
});


export default CardGallery;