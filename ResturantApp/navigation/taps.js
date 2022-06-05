import React from 'react'
import {View, Image,TouchableOpacity} from 'react-native'
import {createBottomTabNavigator,BottomTabBar} from '@react-navigation/bottom-tabs'
import {Home} from '../screens'
import {COLORS,icons} from '../constants'
import {TabBarCustomButton,CustomTabBar} from '../components'

const Tab = createBottomTabNavigator()

let tabScreenData = [
  {name:"Home",icon:icons.cutlery,},
  {name:"Search",icon:icons.search,},
  {name:"Like",icon:icons.like,},
  {name:"User",icon:icons.user,},
]


const Tabs = () =>{
  return(
     <Tab.Navigator
      tabBarOptions={{
        showLabel:false,
        style:{
          borderTopWidth:0,
          backgroundColor:"transparent",
          elavation:0
        }
      }}
      tabBar={(props)=>(
        <CustomTabBar
          props={props}
        />
      )}
     >

     {
       tabScreenData.map((item,index)=>(
         <Tab.Screen
          key={index}
           name={item.name}
           component={Home}
           options={{
             tabBarIcon:({ focused})=>(
               <Image
                 source={item.icon}
                 resizeMode="contain"
                 style={{
                   width: 25,
                   height: 25,
                   tintColor: focused ? COLORS.primary : COLORS.secondary

                 }}
               />
             ),
             tabBarButton:(props)=>(
               <TabBarCustomButton
                  {...props}
               />
             )
           }}
         />
       ))
     }



     </Tab.Navigator>
  )
}

export default Tabs
