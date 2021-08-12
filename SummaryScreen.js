import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader'


export default class SummaryScreen extends React.Component {
constructor(){
    super();
    this.state = {
      name1 : "",
      name2 : "",
      name3 : "",

      at1 : "",
      at2 : "",
      at3 : "",
    }
  }

  componentDidMount(){
    var dbRef = db.ref('Students/');
    dbRef.on("value", (data) => {
      var names = data.val();

      this.setState({
        name1 : names.Student1.Name,
        name2 : names.Student2.Name,
        name3 : names.Student3.Name,

        at1 : names.Student1.Attendance,
        at2 : names.Student2.Attendance,
        at3 : names.Student3.Attendance
      })
    })

  }

  render(){
    return(
      <View>
      <AppHeader/>

      <Text>
      Summary:
      </Text>

      <Text>
      {this.state.name1} : {this.state.at1}
      </Text>

      <Text>
      {this.state.name2} : {this.state.at2}
      </Text>
      
      <Text>  
      {this.state.name3} : {this.state.at3}
      </Text>

      </View>
    )
  }
}