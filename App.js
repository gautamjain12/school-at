import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import SummaryScreen from './Screens/SummaryScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';


export default class App extends Component {
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen : HomeScreen,
  SummaryScreen : SummaryScreen
})

const AppContainer = createAppContainer(AppNavigator)



/*
render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }


  constructor(){
    super();
    this.state = {
      name1 : "",
      name2 : "",
      name3: ""
    }
  }


  readNames(){
    var dbRef = db.ref('Students/')
    dbRef.on("value", (data) => {
      var names = data.val();

      this.setState({
        name1 : names.Student1.Name,
        name2 : names.Student2.Name,
        name3 : names.Student3.Name
      })
    })

  }

  componentDidMount(){
    this.readNames();
  }

  render(){
    return(
      <View>
        <Text> Student 1 : {this.state.name1} </Text>
        <Text> Student 2 : {this.state.name2} </Text>
        <Text> Student 3 : {this.state.name3} </Text>
      </View>
    )
  }

*/