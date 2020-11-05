import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
const chooseColor = "#FFCC00";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);
const fontColorOff = '#bababa';
const fontColorOn = 'white';
const buttonWidht = 36*screenWidht/100;
const buttonHeight = buttonWidht*7/8;

export default ({ history }) => {
  const backAction = () =>{
    BackHandler.exitApp();
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  return(
    <View style={styles.background1}>
        <StatusBar backgroundColor="black" />
        <Text style={styles.text_PB}>
            PUP PUB {"\n"}
            <Text style={styles.text_M}>MASK</Text>
        </Text>
        <TouchableOpacity style={{
          borderRadius: buttonHeight/3,
          height: buttonHeight/3,
          width: buttonHeight/3,
          position:'absolute',
          top: '2%',
          right: '5%',
          backgroundColor: chooseColor,
          alignItems: 'center',
          justifyContent:'center'
        }}
        onPress ={()=>history.push("/Setting")}>
          <Image source={require('../../assets/setting.png')} 
          style={{tintColor:'white', flex:0.5, resizeMode:'contain'}}/>
        </TouchableOpacity>
        <View style={{flexDirection:'row', alignItems: 'center',justifyContent:'flex-start', top:'20%'}}>
            <Image source={require('../../assets/Grey.png')} style={styles.image}/>
            <Text style={styles.normalText}>Connectd {"\n"}
                <Text style={{color:'#bababa'}}>PB_M:00.00.1 {"\n"}</Text>
                100% 
            </Text>
            <View style={{backgroundColor:'green',top:'7.5%',height:8,width:15,left:'-15%'}}/>
            <Image source={require('../../assets/empty-battery.png')} style={{tintColor:'white', resizeMode: 'contain',height:20,position: 'absolute',left: '13%', top: '65%'}}/>
        </View>
        <View style={styles.background2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    background1: {
      backgroundColor: "black",
      flex: 1,
    },
    background2: {
        backgroundColor: chooseColor,
        flex: 0.75,
        height: 0.7*screenHeight,
        width:screenWidht,
        borderRadius: 40,
        position: 'absolute',
        bottom: -50,
      },
    text_PB: {
      fontFamily: "Inter_700Bold",
      fontSize: 12,
      lineHeight: 18,
      color: chooseColor,
      position: "absolute",
      top: '2%',
      left: '5%'
    },
    text_M: {
      fontFamily: "Inter_900Black",
      fontSize: 20,
      letterSpacing: 0,
      color: "white",
    },
    image:{
        resizeMode: 'contain',
        height: buttonHeight,
    },
    normalText:{
        fontFamily: 'Inter_500Medium',
        fontSize: 15,
        color: 'white',
        lineHeight: 30,
        justifyContent:'flex-start',
        left: 20
    },
  });