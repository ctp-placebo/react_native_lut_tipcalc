import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';

import {
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
} from 'native-base';

// functional stateless component
const Head = () => (
  <View style={styles.header}>
    <Header style={{ backgroundColor: '#FFF' }}>
      <Left>
        <Icon
          ios="ios-restaurant"
          android="md-restaurant"
          style={{ fontSize: 25, color: 'darkgoldenrod' }}
        />
      </Left>
      <Body>
        <Title style={styles.title}>TIP CALC</Title>
      </Body>
      <Right />
    </Header>
  </View>
);


const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#FFF',
      },
      ios: {

      },
    }),
  },
  title: {
    color: 'darkgoldenrod',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
});

export default Head;

