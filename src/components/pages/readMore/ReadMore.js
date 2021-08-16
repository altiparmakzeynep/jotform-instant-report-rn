
import React, {Component} from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import styles from '../readMore/styles';
import { connect } from 'react-redux';
import { readSubmission } from '../../../actions/action';

class ReadMore extends Component{
    componentDidMount(){
        this.props.readSubmission();
    }
    constructor(props) {
        super(props);   
      } 
    render(){
        console.log("hicbir sey", this.props.selectedSubmission);
        return(
            <SafeAreaView style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('submissions')}
                        style = {styles.arrowButtonContainer}>
                        <Image
                           style = {styles.arrowImg}
                           source = {require('../../../images/arrow.png')}/>
                    </TouchableOpacity>
                    <Text style = {styles.headerText}>{this.props.selectedSubmission.answers[5].answer} Team</Text>
                </View>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>Latest Update</Text>
                </View>
                <ScrollView style = {styles.textContainer}>
                    <Text style = {styles.submissionText}>{this.props.selectedSubmission.answers[4].answer}</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = (state) => {
    const { selectedSubmission } = state.mainReducer;
    return {
      selectedSubmission
    }
  }
  export default connect(
    mapStateToProps,
    {
      readSubmission
    }
  )(ReadMore)
  