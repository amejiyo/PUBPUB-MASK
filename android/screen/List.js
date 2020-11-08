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
  ImageBackground,
} from "react-native";

const chooseColor = "#FFCC00";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);

export default ({history}) => {
    try{
        raw = history.location.state.language["lan"]
        raw1 = history.location.state.language["trans"]
        raw2 = history.location.state.language["state"]?'0.05.94':'0.00.00'
        console.log(raw2)
        }
    catch (err) {
        raw = 'English'
        raw1 = 'Thai'
        raw2 = '0.00.00'}
    const [state, setState] = useState(0);
    const [showCircle, setShowCircle] = useState(true);
        useEffect(() => {
            // Change the state every second or the time given by User.
            const interval = setInterval(() => {
            setShowCircle((showCircle) => !showCircle);
            }, 1000);
            return () => clearInterval(interval);
        }, []);
    const OnPress =()=>{
        if(state === 0){
        setState(1)
        } else{
            setState(0)
        }
    }
    const OnPress1 =()=>{
        setState(0)
    }
    const backAction = () =>{
        if(state ===0){
        history.push('/Record');
        return true;} else{
            setState(0)
        }
      }
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
      return(
          <View>
            <TouchableWithoutFeedback onPress={OnPress1}>
                <ImageBackground style={styles.background}>
                    <StatusBar backgroundColor="black" />
                    <View style={styles.settingbar}>
                        <TouchableWithoutFeedback onPress={() => history.push('/Recorder')}>
                            <Image source={require('../../assets/right.png')} style={styles.imageLeft}/>
                        </TouchableWithoutFeedback>
                        <Text style={styles.header}>List</Text>
                        <Image source={require('../../assets/search.png')} style={styles.imageRight}/>
                        {state?(
                            <TouchableWithoutFeedback style={{padding:0}} onPress={OnPress}>
                                    <View style={{height:0.3*screenHeight,width:screenWidht*0.4, backgroundColor:'grey',position:'absolute',right:0,top:20,justifyContent:'space-around',borderRadius:10}}>
                                        <Text style={styles.text2}>Rename</Text>
                                        <Text style={styles.text2}>Delete</Text>
                                        <Text style={styles.text2}>Share</Text>
                                        <Text style={styles.text2}>Details</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ):(
                                <TouchableWithoutFeedback style={{height:25}} onPress={OnPress}>
                                <View style={{justifyContent:'space-around',height:25,alignItems:'flex-start',right:'30%'}}>
                                    <View style={styles.edit}/>
                                    <View style={styles.edit}/>
                                    <View style={styles.edit}/>
                                </View>
                            </TouchableWithoutFeedback>)}
                    </View>
                    {raw2 != '0.00.00'?(
                    <View style={{top:10,width:screenWidht,backgroundColor:'#1A1B1C',borderRadius:20, height:0.08*screenHeight, flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Image source={require('../../assets/play_1.png')} style={{tintColor:'white', resizeMode:'contain',height:screenHeight*0.03,right:'190%'}}/>
                        <Text style={styles.text}>My record #1 {"\n"}<Text style={styles.text1}>{raw2}</Text></Text>
                        <Text style={styles.text1}>11 Aug</Text>
                    </View>
                    ):(
                        <View></View>
                    )}
                    {state?(
                            <TouchableWithoutFeedback style={{padding:0}} onPress={OnPress}>
                                    <View style={{height:0.3*screenHeight,width:screenWidht*0.4, backgroundColor:'grey',position:'absolute',right:0,top:20,justifyContent:'space-around',borderRadius:10}}>
                                        <Text style={styles.text2}>Rename</Text>
                                        <Text style={styles.text2}>Delete</Text>
                                        <Text style={styles.text2}>Share</Text>
                                        <Text style={styles.text2}>Details</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ):(
                    <View></View>)}
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
      );
}

const styles = StyleSheet.create({
    background:{
        height:screenHeight,
        width:screenWidht,
        alignItems:'flex-start'
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
    imageLeft:{
        resizeMode: 'contain',
        tintColor: chooseColor,
        flex: 0.5,
        left: '30%'
    },
    imageRight:{
        resizeMode: 'contain',
        tintColor: 'white',
        flex: 0.5,
        right: '60%'
    },
    edit:{
        backgroundColor:'white',
        height:4,
        width:4,
        borderRadius:2
    },
    text:{
        fontFamily:  "Inter_500Medium",
        fontSize: 15,
        color: 'white',
        position:'absolute',
        left: '17%',
        top: 15,
        lineHeight:25
    },
    text1:{
        fontFamily:  "Inter_500Medium",
        fontSize: 13,
        color: 'grey',
        right: '-50%',
    },
    text2:{
        fontFamily:  "Inter_400Regular",
        fontSize: 15,
        color: 'white',
        left: '10%',
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