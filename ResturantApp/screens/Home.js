import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import {Header,MainCategories,RestaurantList} from '../components'
import {categoryData,restaurantData,initialCurrentLocation,affordable,fairPrice,expensive} from '../domiData/domiData'

const Home = ({navigation}) =>{
  const [categories, setCategories] = useState(categoryData)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [restaurants, setRestaurants] = useState(restaurantData)
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)
  function onSelectCategory(category){
    //filter restaurant list.
    let restaurantList= restaurantData.filter(a => a.categories.includes(category.id))
    setRestaurants(restaurantList)
    setSelectedCategory(category)

  }
  function getCategoryNameById(id){
    let category = categories.filter(a=>a.id ===id)
    if(category.length>0)return category[0].name
    return ""
  }
  return(
    <SafeAreaView style={styles.container}>
      <Header location={currentLocation} icon1={icons.nearby} icon2={icons.basket} name={currentLocation.streetName}/>
      <MainCategories categories={categories} onSelectCategory={onSelectCategory} selectedCategory={selectedCategory}/>
      <RestaurantList restaurants={restaurants} getCategoryNameById={getCategoryNameById} navigation={navigation} currentLocation={currentLocation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4
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

export default Home;
