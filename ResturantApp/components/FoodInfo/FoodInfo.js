import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList,Animated} from 'react-native'
import {icons,images,SIZES,COLORS,FONTS} from '../../constants'
// import {restaurantData} from '../../domiData/domiData'

const FoodInfo = ({restaurant}) =>{

  return(
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showHorizontalScrollIndicator={false}
    >
    {
        restaurant?.menu.map((item, index)=>(
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
            {/*Quality*/}
            <View
              style={{
                position: 'absolute',
                bottom: -20,
                width: SIZES.width,
                height: 50,
                justifyContent: 'center',
                flexDirection: 'row'
              }}
            >
              <TouchableOpacity
                style={{
                  width: 30,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
              >
                <Text style={{...FONTS.body1}}>-</Text>
              </TouchableOpacity>
              <View style={{
                width: 50,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{...FONTS.h2}}>5</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
              >
              <Text style={{...FONTS.body1}}>+</Text>

              </TouchableOpacity>
            </View>
          </View>
          {/*name and description*/}
            <View
              style={{
                width: SIZES.width,
                alignItems: 'center',
                marginTop: 15,
                paddingHorizontal: SIZES.padding*2
              }}
            >
              <Text style={{marginVertical: 10,alignItems: 'center',...FONTS.h2}}>{item.name} - {item.price.toFixed(2)}</Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        ))
    }
    </Animated.ScrollView>
  )
}

export default FoodInfo
