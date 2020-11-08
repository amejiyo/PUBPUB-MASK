import { Text, Animated, StyleSheet, View, StatusBar, Image, Dimensions, BackHandler, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-native';

const chooseColor = "#FFCC00";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidht = Math.round(Dimensions.get('window').width);
const left = '-70%'

export default ({history}) => {
    const backAction = () =>{
        history.push("/Setting",{language: all})
        return true;
      }
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
    const [all, setLan] = useState({lan: 'English', trans: 'Thai'});
    console.log(all.trans,all.lan);

    return(
        <View style={styles.background}>
            <StatusBar backgroundColor="black" />
            <View style={styles.settingbar}>
                <TouchableWithoutFeedback onPress={() => history.push('/Setting',{language: all})}>
                    <Image source={require('../../assets/right.png')} style={styles.imageRight}/>
                </TouchableWithoutFeedback>
                <Text style={styles.header}>Language</Text>
            </View>
            <ScrollView>
                <Text style={styles.text1}>Detected language</Text>
                <View style={{backgroundColor: '#1A1B1C', padding:0, top: 10, borderRadius:40}}>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'English'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>English (Default)</Text>
                        <Image source={require('../../assets/select.png')} style={{
                                        resizeMode: 'contain',
                                        height: '80%',
                                        position:'absolute',
                                        left: left,
                                        tintColor: all.lan === 'English'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=> {setLan({...all,lan:'Thai'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>ไทย</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Thai'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Japanese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>日本語</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Japanese'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Spainish'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Español-Española</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Spainish'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Korean'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>한국어</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Korean'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Chinese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>中文 (中国)</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Chinese'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Taiwanese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>中文 (台湾)</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Chinese (Taiwan)'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Vietnamese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Tiếng Việt</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Vietnamese'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Filipino'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Filipino</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Filipino'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'French'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Français</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'French'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Dutch'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Deutsche</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Dutch'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Indonesian'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Indonesian</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Indonesian'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Lao'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>ລາວ</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Lao'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Malayalam'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Malayalam</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Malayalam'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,lan:'Arabic'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>العربية</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.lan === 'Arabic'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{height:40}}/>
                <Text style={styles.text1}>Translated language</Text>
                <View style={{backgroundColor: '#1A1B1C', padding:0, top: 10, borderRadius:40}}>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'English'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>English</Text>
                        <Image source={require('../../assets/select.png')} style={{
                                        resizeMode: 'contain',
                                        height: '80%',
                                        position:'absolute',
                                        left: left,
                                        tintColor: all.trans === 'English'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=> {setLan({...all,trans:'Thai'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Thai (Default)</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Thai'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Japanese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Japanese</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Japanese'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Spainish'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Spainish</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Spainish'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Korean'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Korean</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Korean'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Chinese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Chinese</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Chinese'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Taiwanese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Taiwanese</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Chinese (Taiwan)'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Vietnamese'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Vietnamese</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Vietnamese'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Filipino'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Filipino</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Filipino'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'French'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>French</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'French'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Dutch'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Dutch</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Dutch'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Indonesian'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Indonesian</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Indonesian'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Lao'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Lao</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Lao'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Malayalam'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Malayalam</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Malayalam'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.boarder}/>
                <TouchableHighlight onPress={()=>{setLan({...all,trans:'Arabic'}); return null;}} style={styles.touch} underlayColor='black'>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style= {styles.text}>Arabic</Text>
                        <Image source={require('../../assets/select.png')} style={{
                            resizeMode: 'contain',
                            height: '80%',
                            position:'absolute',
                            left: left,
                            tintColor: all.trans === 'Arabic'? 'green' : '#1A1B1C'
                        }}/>
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{height:100}}/>
            </ScrollView>
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
    touch:{
        height: screenHeight/12,
        position: 'relative',
        justifyContent: 'center',
    },
    text:{
        fontFamily:  "Inter_500Medium",
        fontSize: 15,
        color: 'white',
        right: '-120%',
    },
    text1:{
        fontFamily:  "Inter_500Medium",
        fontSize: 11,
        color: 'grey',
        right: '-5%',
    },
    boarder:{
        height: 1,
        backgroundColor: '#4C4E50',
        position:'relative',
        width:screenWidht*0.9,
        left:'5%'
    }
});
