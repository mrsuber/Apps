import {useState,useEffect} from 'react'
import {Text, View, StyleSheet, StatusBar,SafeAreaView,ImageBackground,Image,Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {images,SIZES} from './src/constants'
import {COLORS} from './src/constants'
import {SpinAnimation} from './src/utils/splashScreenHelper'
import SplashScreen from './src/screens/splashScreen/SplashScreen'
import HomeScreen from './src/screens/homeScreen/HomeScreen'
import FashionHomeScreen from './src/screens/fashionHomeScreen/FashionHomeScreen'
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Splash'}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FashionHome" component={FashionHomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}
