import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

import {
  Container,
  Content,
  Button,
} from 'native-base';

import Head from './ui/Head';
import Values from './ui/Values';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tipPercent: 0.2,
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }

  updateCustomTip(customTip) {
    if (customTip) {
      this.setState({
        tipPercent: parseFloat(customTip) / 100,
      });
    } else {
      this.setState({ tipPercent: 0 });
    }
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container style={styles.container}>
        <Head />
        <View style={styles.viewContainer}>
          <Content style={{ width: '100%' }}>
            <Values
              tipAmount={this.state.tipPercent}
              bill={this.state.inputValue}
            />
            <View style={styles.formGroup}>
              <Text style={styles.label}>
              Enter bill amount:
              </Text>
              <TextInput
                value={this.state.inputValue}
                onChangeText={text => this.setState({ inputValue: text })}
                keyboardType="numeric"
                placeholder="0.00"
                placeholderTextColor="#FFF"
                style={styles.input}
                underlineColorAndroid="#FFF"
              />
              <View style={styles.buttonGroup}>
                <Button
                  style={styles.button}
                  light
                  block
                  title="10%"
                  onPress={() => this.setState({ tipPercent: 0.1 })}
                >
                  <Text>10%</Text>
                </Button>
                <Button
                  style={styles.button}
                  light
                  block
                  color="#FFF"
                  title="20%"
                  onPress={() => this.setState({ tipPercent: 0.2 })}
                >
                <Text>20%</Text>
                </Button>
                <Button
                  style={styles.button}
                  light
                  block
                  color="#FFF"
                  title="25%"
                  onPress={() => this.setState({ tipPercent: 0.25 })}
                >
                <Text>25%</Text>
                </Button>
                <TextInput
                  value={(this.state.tipPercent * 100).toString()}
                  onChangeText={customTip => this.updateCustomTip(customTip)}
                  keyboardType="numeric"
                  placeholder="10%"
                  placeholderTextColor="#FFF"
                  style={[styles.input, styles.customTip]}
                  underlineColorAndroid="#FFF"
                />
              </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4d4d',
    flex: 1,
    height: '100%',
    width: '100%',
    paddingTop: 0,
  },
  viewContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#4d4d4d',
    borderColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 0,
  },
  formGroup: {
    flex: 1,
    backgroundColor: '#404040',
    padding: 20,
    paddingTop: 0,
  },
  label: {
    textAlign: 'center',
    color: '#FFF',
    justifyContent: 'space-between',
    marginBottom: 4,
    marginTop: 0,
  },
  input: {
    height: 40,
    borderColor: '#222',
    borderWidth: 1.5,
    backgroundColor: '#666',
    padding: 5,
    textAlign: 'center',
    color: '#FFF',
  },
  customTip: {
    height: 40,
    width: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    width: '20%',
  },
});
