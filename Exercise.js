import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert , TouchableOpacity} from 'react-native';

export default function Exercise(props) {

  var arr = [['1','2','3'],['4','5','6'],['7','8','9'],['-','0','.']]
  var [t1, t2, ans, quest]= props.generator()
  const [answer, setAnswer] = useState('');
  const [resultLeft, setResultLeft] = useState(ans)
  const [question, setQuestion] = useState(quest)
  function onKeyPress(num) {
      console.log(num)
    if (num + '' != resultLeft[0]) {
    }
    else {
      setAnswer((a)=> a + num)
      setResultLeft((r)=>{
      if (r.length == 1){
          restart()
      }
      return r.substring(1);
    })}
  }

  function restart(){
      var [t1, t2, ans, quest]= props.generator()
    setAnswer('');
    setResultLeft(ans)
    setQuestion(quest)

  }


  return (
    <View style={styles.container}>
      <View style={{
        flex:8,
         justifyContent:'space-around',
          alignItems:'center'}}>
            <Text style={{fontSize:28}}> {question} </Text>
        <Text style={{fontSize:28}}>{answer}</Text>
      </View>
      {arr.map((row)=>
        <View 
        style={styles.container_row}
        key={row[0]}>
          {row.map((x)=>
              <TouchableOpacity style={{alignItems:'center', justifyContent:'space-around', flexDirection:'column', width:'34%'}}
            key={x}
            onPress={()=>onKeyPress(x)}
          >
          <Text  style={{fontSize:26}}>{x}</Text>
      </TouchableOpacity>)
          }
        </View>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection:'column'
  },
  container_row: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection:'row'
  }
});
