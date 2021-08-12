import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: '',
      name2: '',
      name3: '',

      at1: '',
      at2: '',
      at3: '',
    };
  }

  goToSummaryScreen = () => {
    this.props.navigation.navigate('SummaryScreen');
  };

  updatePresent1 = () => {
    var dbRef = db.ref('Students/Student1/');
    dbRef.update({
      Attendance: 'Present',
    });
    console.log('updating 1 as present.')
  };

  updateAbsent1 = () => {
    var dbRef = db.ref('Students/Student1/');
    dbRef.update({
      Attendance: 'Absent',
    });
  };

  updatePresent2 = () => {
    var dbRef = db.ref('Students/Student2/');
    dbRef.update({
      Attendance: 'Present',
    });
  };

  updateAbsent2 = () => {
    var dbRef = db.ref('Students/Student2/');
    dbRef.update({
      Attendance: 'Absent',
    });
  };

  updatePresent3 = () => {
    var dbRef = db.ref('Students/Student3/');
    dbRef.update({
      Attendance: 'Present',
    });
  };

  updateAbsent3 = () => {
    var dbRef = db.ref('Students/Student3/');
    dbRef.update({
      Attendance: 'Absent',
    });
  };

  componentDidMount() {
    var dbRef = db.ref('Students/');
    dbRef.on('value', (data) => {
      var names = data.val();

      this.setState({
        name1: names.Student1.Name,
        name2: names.Student2.Name,
        name3: names.Student3.Name,
      });

      console.log(this.state.name1)
    });
  }

  render() {
    return (
      <View>
        <AppHeader />
<Text> </Text>
        <Text> Student 1 : {this.state.name1} </Text>
        <Text> </Text>
        <TouchableOpacity
          style={[styles.presentButton]}
          onPress={() => this.updatePresent1()}>
          Present
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.absentButton]}
          onPress={() => this.updateAbsent1()}>
          Absent
        </TouchableOpacity>
        <Text> </Text>

        <Text> Student 2 : {this.state.name2} </Text>
        <Text> </Text>
        <TouchableOpacity
          style={[styles.presentButton]}
          onPress={() => this.updatePresent2()}>
          Present
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.absentButton]}
          onPress={() => this.updateAbsent2()}>
          Absent
        </TouchableOpacity>

        <Text> </Text>
        <Text> Student 3 : {this.state.name3} </Text>

        <TouchableOpacity
          style={[styles.presentButton]}
          onPress={() => this.updatePresent3()}>
          Present
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.absentButton]}
          onPress={() => this.updaetAbsent3()}>
          Absent
        </TouchableOpacity>
        <Text> </Text>

        <TouchableOpacity
          style={[styles.doneButton]}
          onPress={() => this.goToSummaryScreen()}>
          DONE
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    //alignSelf : 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,

    width: 55,
    height: 30,
  },

  absentButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    //alignSelf : 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    width: 55,
    height: 30,
  },

  doneButton: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    width: 55,
    height: 30,
  },
});
