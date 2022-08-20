import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {images,SIZES,customFonts,COLORS} from '../../src/constants'

const Tickets = ({ params }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 30 }}>Tickets</Text>
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

export default Tickets;
