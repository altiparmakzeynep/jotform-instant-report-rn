import React, { Component } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Modal
 } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../config/env'
import { Picker } from '@react-native-picker/picker';
import styles from '../../pages/main/styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedTeam: "Select your team", 
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
    render(){
        return (
            <SafeAreaView style = {styles.container}>
              <View style = {styles.headerContainer}>
                  <TouchableOpacity style = {styles.arrowButtonContainer}>
                    <Image
                      style = {{width: responsiveSize(15), height: responsiveSize(15), marginLeft: responsiveSize(10)}}
                      source = {require('../../../images/arrow.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress = {this.displayModal}
                    style = {styles.pickerContainer}>
                    <Text style = {{fontSize: responsiveSize(18)}}>{this.state.selectedTeam}</Text>
                    <Image 
                      style = {{width: responsiveSize(9), height: responsiveSize(9), marginTop: responsiveSize(2), marginLeft: responsiveSize(2)}}
                      source = {require('../../../images/downArrow.png')}></Image>
                  </TouchableOpacity>
              </View>
              <Modal
                  animationType = "slide"
                  transparent = {true}
                  visible = {this.state.modalVisible}
                  onRequestClose = {() => {
                  this.setModalVisible(!modalVisible)}}>
                <View style = {styles.modalContainer}>
                  <Picker 
                      selectedValue = {this.state.selectedTeam}
                      onValueChange = {( itemValue, itemIndex) => this.setSelectedTeam(itemValue)}>
                    <Picker.Item label = "" value = "Select your team"></Picker.Item>
                    <Picker.Item label = "Support" value = "Support" onPress = {this.close} ></Picker.Item>
                    <Picker.Item label = "Fullstack" value = "Fullstack"></Picker.Item>
                    <Picker.Item label = "DevOps" value = "Devops"></Picker.Item>
                  </Picker>
                  <View style = {styles.saveButtonContainer}>
                    <TouchableOpacity 
                      onPress =  {this.close}
                      style = {{borderWidth: 0, width: PhoneWidth * 0.25, height: PhoneHeight * 0.1, alignItems: 'center'}}>
                      <Text style = {{fontSize: responsiveSize(20)}}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <View style = {styles.submissionContainer}>
                <Text style = {{fontSize: responsiveSize(20), margin: responsiveSize(10)}}>Support Team</Text>
                <View style = {{borderBottomWidth: 1, width: PhoneWidth * 0.5}}></View>
                <Text style = {{fontSize: responsiveSize(12), margin: responsiveSize(10)}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Text>
              </View>
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Create Submission')}
                style = {styles.plusIconButton}>
                <Image
                      style = {{width: responsiveSize(20), height: responsiveSize(20)}}
                      source = {require('../../../images/plus.png')}/>
              </TouchableOpacity>
            </SafeAreaView>
        );
    }
} 
export default Main;