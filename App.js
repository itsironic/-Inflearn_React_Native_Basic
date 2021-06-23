/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TextInput, Button, View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Slider from './src/slider';
import Yogurt from './assets/img/yogurt.png';
import Modal from './src/modal';

class App extends Component {

  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd']
  }

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event
    })
  }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Picker/>
        <Slider/>
        <ActivityIndicator
          style={{paddingBottom: 0}}
          size="large"
          color="green"
          animating={true}
        />
        <Image
          style={styles.image}
          source={Yogurt}//로컬소스와 서버소스를 같이 출력하려면?
          source={{uri: 'https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9A%94%EA%B1%B0%ED%8A%B8-%EB%9A%9C%EA%BB%91-p5libu7gy7hzxnfempituick05cnnw6542pw4bhgcg.jpg'}}
          resizeMode="contain"
          onLoadEnd={()=>alert('Loaded!')}
        />
        <Modal/>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true}
        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text
              style={styles.mainText}
              key={idx}
            >
              {item}
            </Text>
          ))}
        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25
  },
  image: {
    width: '30%',
    height: 200
  }
})

export default App;
