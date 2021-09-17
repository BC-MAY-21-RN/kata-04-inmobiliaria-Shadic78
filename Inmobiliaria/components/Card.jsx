import React from 'react';
import {Text, Image} from 'react-native';
import CardContainer from './CardContainer';
import TextAddress from './TextAddress';

const Card = () => {
  return(
    <CardContainer>
      <TextAddress 
        address={'3517 W. Gray St. Utica'}
      />
    </CardContainer>
  );
};

export default Card;
