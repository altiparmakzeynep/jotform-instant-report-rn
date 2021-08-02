import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../config/env'
import { Picker } from '@react-native-picker/picker';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }   
}
    displayModal =() => {
      this.setState({modalVisible: true
      })
    }
    render(){
        return (
            <SafeAreaView style = {styles.container}>
              <View style = {styles.headerContainer}>
                  <TouchableOpacity style = {styles.arrowButtonContainer}>
                    <Image
                      style = {{width: responsiveSize(15), height: responsiveSize(15), marginLeft: responsiveSize(10)}}
                      source = {require('../../../src/images/arrow.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress = {this.displayModal}
                    style = {styles.pickerContainer}>
                    <Text style = {{fontSize: responsiveSize(18)}}>Select your team</Text>
                    <Image 
                      style = {{width: responsiveSize(9), height: responsiveSize(9), marginTop: responsiveSize(2), marginLeft: responsiveSize(2)}}
                      source = {require('../../images/downArrow.png')}></Image>
                  </TouchableOpacity>
              </View>
              <Modal
                  animationType = "slide"
                  transparent = {true}
                  visible = {this.state.modalVisible}
                  onRequestClose = {() => {
                  this.setModalVisible(!modalVisible);
                  }}>
                  <View style = {styles.modalContainer}>
                  <Picker mode = "dropdown">
                    <Picker.Item label = "Support"></Picker.Item>
                    <Picker.Item label = "Fullstack"></Picker.Item>
                    <Picker.Item label = "DevOps"></Picker.Item>
                  </Picker>
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
                      source = {require('../../../src/images/plus.png')}/>
              </TouchableOpacity>
            </SafeAreaView>
        );
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
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  arrowButtonContainer: {
    borderWidth: 0, 
    justifyContent: 'center',
    width: PhoneWidth * 0.25, 
    height: PhoneHeight * 0.1,
  },
  pickerContainer: {
    borderWidth: 0,
    width: PhoneWidth * 0.5,
    height: PhoneHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  picker: {
    borderWidth: 1,
    width: PhoneWidth * 0.5, 
    height: PhoneHeight * 0.05,
    marginLeft: PhoneWidth * 0.25
  },
  modalContainer: {
    width: PhoneWidth,
    height: PhoneHeight * 0.3,
    borderWidth: 0,
    marginTop: PhoneHeight * 0.13
  },
  submissionContainer: {
    marginTop: PhoneHeight * 0.1,
    borderWidth: 0,
    borderRadius: 24,
    backgroundColor: '#fbca6f',
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.4
  },
  modal: {
    borderWidth: 0,
    backgroundColor: 'red',
    width: PhoneWidth, 
    height: PhoneHeight * 0.3, 
    marginTop: PhoneHeight * 0.2
  },
  plusIconButton: {
    borderWidth: 1,
    marginLeft: PhoneWidth * 0.7,
    marginTop: PhoneHeight * 0.25,
    borderRadius: 200,
    borderColor: '#fbca6f',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveSize(50),
    height: responsiveSize(50),
  }
});
export default Main;