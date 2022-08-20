import {useState,useEffect} from 'react'
import * as Font from 'expo-font';
import {Text, View, StyleSheet, StatusBar,SafeAreaView,ImageBackground,Image,Animated,ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {images,SIZES,customFonts,COLORS} from './src/constants'
import {SpinAnimation} from './src/utils/splashScreenHelper'
import SplashScreen from './src/screens/splashScreen/SplashScreen'
import HomeScreen from './src/screens/homeScreen/HomeScreen'
import FashionHomeScreen from './src/screens/fashionHomeScreen/FashionHomeScreen'
import Featured from './src/screens/Featured';
import EventDetail from './src/screens/EventDetail';
import Tabs from './src/navigation/Tabs';

const Stack = createStackNavigator();


export default function App() {
  const [assetsLoaded, setAssetLoaded] = useState(false);

  /* Loading custom fonts in async */
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  });


  return assetsLoaded ?  (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#191925"></StatusBar>
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Splash'}

        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="FashionHome" component={FashionHomeScreen} />
          <Stack.Screen name="Featured" component={Featured} />
          <Stack.Screen name="EventDetail" component={EventDetail} />
        </Stack.Navigator>
    </NavigationContainer>

  ): (
    <ActivityIndicator size="small"></ActivityIndicator>
  );
}
