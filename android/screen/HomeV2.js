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
  TouchableHighlight,
} from "react-native";
const chooseColor = "#FFCC00";
const buttonColor = "white";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);
const fontColorOff = '#bababa';
const fontColorOn = 'black';
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
  const [opa, setOpa] = useState(0.8);
  const [fontcolor2, setfontColor2] = useState(fontColorOff);
    const onPress1 = () => {setOpa(opa == 0.8 ? 1 : 0.8), setfontColor2(fontcolor2 == fontColorOff? fontColorOn : fontColorOff)};
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
            <View style={{backgroundColor:'green',top:'7.5%',height:18,width:30,left:'-15%',alignItems:'center',borderWidth:6,justifyContent:'center'}}>
            <Image source={require('../../assets/empty-battery.png')} style={{tintColor:'white', resizeMode: 'contain',height:20}}/></View>
        </View>
        <View style={styles.background2}>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: screenWidht*0.87,
                    height: buttonHeight*0.7,
                    opacity: opa,
                    position: "absolute",
                    top: '5%',
                    backgroundColor: buttonColor,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }} onPress={onPress1}>
                <View style={{
                    width: screenWidht*0.8,
                    height: buttonHeight*0.7,
                    alignItems: 'center',
                    flexDirection:'row',
                    justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/speaker.png')} 
                        style={{
                        flex:0.21,
                        resizeMode: 'contain', 
                        tintColor: fontcolor2,
                        left:'25%'
                        }}>
                    </Image>
                    <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 14,
                    color: fontcolor2,
                    left: '35%'
                    }}>Speaker</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: screenWidht*0.87,
                    height: buttonHeight*0.7,
                    opacity: 1,
                    position: "relative",
                    top: '30%',
                    backgroundColor: buttonColor,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }} onPress={()=>{history.push('/translate')}}>
                <View style={{
                    width: screenWidht*0.8,
                    height: buttonHeight*0.7,
                    alignItems: 'center',
                    flexDirection:'row',
                    justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/translate.png')} 
                        style={{
                        flex:0.3,
                        resizeMode: 'contain', 
                        tintColor: 'black',
                        left:'25%'
                        }}>
                    </Image>
                    <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 14,
                    color: 'black',
                    left: '35%'
                    }}>Real-time Translator</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    borderRadius: 20,
                    width: screenWidht*0.87,
                    height: buttonHeight*0.7,
                    opacity: 1,
                    position: "absolute",
                    top: '56%',
                    backgroundColor: buttonColor,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }} onPress={()=>history.push('/speechToText')}>
                <View style={{
                    width: screenWidht*0.8,
                    height: buttonHeight*0.7,
                    alignItems: 'center',
                    flexDirection:'row',
                    justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/speaker.png')} 
                        style={{
                        flex:0.21,
                        resizeMode: 'contain', 
                        tintColor:'black',
                        left:'25%'
                        }}>
                    </Image>
                    <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 14,
                    color: 'black',
                    left: '35%'
                    }}>Voice Recorder, Speech to Text</Text>
                </View>
            </TouchableHighlight>
            <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 8,
                    color: 'grey',
                    bottom: -0.45*screenHeight
                    }}>FRA261 PROJECT Presented by @PUPPUB Company</Text>       
        </View>
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
        alignItems:'center'
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
