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
import BlinkView from 'react-native-blink-view';
const chooseColor = "#FFCC00";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);
const buttonWidht = 36*screenWidht/100;
const buttonHeight = buttonWidht*7/8;

export default ({history}) => {
    try{
        raw = history.location.state.language["lan"]
        raw1 = history.location.state.language["trans"]
        }
    catch (err) {
        raw = 'English'
        raw1 = 'Thai'}
    
    const [showCircle, setShowCircle] = useState(true);
        useEffect(() => {
            // Change the state every second or the time given by User.
            const interval = setInterval(() => {
            setShowCircle((showCircle) => !showCircle);
            }, 1000);
            return () => clearInterval(interval);
        }, []);

    const backAction = () =>{
        history.push('/Home');
        return true;
      }
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
      return(
        <View style={styles.background}>
            <StatusBar backgroundColor="black" />
            <View style={styles.settingbar}>
                <TouchableWithoutFeedback onPress={() => history.push('/Home')}>
                    <Image source={require('../../assets/right.png')} style={styles.imageRight}/>
                </TouchableWithoutFeedback>
                <Text style={styles.header}>Real-time Translator</Text>
            </View>
            <View style={styles.view}>
                <View style={{width:screenWidht*0.9,height:20,alignSelf:'center',alignItems:'flex-end'}}>
                <Text style={styles.text}>Translation ({raw}) <Text style={styles.text1}>   From ({raw1})</Text></Text>
                    <View style={{backgroundColor:'red',height:20,width:20,borderRadius:10,display: showCircle? 'none':'flex',top:18,right:0}}/>
                </View>
                <View style={styles.boarder}/>
                <ScrollView>
                    <View style={{top: 10,height:screenHeight*0.5}}>
                    <Text style={styles.text2}>Speak something ...</Text>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={{
                borderRadius: buttonHeight/3,
                height: buttonHeight/3,
                width: buttonHeight/3,
                position:'absolute',
                bottom: '-5%',
                right: '5%',
                backgroundColor: chooseColor,
                alignItems: 'center',
                justifyContent:'center'
                }}
                onPress ={()=>console.log('share is pushed')}>
                <Image source={require('../../assets/share.png')} 
                style={{tintColor:'white', flex:0.5, resizeMode:'contain'}}/>
            </TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
    background:{
    },
    settingbar:{
        backgroundColor: "black",
        top: 0,
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
    },
    header:{
        fontFamily: "Inter_500Medium",
        fontSize: 21,
        lineHeight: 35,
        color: chooseColor,
        left: '60%',
        flex: 10
    },
    imageRight:{
        resizeMode: 'contain',
        tintColor: chooseColor,
        flex: 0.5,
        left: '30%'
    },
    text:{
        fontFamily:  "Inter_500Medium",
        fontSize: 18,
        color: 'white',
        position:'absolute',
        left: '0%',
        top: 15
    },
    text1:{
        fontFamily:  "Inter_500Medium",
        fontSize: 11,
        color: 'grey',
        right: '-5%',
        top: 10,
    },
    text2:{
        fontFamily: "Inter_400Regular",
        fontSize: 15,
        color: 'grey',
        right: '-5%',
        top: 30,
    },
    view:{
        backgroundColor:'#1A1B1C',
        height: screenHeight*0.8,
        top: 20,
        borderRadius: 40,
    },
    boarder:{
        height: 1,
        backgroundColor: '#4C4E50',
        position:'relative',
        width:screenWidht*0.9,
        left:'5%',
        top: 30,
    }
});