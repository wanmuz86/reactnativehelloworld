import React, {useState} from 'react';
// 1) Import useState
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TextInput,FlatList, Alert, Modal, ScrollView, SafeAreaView } from 'react-native';
export default function App() {

  const [name, setName] = useState('')
  //2)  Create a variable [variableName, function Name] = //Initial value
  const handleButton = () => alert('Hello World')
  // This is ES6 code, do revise it on Freecodecamp 

  // - Modal - 1 Create state visible or non visible to Modal
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // - ListView - 1 Create data that's going to be shown in the ListView
  const [users, setUsers] = useState([
    {
      'id':1,
      'name':'Aiman'
    },
    {
      'id':2,
      'name':'Roshan'
    },
    {
      'id':3,
      'name':'Nabil'
    },
    {
      'id':4,
      'name':'Chan Wei Ping'
    }
  ])

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
    <SafeAreaView style={styles.container}>
      {/* Basic modal code start */}
      <Modal
      animationType="slide"
      visible={modalIsVisible}>

        <SafeAreaView style={styles.container}>
          <FlatList
          data={users}
  renderItem={({item})=> <View><Text>{item.name}</Text></View>}
  keyExtractor={item=>item.id}
  />
          <TouchableHighlight onPress={()=>setModalIsVisible(false)} style={styles.modalStyle}>
            <Text style={{color:'white'}}>Close Modal</Text>
          </TouchableHighlight>
        </SafeAreaView>
      </Modal>
      {/* Basic Modal code end */}
      <ScrollView>
      <Text style={styles.header}>Hello World!</Text>
      <Text style={styles.subHeading}>Welcome to my app!</Text>
       <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}} style={{width: 150, height: 200}} /> 
      <Image source={require('./imgs/logo.png')} style={{ width: 300, height: 200 }} />
      <Image source={require('./imgs/logo.png')} style={{ width: 300, height: 200 }} />
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
      <TouchableHighlight onPress={()=>setModalIsVisible(true)}>
        <View style={styles.modalStyle}><Text style={{ color: 'white' }}>Show Modal</Text></View>
      </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
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
  },
  modalStyle: {
    backgroundColor: 'blue',
    padding: 10
  }
});