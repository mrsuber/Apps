
import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import {images,SIZES,customFonts,COLORS} from '../../src/constants'


const EventDetail = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 30 }}>EventDetail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BGPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventDetail;
