import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Text> WELCOME TO THE HOMESCREEN !!!! </Text>

          <TouchableOpacity
          style={{margin: 5, backgroundColor:'green',padding:10,
        }}
          onPress={()=>navigation.navigate("FashionHome")}
          >
              <Text> go to login </Text>
          </TouchableOpacity>
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
