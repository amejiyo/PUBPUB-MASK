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
  ImageBackground,
  TouchableHighlight,
  Alert,
} from "react-native";
import { set } from "react-native-reanimated";

const chooseColor = "#FFCC00";
const opaColor = "#ffe680";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);
const buttonHeight = 0.35*screenHeight;


export default ({history}) => {
    try{
        raw = history.location.state.language["lan"]
        raw1 = history.location.state.language["trans"]
        }
    catch (err) {
        raw = 'English'
        raw1 = 'Thai'}
    const [lan, setLan] = useState({lan: raw, trans: raw1,state:0});
    const [play, setPlay] = useState(0);
    const backAction = () =>{
        history.push('/Home');
        return true;
      }
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
    const onPress1 =()=>{console.log('clicked')}
    const onPress2 =()=>{history.push('/SpeechToText',{language:lan})}
        
      return(
        <View style={styles.background}>
            <StatusBar backgroundColor="black" />
            <View style={styles.settingbar}>
                <TouchableWithoutFeedback onPress={() => history.push('/Home')}>
                    <Image source={require('../../assets/right.png')} style={styles.imageRight}/>
                </TouchableWithoutFeedback>
                <Text style={styles.header}>Voice Recorder</Text>
                <Text style={styles.list} onPress={() => history.push('/List',{language:lan})}>List</Text>
            </View>
            <View style={styles.settingbar1}> 
                <TouchableHighlight style={styles.buttonL} underlayColor= {opaColor} onPress={onPress1}>
                    <Text style={styles.textL}>Standard</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonR} underlayColor={'#4d4d4d'} onPress={onPress2}>
                    <Text style={styles.textR}>Speech-to-text</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.background2}>
                <ImageBackground style={styles.middleLine}>
                    {play? (
                    <Image source={require('../../assets/sound.png')} style={styles.sound}/>
                    ):(<View/>)}
                    </ImageBackground>
            </View>
            <View style={{padding:0,alignItems:'center',justifyContent:'center',bottom:0.1*screenHeight,position:'absolute',}}>
                {play?(
                    <View>
                    <View style={{alignItems:'center',justifyContent:'center'}}> 
                        <View style={{height:30,width:100,backgroundColor:chooseColor, justifyContent:'center', alignItems:'center',borderRadius:5}}>
                        <Text style={{fontFamily:"Inter_600SemiBold",fontSize:20,color:'black'}}>0.05.94</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',width:screenWidht, height:buttonHeight/4,top:20}}>
                        <TouchableOpacity style={styles.buttonS} activeOpacity={0.7} onPress={()=>{setPlay(0)}}>
                            <Image source={require('../../assets/repeat.png')} style={{resizeMode:'contain',flex:0.5,tintColor:'white'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>{setPlay(1),
                        Alert.alert("Save recording","My record #1",[
                                {text:"Cancle"},
                                {text:"discard",onPress:()=>{setPlay(0)}},
                                {text:"OK",onPress:()=>{setLan({...lan,state:1})}}
                                ])}}>
                            <Image source={require('../../assets/done.png')} style={{resizeMode:'contain',flex:0.5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonS} activeOpacity={0.7} onPress={()=>{console.log('pause')}}>
                            <Image source={require('../../assets/pause.png')} style={{resizeMode:'contain',flex:0.5,tintColor:'white'}}/>
                        </TouchableOpacity>
                    </View>
                    </View>)
                :(
                    <View style={{alignItems:'center',justifyContent:'center'}}> 
                        <View style={{height:30,width:100,backgroundColor:chooseColor, justifyContent:'center', alignItems:'center',borderRadius:5}}>
                        <Text style={{fontFamily:"Inter_600SemiBold",fontSize:20,color:'black'}}>0.00.00</Text>
                        </View>
                        <View style={{top:20}}>
                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>{setPlay(1)}}>
                        <View style={{backgroundColor:'red',height:buttonHeight/5,width:buttonHeight/5,borderRadius:buttonHeight/10}}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
        background:{
            height:screenHeight,
            alignItems:'center'
        },
        settingbar:{
            backgroundColor: "black",
            top: 0,
            height:60,
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'center',
        },
        settingbar1:{
            backgroundColor: "black",
            top: 70,
            height:60,
            width:screenWidht,
            flexDirection: 'row-reverse',
            alignItems:'center',
            justifyContent:'space-around',
            position:'absolute'
        },
        header:{
            fontFamily: "Inter_500Medium",
            fontSize: 21,
            lineHeight: 35,
            color: chooseColor,
            left: '60%',
            flex: 10,
            padding:0
        },
        imageRight:{
            resizeMode: 'contain',
            tintColor: chooseColor,
            flex: 0.5,
            left: '30%'
        },
        list:{
            fontFamily:  "Inter_500Medium",
            fontSize: 21,
            lineHeight: 35,
            color: 'white',
            position:'absolute',
            right: '5%',
        },
        buttonL:{
            backgroundColor: chooseColor,
            height: 40,
            width: screenWidht*0.4,
            borderRadius: 10,
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            right:'5%',
        },
        buttonR:{
            backgroundColor: 'black',
            height: 40,
            width: screenWidht*0.4,
            borderRadius: 10,
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            left:'5%',
            borderColor: 'white',
            borderWidth:4,
        },
        textL:{
            fontFamily:  "Inter_500Medium",
            fontSize: 16,
            color: 'black',
        },
        textR:{
            fontFamily:  "Inter_500Medium",
            fontSize: 16,
            color: 'white',
        },
        boarder:{
            height: 1,
            backgroundColor: '#4C4E50',
            position:'relative',
            width:screenWidht*0.9,
            left:'5%',
            top: 30,
        },
        sound:{
            resizeMode:'contain',
            tintColor:'white',
            height: buttonHeight*0.7,
        },
        background2:{
            top:160,
            backgroundColor:'#1A1B1C',
            alignItems: 'center',
            justifyContent:'center',
            height:0.5*screenHeight,
            borderBottomColor:'grey',
            borderTopColor:'grey',
            borderTopWidth:2,
            borderBottomWidth:2,
            position:'absolute'
        },
        middleLine:{
            backgroundColor:'white',
            height:0.5*screenHeight-8,
            borderTopWidth:(0.5*screenHeight-6)/2 -3.7,
            borderBottomWidth:(0.5*screenHeight-6)/2 -3.7,
            borderColor:'#1A1B1C',
            width:screenWidht,
            alignItems:'center',
            justifyContent:'center'
        },
        button:{
            borderRadius: buttonHeight/4,
            height: buttonHeight/4,
            width: buttonHeight/4,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent:'center',
        },
        buttonS:{
            borderRadius: buttonHeight/5,
            height: buttonHeight/5,
            width: buttonHeight/5,
            alignItems: 'center',
            justifyContent:'center',
        },
    });