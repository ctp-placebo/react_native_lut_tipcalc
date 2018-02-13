import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>Wassup from hello.ios</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#FF00FF',
    fontSize: 32,
  },
});
