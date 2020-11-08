import React, { Component, useEffect } from 'react';
import {StyleSheet, Text, View, BackHandler,Image, TouchableWithoutFeedback,Dimensions, StatusBar,  PermissionsAndroid} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);
const chooseColor = "#FFCC00";

export default ({ history }) => {
  const backAction = () =>{
    BackHandler.exitApp();
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
      return (
        <TouchableWithoutFeedback onPress={()=> history.push('/Home')}>
          <View style={style.background}>
            <StatusBar backgroundColor="black" />
            <Text style={style.text_PB}>
            PUP PUB {"\n"}
            <Text style={style.text_M}>MASK</Text>
            </Text>
            <Image source={require('../../assets/Picture1.png')} style={style.image}/>
         </View>
        </TouchableWithoutFeedback> 
      )
};

const style = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
    alignItems: 'center'
  },
  text_PB: {
    fontFamily: "Inter_700Bold",
    fontSize: 40,
    letterSpacing: -0.5,
    lineHeight: 50,
    color: chooseColor,
    flex: 1,
    position: 'relative',
    top: '25%',
    left: '2%'

  },
  text_M: {
    fontFamily: "Inter_900Black",
    fontSize: 58,
    letterSpacing: 1,
    color: "white",
  },
  image: {
    resizeMode: 'contain',
    flex: 0.6,
    position: 'relative',
    top: '-20%'
  }
})
