import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import {images,SIZES} from '../constants'

export const SpinAnimation = () => {
  const Spin = new Animated.Value(0)
  const SpinValue = Spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  useEffect(() => {
    Animated.timing(Spin, { toValue: 1, duration: 11000, useNativeDriver: true }).start()
  }, [Spin])
  return (

    <View>

      <Animated.Image
        style={{ resizeMode: 'contain', transform: [{ rotate: SpinValue }], marginTop: 30,height:50,width:50,tintColor:'#fff' }}
        source={images.spinIcon}
      >

      </Animated.Image>
    </View>
  )


}
