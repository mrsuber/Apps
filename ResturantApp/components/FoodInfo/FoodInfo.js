import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList,Animated} from 'react-native'
import {icons,images,SIZES,COLORS,FONTS} from '../../constants'
import {restaurantData} from '../../domiData/domiData'

const FoodInfo = () =>{
  console.log(restaurantData)
  return(
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showHorizontalScrollIndicator={false}
    >
    {
        restaurantData?.menu.map((item, index)=>(
          <View
            key={`menu=${index}`}
            style={{alignItems: 'center'}}
          >
          <View  style={{height:SIZES.height*0.35}} >
            {/**/}
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: "100%"
              }}
            />

          </View>

          </View>
        ))
    }
    </Animated.ScrollView>
  )
}

export default FoodInfo
