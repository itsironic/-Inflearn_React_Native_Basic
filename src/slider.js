/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

class SliderComponent extends Component {

  state = {
    value: 50
  }

  sliderValueChange = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{height: 20, width: 300}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={this.sliderValueChange}
          maximumTrackTintColor='red'
          minimumTrackTintColor='blue'
          step={5}
        />
        <Text
          style={styles.input}
        >
          {this.state.value}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    alignItems: 'center'
  },
  input: {
    width: '100%',
    fontSize: 20
  }
})

export default SliderComponent;