import { StyleSheet, Text, View, Button } from 'react-native';
//import  { useState } from 'react';
import React, { useReducer } from 'react';


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'increment':
            return {...state, count:state.count+action.payload};
        case 'decrement':
            return {...state, count:state.count-action.payload};
        default:
            return state;
    }
};
//state == {count:0}
//aciton == {type: 'increment'} || {type: 'decrement'}, payload}




export default function CounterScreen() {
    //const[counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <View>
      <Button title="Arttır" onPress={() => {
        dispatch({type: 'increment', payload: 1});
        //setCounter(counter + 1)
      }}/>
      <Button title="Azalt" onPress={() => {
        dispatch({type: 'decrement', payload: 1});
        //setCounter(counter - 1)
      }}/>
       <Text> Sayı : {state.count} </Text>
      {/* <Text style= {styles.text}>Sayı: {counter}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
    text:{ 
        fontSize: 20,
    },
        
});