import React, { Component } from "react";
import { 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  Text, 
  TextInput, 
  TouchableWithoutFeedback,
  Keyboard,
  Modal
} from "react-native";
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../config/env'
import styles from "../createSubmission/styles";
import { Picker } from '@react-native-picker/picker';
import { fetchTeamCategories, sendSubmission, fetchSubmissions} from '../../../actions/action';
import { connect } from 'react-redux';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
       onPress={() => Keyboard.dismiss()}>{children}
  </TouchableWithoutFeedback>
);
  
class CreateSubmission extends Component{
  componentDidMount(){
    this.props.fetchTeamCategories();
  }
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedTeam: "Select", 
      longTextValue: ""
    }   
  }
  displayModal = () => {
    this.setState({modalVisible: true
    })
  }
  setSelectedTeam = (itemValue) => {
    this.setState({selectedTeam : itemValue})
  }
  close = () => {
    this.setState({modalVisible: false})
  }
  onLongTextChanged = (value) => this.setState({longTextValue: value})

   onSubmit = async () => {
    await this.props.sendSubmission(this.state.selectedTeam, this.state.longTextValue);
    await this.props.navigation.navigate('Submissions');
    await this.props.fetchSubmissions();
  }
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Submissions')}
                        style = {styles.arrowButtonContainer}>
                        <Image
                           style = {styles.arrowImg}
                           source = {require('../../../images/arrow.png')}/>
                    </TouchableOpacity>
                    <View style =  {styles.bottomHeader}>
                      <Text style = {styles.bottomHeaderText}>Team</Text>
                      <TouchableOpacity 
                        onPress = {this.displayModal}
                        style = {styles.bottomDropdown}>
                     <Text style = {styles.dropdownText}>{this.state.selectedTeam}</Text>
                     <Image 
                        style = {styles.downArrowImg}
                        source = {require('../../../images/downArrow.png')}></Image>
                    </TouchableOpacity>
                    </View>
                </View>
                <HideKeyboard>
                  <View style = {styles.inputContainer}>
                    <Modal animationType = "slide"
                           transparent = {true}
                           visible = {this.state.modalVisible}
                           onRequestClose = {() => {
                           this.setModalVisible(!modalVisible)}}>
                      <View style = {styles.modalContainer}>
                        <Picker 
                        selectedValue = {this.state.selectedTeam}
                        onValueChange = {( itemValue, itemIndex) => this.setSelectedTeam(itemValue)}>
                            {this.props.teamCategoriesValue.map((item) => {
                              return(
                                <Picker.Item label = {item} value = {item}></Picker.Item> 
                              )
                            })}
                        </Picker>
                        <View style = {styles.saveButtonContainer}>
                          <TouchableOpacity 
                            onPress =  {this.close}
                            style = {{borderWidth: 0, width: PhoneWidth * 0.25, height: PhoneHeight * 0.1, alignItems: 'center'}}>
                            <Text style = {{fontSize: responsiveSize(20)}}>Done</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Modal>
                    <View style = {styles.titleContainer}>
                      <Text style = {styles.titleText}>What is new?</Text>
                    </View>
                    <View style = {styles.textContainer}>
                        <TextInput 
                            placeholder = 'Type here...'
                            maxLength = {140}
                            multiline = {true} 
                            style = {styles.textInputContainer}
                            onChangeText={this.onLongTextChanged}/>
                    </View>
                    <View style = {styles.submitButtonContainer}>
                      <TouchableOpacity 
                        onPress = { this.onSubmit }
                        style = {styles.submitButton}>
                        <Text style = {styles.submitText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </HideKeyboard>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = (state) => {
  const { teamCategoriesValue, longTextValue } = state.mainReducer;
  return {
    teamCategoriesValue,
    longTextValue
  }

}
export default connect(
  mapStateToProps,
  {
    fetchTeamCategories,
    sendSubmission,
    fetchSubmissions
  }
)(CreateSubmission)