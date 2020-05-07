import React, {useState} from 'react';
// 1) Import useState
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput, Alert, Modal } from 'react-native';
export default function App() {

  const [name, setName] = useState('')
  //2)  Create a variable [variableName, function Name] = //Initial value
  const handleButton = () => alert('Hello World')
  // This is ES6 code, do revise it on Freecodecamp 

  // - Modal - 1 Create state visible or non visible to Modal
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showAlert = () => {
Alert.alert("Welcome", "Welcome to my app", [
  {
    text: "Cancel",
    onPress: () => console.log("Cancel Pressed"), style: "cancel"
    },
    {
      text: "Not sure",
      onPress: () => console.log("Not sure Pressed"), style: "default"
      },
    {
      text: "OK",
      onPress: () => console.log("OK Pressed"), style: "default"
      },
])
  }

  return (
    <View style={styles.container}>
      {/* Basic modal code start */}
      <Modal
      animationType="slide"
      visible={modalIsVisible}>

        <View style={styles.container}>
          <Text>Hello World</Text>
          <TouchableHighlight >
            <Text>Close Modal</Text>
          </TouchableHighlight>
        </View>
      </Modal>
      {/* Basic Modal code end */}
      <Text style={styles.header}>Hello World!</Text>
      <Text style={styles.subHeading}>Welcome to my app!</Text>
      {/* <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}} style={{width: 150, height: 200}} /> */}
      <Image source={require('./imgs/logo.png')} style={{ width: 300, height: 200 }} />
      <TextInput placeholder="What is your name" 
      autoCorrect={false}
      onChangeText={text=> setName(text)}
      value={name}
      />
      <Button onPress={handleButton} title="Press Me" />
      <TouchableHighlight onPress={() => alert(`Hello ${name}`)}>
        <View style={styles.touchStyle}><Text style={{ color: 'white' }}>Press Me</Text></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={showAlert}>
        <View style={styles.alertStyle}><Text style={{ color: 'white' }}>Show Alert</Text></View>
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
    fontSize: 32,
    color: 'red'
  },
  subHeading: {
    padding: 15,
    fontSize: 24,
    color: 'black'
  },
  touchStyle: {
    backgroundColor: 'red',
    padding: 10
  },
  alertStyle: {
    backgroundColor: 'indigo',
    padding: 10
  }
});