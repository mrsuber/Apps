import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {SpinAnimation} from '../../utils/splashScreenHelper';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import {images,SIZES} from '../../constants'

export default function SplashScreen({navigation}) {
    const [timePassed, setTimePassed] = useState(false);
    setTimeout(()=>{
      navigation.navigate('Home')
    },3000)

    return (
      <View style={styles.container}>
        <Image
        style={{ resizeMode: 'contain', height:150, width:150,tintColor:'#fff' }}

        source={images.logo}
      />
        <SpinAnimation/>
      </View>
    );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyImg: {
        width: 50,
        height: 50,
      },
  });
