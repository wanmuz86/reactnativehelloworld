import React from 'react';
import { StyleSheet, Text, View, Image,Button, TouchableHighlight } from 'react-native';

export default function App() {
  const handleBtn = () => alert('Hello World')

  /* function handleButton {
    alert('Hello World')
  }*/
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World</Text>
      <Text style={styles.subHeading}>Welcome to my app</Text>
      <Image 
      source={require('./imgs/logo.png')} style={{width: 350, height: 200}}
      />
      <Button onPress={handleBtn} title="Press Me" />
      <TouchableHighlight onPress={handleBtn}>
        <View>
    <Text>Press me!</Text>
  </View>
</TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize:32,
    color:'red'
  },
  subHeading:{
    marginTop:10,
    color:'#00f',
    fontSize:24
  }

});
