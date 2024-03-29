import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native'
import {icons,images,SIZES,COLORS,FONTS} from '../../constants'


const Header = ({location,icon1,icon2,name}) =>{
  return(
    <View style={{flexDirection: 'row', height: 50}}>
      <TouchableOpacity
      style={{width: 50,paddingLeft: SIZES.padding*2,justifyContent: 'center'}}>
      <Image
      source={icon1}
      resizeMode="contain"
      style={{width: 30, height: 30}}
      />
      </TouchableOpacity>

      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: COLORS.lightGray3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius
          }}
        >
          <Text style={{...FONTS.h3}}>{name}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding*2,
          justifyContent: 'center'
        }}
      >
        <Image
        source={icon2}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header
