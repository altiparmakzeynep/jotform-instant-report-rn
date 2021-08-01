import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../config/env'

class Main extends Component {
    render(){
        return (
            <View style={styles.container}>
              <View style = {styles.submissionContainer}>
                <Text style = {{fontSize: responsiveSize(20), margin: responsiveSize(10)}}>Support Team</Text>
                <View style = {{borderBottomWidth: 1, width: PhoneWidth * 0.5}}></View>
                <Text style = {{fontSize: responsiveSize(12), margin: responsiveSize(10)}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Text>
              </View>
            </View>
          );
    }
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  submissionContainer: {
    marginTop: PhoneHeight * 0.1,
    borderWidth: 0,
    borderRadius: 24,
    backgroundColor: '#fbca6f',
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.4

  }
});

export default Main;