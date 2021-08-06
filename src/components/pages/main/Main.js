import React, { Component } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Modal,
  ScrollView
 } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../config/env'
import { Picker } from '@react-native-picker/picker';
import styles from '../../pages/main/styles';
import { fetchTeamCategories, fetchSubmissions } from '../../../actions/action';
import { connect } from 'react-redux';

class Main extends Component {
  componentDidMount(){
    this.props.fetchTeamCategories();
    this.props.fetchSubmissions();
  }
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedTeam: 'Select your team', 
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
                  <TouchableOpacity 
                    onPress = {this.displayModal}
                    style = {styles.pickerContainer}>
                    <Text style = {styles.pickerText}>{this.state.selectedTeam}</Text>
                    <Image 
                      style = {styles.arrowImg}
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
                          {this.props.teamCategoriesValue.map((item) => {
                            return(
                              <Picker.Item label = "" value = ""></Picker.Item> ,
                              <Picker.Item label = {item} value = {item}></Picker.Item> 
                            )
                          })}
                  </Picker>
                  <View style = {styles.saveButtonContainer}>
                    <TouchableOpacity 
                      onPress =  {this.close}
                      style = {styles.saveButton}>
                      <Text style = {{fontSize: responsiveSize(20)}}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal> 
              <ScrollView> 
                {this.props.submissions.map((item) => {
                  return(
                      <View style = {styles.submissionContainer}>
                        <Text style = {{fontSize: responsiveSize(20), margin: responsiveSize(10)}}>{item.answers[5].answer}</Text>
                        <View style = {{borderBottomWidth: 1, width: PhoneWidth * 0.5}}></View>
                        <Text style = {{fontSize: responsiveSize(12), margin: responsiveSize(10)}}>{item.answers[4].answer}</Text>
                      </View>                    
                  )
                })}
              </ScrollView>
              <View style = {styles.plusButtonContainer}>
                <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('Create Submission')}
                  style = {styles.plusIconButton}>
                  <Image
                        style = {styles.plusIcon}
                        source = {require('../../../images/plus.png')}/>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
        );
    }
} 
const mapStateToProps = (state) => {
  const { teamCategoriesValue, submissions } = state.reducer;
  return {
    teamCategoriesValue,
    submissions
  }
}
export default connect(
  mapStateToProps,
  {
    fetchTeamCategories,
    fetchSubmissions
  }
)(Main)