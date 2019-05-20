import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';


export default class App extends Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.formInput}
          onChangeText={email => this.setState({ email })}
          placeholder='email'
        />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          placeholder='password'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validationText: {
    marginTop: 8,
    marginBottom: 8,
    color: 'red'
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8
  }
});
