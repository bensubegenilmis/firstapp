import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function DesignScreen() {
    return (
       //<View style={styles.mainView}>
       <View style = {{width: '100%', height: '100%'}}>
            {/*  <View style = {{width: 50, height:50, backgroundColor: 'red'}} />
      <View style = {{width: 100, height:100, backgroundColor: 'blue'}} />
      <View style = {{width: 200, height:200, backgroundColor: 'green'}} /> */}

            {/* <Text style={styles.mainTextOne}>1</Text>
            <Text style={styles.mainTextTwo}>2</Text>
            <Text style={styles.mainTextThree}>3</Text> */}

            <View style = {{width: '25%' , height: '25%', backgroundColor:'red' }} />
            <View style = {{width: '25%' , height: '25%', backgroundColor:'blue' , position:'absolute', top:0,right:0 }} />
            <View style = {{width: '25%' , height: '25%', backgroundColor:'yellow', position:'absolute',bottom:0, right:0}} />
            <View style = {{width: '25%' , height: '25%', backgroundColor:'green', position:'absolute',left:0 , bottom:0}} />
        </View>
    );
};

const styles = StyleSheet.create({






    // mainView: {
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     margin: 20,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     // justifyContent: 'center',
    //     //flexDirection: 'row', 
    //     height: 400,
    // },
    // mainTextOne: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     // position: 'absolute',
    //     // bottom:0,
    //     // left:0,
    //     // right:0,
    //     // top:0,
    //     // flex:4,
    //     //alignSelf:'flex-end',
    // },
    // mainTextTwo: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     /* flex:5,
    //         top:10,
    //         left:40,
    //         bottom:10,
    //         right:40, */

    // },
    // mainTextThree: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     flex:1,
    // },
}); 