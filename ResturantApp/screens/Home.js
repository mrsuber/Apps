import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native'
import {icons,images,SIZES,COLORS,FONTS} from '../constants'
import {Header,MainCategories} from '../components'
import {categoryData,restaurantData,initialCurrentLocation} from '../domiData/domiData'
const Home = () =>{
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
  return(
    <SafeAreaView style={styles.container}>
      <Header location={currentLocation}/>
      <MainCategories categories={categories} onSelectCategory={onSelectCategory} selectedCategory={selectedCategory}/>
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
