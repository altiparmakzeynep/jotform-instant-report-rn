import React, { Component } from "react";
import styles from "../pages/main/styles";
import { View, Text } from "react-native";

const SubmissionCard = ({item}) => {
    return(
        <View style = {styles.submissionContainer}> 
            <Text style = {styles.teamsHeaderText}>{item.answers[5].answer}</Text>
            {item.answers[4].answer.length >= 140 ?  
                <Text style = {styles.submissionsText}>{item.answers[4].answer.substring(0,140)}...
                    <Text style = {styles.continueText}>read more</Text>
                </Text> 
                : 
                <Text style = {styles.submissionsText}>{item.answers[4].answer}</Text> }
        </View> 
    )
}
export default SubmissionCard;