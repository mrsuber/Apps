import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native'
import {icons,images,SIZES,COLORS,FONTS} from '../../constants'


const MainCategories = ({categories,onSelectCategory,selectedCategory})=>{

    const renderItem = ({item})=>{
      return(
        <TouchableOpacity
          style={{
            
            paddingBottom: SIZES.padding*2,
            backgroundColor: (selectedCategory?.id === item.id)? COLORS.primary :COLORS.white ,
            borderRadius: SIZES.radius ,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow
          }}
          onPress={()=>onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: (selectedCategory?.id === item.id)? COLORS.white :COLORS.lightGray ,


            }}
          >
          <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30
          }}
          />

          </View>

          <Text
          style={{
            marginTop: SIZES.padding,
            color: (selectedCategory?.id === item.id)? COLORS.white :COLORS.black ,

            ...FONTS.body5
          }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )
    }
  return(
    <View>
        <Text style={{...FONTS.h1,padding: SIZES.padding*2}}>Main</Text>
        <Text style={{...FONTS.h1,padding: SIZES.padding*2}}>categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item=>`${item.id}`}
          renderItem = {renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding*2}}
        />
    </View>
  )
}

const styles = StyleSheet.create({

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

export default MainCategories
