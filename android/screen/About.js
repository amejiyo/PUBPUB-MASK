import { Text, Animated, StyleSheet, View, StatusBar, Image, Dimensions, BackHandler, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight} from 'react-native';
import React, { useState, useEffect, useRef } from "react";

const lightBlue = "#40A4E2";
const chooseColor = "#FFCC00";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);

export default ({ history, location }) => {
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
      
    return(
        <View style={styles.background}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.settingbar}>
                <TouchableWithoutFeedback onPress={() => history.push('/Setting',{language:lan})}>
                    <Image source={require('../../assets/right.png')} style={styles.imageRight}/>
                </TouchableWithoutFeedback>
                <Text style={styles.header}>About</Text>
            </View>
            <View style={{backgroundColor: '#1A1B1C', padding: 0, top: 20, borderRadius:40}}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Producer{"\n"}
                            <Text style={styles.textSub}>1. Chokdee Srirouang 62340500015 {"\n"}2. Tanach Chinabuttranon 62340500026 {"\n"}
                            3. Patcharapol Saechan 62340500036 {"\n"}4. Pakkapak Silpapinun 62340500042{"\n"}5. Worameth Wittanakorn 62340500045
                            {"\n"}6. Supawadee Chansangdee 62340500056{"\n"}7. Nattasit Paisalrittiwong 62340500063</Text>
                        </Text>
                    </View>
            </View>
            <View style={{backgroundColor: '#1A1B1C', padding: 0, top: '15%', position:'relative', borderRadius:40}}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Version {"\n"}<Text style={styles.textSub}>1.0.0</Text>
                        </Text>
                    </View>
            </View>
            <View style={{backgroundColor: '#1A1B1C', padding: 0, top: '25%', position:'relative', borderRadius:40}}>
                <TouchableHighlight onPress={()=>console.log('clicked')} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Term of Uses{"\n"}<Text style={styles.textSub}>This application only used for FRA261: Robotics studio</Text></Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
            </View>
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
    imageLeft:{
        resizeMode: 'contain',
        tintColor: 'white',
        height: '80%',
        position:'absolute',
        left: '30%'
    },
    touch:{
        height: screenHeight/12,
        backgroundColor: '#1A1B1C',
        position: 'relative',
        justifyContent: 'center',
        borderRadius: 20
    },
    text:{
        fontFamily:  "Inter_500Medium",
        fontSize: 15,
        lineHeight: 22,
        color: 'white',
        right: '-65%',
    },
    textSub:{
        fontFamily:  "Inter_500Medium",
        fontSize: 11,
        lineHeight: 22,
        color: 'grey',
        right: '-120%',
    },
    boarder:{
        height: 1,
        backgroundColor: '#4C4E50',
        position:'relative',
        width:screenWidht*0.9,
        left:'5%'
    }
});