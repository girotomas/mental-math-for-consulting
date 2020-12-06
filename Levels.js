import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View, Button, Text, ImagePropTypes } from 'react-native'

export default function Levels(props) {

  return (
    <View style={{height:'100%', flex:1}}>
        <View style={{ 
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        flexDirection:'column'
    }} >
      {props.levels.map((l, i)=><Button
      title={l}
      onPress= {()=> {
          props.setLevel(i)
          props.toggleMenu()
        }}
      ></Button>)}
    </View>
        <View
        style={{flex:1}}
        ></View>
    </View>
  );
}
