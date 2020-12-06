import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Exercise from './Exercise';
import Levels from './Levels'
import {View, Button, Text } from 'react-native'

export default function App() {
 var levels = [
	['1 - additions',
		()=>{
			var t1 = Math.floor(Math.random()*100);
			var t2 = Math.floor(Math.random()*100);
			var sign = Math.random() > 0.5;
			if (sign) {
				var ans = t1 + t2 + '';
				var quest = t1 + ' + ' + t2;
				return [t1, t2, ans, quest];
			}
			else {
				var ans = t1 - t2 + '';
				var quest = t1 + ' - ' + t2;
				return [t1, t2, ans, quest];
			}
		}
	],
	['2 - divisions',
		() => {
			var t1 = Math.floor(Math.random()*10);
			var t2 = Math.floor(Math.random()*10);
			if (t1==0){
				t1 = 1;
			}
			if (t2 == 0){
				t2 = 1;
			}
			var ans = t1 / t2 + '';
			ans = ans.substring(0,5);
			var quest = t1 + ' / ' + t2;
			return [t1, t2, ans, quest];

		}
	],
	[ '3 - percentages', 
		() => {
			var t1 = Math.floor(Math.random()*100);
			var t2 = Math.floor(Math.random()*10) * 10;
			if (t1==0){
				t1 = 1;
			}
			if (t2 == 0){
				t2 = 1;
			}
			var ans = t1 * t2 /100 + '';
			ans = ans.substring(0,5);
			var quest = t2 + ' % of ' + t1;
			return [t1, t2, ans, quest];
		}
	],
	[ '4 - 2d x 1d multiplication', 
		() => {
			var t1 = Math.floor(Math.random()*100);
			var t2 = Math.floor(Math.random()*10);
			if (t1==0){
				t1 = 1;
			}
			if (t2 == 0){
				t2 = 1;
			}
			var ans = t1 * t2  + '';
			ans = ans.substring(0,5);
			var quest = t2 + ' x ' + t1;
			return [t1, t2, ans, quest];
		}
	],
];
const [level, setLevel] = useState(0)
const [isPlaying, setIsPlaying] = useState(true);
  return (
    <View style={{width:'100%', height:'100%'}}>
      <View style={{height:40}}></View>
      <Button
        style={{height:440}}
        title={'Menu'}
        color="#841584"
        onPress={function (){setIsPlaying((i) => !i)
        console.log(isPlaying)}}
        accessibilityLabel="Learn m">
      </Button>
      {isPlaying && <Exercise
      generator = {levels[level][1]}
    />}
    {!isPlaying && <Levels
    levels = {levels.map(l=>l[0])}
    setLevel = {setLevel}
    toggleMenu = {()=>setIsPlaying(i=> !i)}
    ></Levels>}
    </View>
  );
}
