import React from 'react';
import {StyleSheet, View, BackHandler, Alert,PermissionsAndroid} from 'react-native';
import {
  NativeRouter,
  Route,
  Switch,
  BackButton,
} from 'react-router-native';
import Home from './android/screen/Home';
import Language from './android/screen/Language';
import Setting from './android/screen/Setting';
import WelcomeScreen from './android/screen/WelcomeScreen';
import Home2 from './android/screen/HomeV2';

//fine location permission
export async function request_location_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'ReactNativeCode Location Permission',
        'message': 'ReactNativeCode App needs access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Location Permission Granted.");
    }
    else {
      console.log("Location Permission Not Granted");
    }
  } catch (err) {
    console.warn(err)
  }
}

//record audio permission
export async function request_recordAD_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        'title': 'ReactNativeCode Record Audio Permission',
        'message': 'ReactNativeCode App needs access to your record audio'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Record Audio Permission Granted.");
    }
    else {
      console.log("Record Audio Permission Not Granted");
    }
  } catch (err) {
    console.warn(err)
  }
}

//write storage permission
export async function request_write_storage_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'ReactNativeCode write external storage Permission',
        'message': 'ReactNativeCode App needs access to your storage'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Writing external storge Permission Granted.");
    }
    else {
      console.log("Writing external storge Permission Not Granted");
    }
  } catch (err) {
    console.warn(err)
  }
}

//read storage permission
export async function request_read_storage_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        'title': 'ReactNativeCode write external storage Permission',
        'message': 'ReactNativeCode App needs access to your storage'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Reading external storge Permission Granted.");
    }
    else {
      console.log("Reading external storge Permission Not Granted");
    }
  } catch (err) {
    console.warn(err)
  }
}

export default class App extends React.Component {
  async componentDidMount() {
    await request_location_runtime_permission()
    await request_recordAD_runtime_permission()
    await request_write_storage_runtime_permission()
    await request_read_storage_runtime_permission()
  }
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Setting} />
            <Route exact path="/Setting" component={Setting} />
            <Route exact path="/Home" component={Home2} />
            <Route exact path="/Language" component={Language} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
