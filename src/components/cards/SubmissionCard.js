import React, { Component } from "react";
import styles from "../pages/main/styles";
import { fetchSubmissions } from '../../actions/action';
import { connect } from 'react-redux';
import { View, Text, FlatList } from "react-native";
import { PhoneHeight } from "../config/env";
class SubmissionCard extends Component{
    constructor(props){
        super(props)
    }
    submissionsRenderItem = ({item}) => {
        return(
            <View style = {styles.submissionContainer}> 
                <Text style = {styles.teamsHeaderText}>{item.answers[5].answer}</Text>
                {item.answers[4].answer.length >= 140 ?  
                    <Text style = {styles.submissionsText}>{item.answers[4].answer.substring(0,140)}...
                        <Text style = {styles.contuniueText}>read more</Text>
                    </Text> 
                    : 
                    <Text style = {styles.submissionsText}>{item.answers[4].answer}</Text> }
            </View> 
        )
    }
    render(){
        return(
            <View style = {{height: PhoneHeight * 0.7}}>
                 <FlatList
                    showsVerticalScrollIndicator = {false}
                    data = {this.props.submissions}
                    renderItem = {this.submissionsRenderItem}
                    keyExtractor={item => item.id}/>
            </View>  
        
        )
    }
}
const mapStateToProps = (state) => {
    const { submissions } = state.mainReducer;
    return {
      submissions,
    }
  }
  export default connect(
    mapStateToProps,
    {
      fetchSubmissions
    }
  )(SubmissionCard)
  