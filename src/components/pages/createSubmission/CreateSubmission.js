import React, { Component } from "react";
import { 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  Text, 
  TextInput, 
  TouchableWithoutFeedback,
  Keyboard 
} from "react-native";
import { responsiveSize } from '../../config/env'
import styles from "../createSubmission/styles";

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
                           source = {require('../../../images/arrow.png')}/>
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
                      <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Submissions')}
                        style = {styles.submitButton}>
                        <Text style = {{fontSize: responsiveSize(16)}}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </HideKeyboard>
            </SafeAreaView>
        )
    }
}
export default CreateSubmission;