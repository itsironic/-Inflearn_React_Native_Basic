/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props) => (
    <TouchableOpacity
        style={styles.header}
        //onPress={()=>alert('Alert with feedback')}
        //onLongPress={()=>alert('Alert when press long')}
        //onPressIn={()=>alert('Alert right after press')}
        onPressOut={()=>alert('Alert when press is released')}
    >
        <View>
            <Text>{props.name}</Text>
        </View>    
    </TouchableOpacity>//TouchableOpacity 리액트 공식문서 참고
)
// 중괄호와 소괄호의 차이
// exampleFunction = () => {

// } return되는 JSX Component가 없는 것

// exampleFunction = () => (

// ) JSX Component를 리턴하므로 소괄호

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Header;
