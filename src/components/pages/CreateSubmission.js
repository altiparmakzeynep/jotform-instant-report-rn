import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { responsiveSize, PhoneWidth, PhoneHeight } from '../config/env'

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
       onPress={() => Keyboard.dismiss()}>{children}
  </TouchableWithoutFeedback>
);
  
class CreateSubmission extends Component{
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Submissions')}
                        style = {styles.arrowButtonContainer}>
                        <Image
                           style = {{width: responsiveSize(15), height: responsiveSize(15), marginLeft: responsiveSize(10)}}
                           source = {require('../../../src/images/arrow.png')}/>
                    </TouchableOpacity>
                    <View style = {styles.headerTextContainer}>
                      <Text style = {{fontSize: responsiveSize(14), fontWeight: 'bold'}}>Create Submission</Text>
                    </View>
                </View>
                <HideKeyboard>
                  <View style = {styles.inputsContainer}>
                    <View style = {styles.teamContainer}>
                      <Text style = {{fontSize: responsiveSize(15), marginLeft: responsiveSize(5)}}>Team:</Text>
                    </View>
                    <View style = {styles.textContainer}>
                      <Text style = {{fontSize: responsiveSize(15), marginLeft: responsiveSize(5)}}>Text:</Text>
                        <TextInput 
                            maxLength = {140}
                            multiline = {true} 
                            style = {styles.textInputContainer}/>
                    </View>
                    <View style = {styles.submitButtonContainer}>
                      <TouchableOpacity style = {styles.submitButton}>
                        <Text style = {{fontSize: responsiveSize(16)}}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </HideKeyboard>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    borderWidth: 0,
    width: PhoneWidth,
    height: PhoneHeight * 0.1,
    flexDirection: 'row'
  },
  headerTextContainer: {
    borderWidth: 0,
    width: PhoneWidth * 0.5,
    height: PhoneHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrowButtonContainer: {
    borderWidth: 0, 
    justifyContent: 'center',
    width: PhoneWidth * 0.25, 
    height: PhoneHeight * 0.1,
  },
  inputsContainer: {
    borderWidth: 0,
    backgroundColor: '#fff',
    width: PhoneWidth,
    height: PhoneHeight ,
    alignItems: 'center',
  },
  teamContainer: {
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 12,
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.1,
    marginTop: PhoneHeight * 0.1,
    backgroundColor: '#fbca6f'
  },
  textContainer: {
    borderWidth: 0,
    justifyContent: 'center',
    borderRadius: 12,
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.4,
    marginTop: PhoneHeight * 0.05,
    backgroundColor: '#fbca6f'
  },
  textInputContainer: {
    alignSelf: 'center',
    width: PhoneWidth * 0.85, 
    height: PhoneHeight * 0.3, 
    borderWidth: 0,
    marginTop: responsiveSize(10), 
    borderRadius: 12,
    backgroundColor: '#fddb9c',
    padding: responsiveSize(10),
  },
  submitButtonContainer: {
    width: PhoneWidth,
    height: PhoneHeight * 0.1,
    marginTop: PhoneHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    borderWidth: 0,
    borderRadius: 12,
    height: PhoneHeight * 0.075,
    width: PhoneWidth * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbca6f'
  }
});
export default CreateSubmission;