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
  const [color1, setColor1] = useState("white");
  const [fontcolor1, setfontColor1] = useState(fontColorOff);
  const [color2, setColor2] = useState("white");
  const [fontcolor2, setfontColor2] = useState(fontColorOff);
  const [color3, setColor3] = useState("white");
  const [fontcolor3, setfontColor3] = useState(fontColorOff);
  const [fontcolor4, setfontColor4] = useState(fontColorOn);
  const [inButton, setState] = useState(null);
  const onPress1 = () => {setColor1(color1 == "white" ? "#40A4E2" : "white"), 
                          setfontColor1(fontcolor1 == fontColorOff? fontColorOn : fontColorOff)
                        if (color2 != 'white' || color3 != 'white'){
                          setfontColor2(fontColorOff)
                          setColor2('white')
                          setfontColor3(fontColorOff)
                          setColor3('white')
                          setfontColor4(fontColorOn)
                        }};
  const onPress2 = () => {setColor2(color2 == "white" ? "#40A4E2" : "white"), setfontColor2(fontcolor2 == fontColorOff? fontColorOn : fontColorOff)};
  const onPress3 = () => {setColor3(color3 == "white" ? "#40A4E2" : "white"), setfontColor3(fontcolor3 == fontColorOff? fontColorOn : fontColorOff), setfontColor4(fontcolor4 == "#40A4E2"? fontColorOn : "#40A4E2")};
  const clicked = () => {setState(color3 == "#40A4E2"? 1: null)};
  const unclicked = () => {setState(null)}
  const [transButton, setSize] =useState(screenHeight*0.2)

    return (
      <TouchableWithoutFeedback onPress={unclicked}>
      <View style={styles.background}>
        <StatusBar backgroundColor="black" />
        <Text style={styles.text_PB}>
          PUP PUB {"\n"}
          <Text style={styles.text_M}>MASK</Text>
        </Text>
        <TouchableOpacity style={{
          borderRadius: buttonHeight/4,
          height: buttonHeight/2,
          width: buttonHeight/2,
          position:'absolute',
          top: '5%',
          right: 0,
          backgroundColor: '#40A4E2',
          alignItems: 'center',
          justifyContent:'center'
        }}
        onPress ={()=>history.push("/Setting")}>
          <Image source={require('../../assets/setting.png')} 
          style={{tintColor:'white', flex:0.5, resizeMode:'contain'}}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            width: buttonWidht,
            height: buttonHeight,
            position: "absolute",
            top: '20%',
            backgroundColor: color1,
            alignItems: 'center',
          }}
          onPress = {onPress1}>
            <Image source={require('../../assets/ble.png')} 
            style={{
            flex:0.55,
            resizeMode: 'contain', 
            tintColor: fontcolor1,
            top: '15%'
            }}>
            </Image>
            <Text style={{
              fontFamily: "Inter_700Bold",
              fontSize: 14,
              position:'absolute',
              bottom: '10%',
              color: fontcolor1
              }}>Bluetooth</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderRadius: 20,
            width: buttonWidht,
            height: buttonHeight,
            position: "absolute",
            right: 0,
            top: '20%',
            backgroundColor: color2,
            alignItems: 'center',
          }}
          onPress={fontcolor1 == 'white'? onPress2 : () => console.log('clicked2')}>
            <Image source={require('../../assets/speaker.png')} 
            style={{
            flex:0.5,
            resizeMode: 'contain', 
            tintColor: fontcolor2,
            top: '18%'
            }}>
            </Image>
            <Text style={{
              fontFamily: "Inter_700Bold",
              fontSize: 14,
              position: 'absolute',
              bottom: '10%',
              color: fontcolor2
              }}>Speaker</Text>
        </TouchableOpacity>        
        <TouchableOpacity
          style={{
            borderRadius: 20,
            width: screenWidht*84/100,
            height: buttonHeight*2.7,
            top: buttonWidht*2,
            backgroundColor: color3,
            alignItems: 'center',
            flexDirection: 'column',
          }}
          onPress={fontcolor1 == 'white'? onPress3 : () => console.log('a')}
        >
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            top: '-37%',
            right: 0
          }}>
          <Image source={require('../../assets/translate.png')} 
            style={{
            flex:0.15,
            resizeMode: 'contain', 
            tintColor: fontcolor3,
            position: 'relative',
            left: '-35%',
            top: 0
            }}>
            </Image>
            <Text style={{
              fontFamily: "Inter_700Bold",
              fontSize: 15,
              color: fontcolor3,
              position: 'absolute',
              left: '-17%',
              top: '50%',
              }}>
                Translate: {fontColorOff}</Text>
                </View>
                  <ScrollView style={{
                  backgroundColor: fontcolor3,
                  borderRadius: 10,
                  width: screenWidht*73/100,
                  position:'absolute',
                  bottom: '5%',
                  height: buttonHeight*1.9,
                  }}>
                    <Text style={{fontSize:15, fontFamily: 'Inter_500Medium', marginLeft:'2%',marginRight:'2%'}}> 
                    </Text>
                  </ScrollView>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
    marginLeft:'8%',
    marginRight: '8%'
  },
  text_PB: {
    fontFamily: "Inter_700Bold",
    fontSize: 27,
    lineHeight: 35,
    color: "#40A4E2",
    position: "absolute",
    top: '5%',
  },
  text_M: {
    fontFamily: "Inter_900Black",
    fontSize: 39,
    letterSpacing: 2,
    color: "white",
  },
});
