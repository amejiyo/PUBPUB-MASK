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
const buttonOpa = '#fff5cc';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);
const fontColorOff = '#bababa';
const fontColorOn = 'black';
const buttonWidht = 36*screenWidht/100;
const buttonHeight = buttonWidht*7/8;

export default ({ history }) => {
  try{
    raw = history.location.state.language["lan"]
    raw1 = history.location.state.language["trans"]
    }
    catch (err) {
        raw = 'English'
        raw1 = 'Thai'}
    const [lan, setLan] = useState({lan: raw, trans: raw1})
console.log(raw,raw1);
  const backAction = () =>{
    BackHandler.exitApp();
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  const [color, setColor] = useState({button:buttonOpa,font:fontColorOff});
  const onPress1 = () => {if (color.font === fontColorOff){
                            setColor({...color,button:buttonColor,font:fontColorOn})
                          }
                          else{
                            setColor({...color,button:buttonOpa,font:fontColorOff})
                          }
                        };
  
  return(
    <View style={styles.background1}>
        <StatusBar backgroundColor="black"/>
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
        <View style={{flexDirection:'row', alignItems: 'center',justifyContent:'flex-start',top:buttonHeight/3+(screenHeight*0.08)}}>
            <Image source={require('../../assets/Grey.png')} style={styles.image}/>
            <View style={{alignItems:'flex-end',flexDirection:'row',padding:0}}>
              <Text style={styles.normalText}>Connected {"\n"}
                  <Text style={{color:'#bababa'}}>PB_M:00.00.1 {"\n"}</Text>
                  100% 
              </Text>
              <View style={{backgroundColor:'green',position: 'relative',top:'-3%',height:18,width:26,left:'-15%',alignItems:'center',borderWidth:5,justifyContent:'center'}}>
              <Image source={require('../../assets/empty-battery.png')} style={{tintColor:'white', resizeMode: 'contain',height:20}}/></View>
          </View>
        </View>
        <View style={styles.background2}>
            <TouchableOpacity
                style={{
                    borderRadius: 20,
                    width: screenWidht*0.87,
                    height: buttonHeight*0.7,
                    position: "absolute",
                    top: '5%',
                    backgroundColor: color.button,
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
                    <Image source={color.font===fontColorOff? require('../../assets/mute.png'):require('../../assets/speaker.png')} 
                        style={{
                        flex:0.17,
                        resizeMode: 'contain', 
                        tintColor: color.font,
                        left:'25%'
                        }}>
                    </Image>
                    <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 14,
                    color: color.font,
                    position:'absolute',
                    left: '28%'
                    }}>Speaker</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
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
                    activeOpacity: 0.5,
                }} onPress={()=>{history.push('/Translate',{language:lan})}}>
                <View style={{
                    width: screenWidht*0.8,
                    height: buttonHeight*0.7,
                    alignItems: 'center',
                    flexDirection:'row',
                    justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/translate.png')} 
                        style={{
                        flex:0.2,
                        resizeMode: 'contain', 
                        tintColor: 'black',
                        left:'20%'
                        }}>
                    </Image>
                    <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 14,
                    color: 'black',
                    position:'absolute',
                    left: '28%'
                    }}>Real-time Translator</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
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
                }} onPress={()=>history.push('/Recorder')}>
                <View style={{
                    width: screenWidht*0.8,
                    height: buttonHeight*0.7,
                    alignItems: 'center',
                    flexDirection:'row',
                    justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/mic.png')} 
                        style={{
                        flex:0.16,
                        resizeMode: 'contain', 
                        tintColor:'black',
                        left:'27%'
                        }}>
                    </Image>
                    <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 14,
                    color: 'black',
                    position:'absolute',
                    left: '28%'
                    }}>Voice Recorder</Text>
                </View>
            </TouchableOpacity>
            <Text style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 8,
                    color: 'grey',
                    position:'absolute',
                    bottom: 80,
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
        height: 0.71*screenHeight,
        width:screenWidht,
        borderRadius: 40,
        position: 'absolute',
        bottom: -50,
        alignItems:'center'
      },
    text_PB: {
      fontFamily: "Inter_700Bold",
      fontSize: 20,
      lineHeight: 27,
      color: chooseColor,
      position: "absolute",
      top: '2%',
      left: '5%'
    },
    text_M: {
      fontFamily: "Inter_900Black",
      fontSize: 30,
      letterSpacing: 1,
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