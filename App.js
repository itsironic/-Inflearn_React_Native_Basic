/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component {

  state = {
    appName: 'My First App',
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;//Math Method:floor(소수점이하 제거),random(0-1 사이 랜덤숫자 추출)
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]//Spread Operator (ES6) 활용
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index)=>{
      return position != index;
    })
    this.setState({
      random:newArray
    })
  }
  
  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName}/>
        <View style={styles.subView}>
          <Text 
            style={styles.mainText}
            onPress={()=>alert('text touch event')}  
          >Hello World</Text>
        </View>
        <Generator add={this.onAddRandomNum}/>
        <ScrollView
          style={{width: '100%'}}
          //onMomentumScrollBegin={()=>alert('begin')}
          //onMomentumScrollEnd={()=>alert('end')}
          //onScroll={()=>alert('Scroll')}
          bounces={false}
        >
          <NumList 
            num={this.state.random}
            delete={this.onNumDelete}  
          />
        </ScrollView> */}
        <Input/>
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
    padding: 20
  }
})

export default App;
