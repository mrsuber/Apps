import React,{useState,useEffect} from 'react';
import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList,Animated} from 'react-native'
import {Header2} from '../components'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import {isIphoneX} from 'react-native-iphone-x-helper'


const Restaurant = ({route,navigation}) =>{
  const [restaurant,setRestaurant] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(()=>{
    let {item, currentLocation} = route.params
    setRestaurant(item)
    setCurrentLocation(currentLocation)
  },[])
  return(

    <SafeAreaView style={styles.container}>
      <Header2 icon1={icons.back} icon2={icons.basket} name={'Resturant'} navigation={navigation}/>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.lightGray2
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  }
})
export default Restaurant;
