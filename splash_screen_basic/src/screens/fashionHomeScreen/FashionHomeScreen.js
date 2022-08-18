import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function FashionHomeScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Text> WELCOME TO THE FASHION HOME  !!!! </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
