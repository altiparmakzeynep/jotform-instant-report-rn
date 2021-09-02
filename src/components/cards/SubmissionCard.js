
import React from "react";
import styles from "../pages/main/styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { responsiveSize } from "../config/env";

const SubmissionCard = ({item, action, filter, color}) => {
    return( 
        <View style = {styles.submissionContainer}> 
            <View style = {[styles.deneme, {backgroundColor:color}]}></View>
            <Text style = {styles.dateText}>{item.created_at.substring(0,10)}</Text>
            <Text onPress = {filter} style = {styles.teamsHeaderText}>{item?.answers?.[5]?.answer} Team</Text>
            <Text numberOfLines = {4} style = {styles.submissionsText}>{item?.answers?.[4]?.answer}</Text> 
            <View style = {styles.readIconContainer}>
                <TouchableOpacity onPress = {action}  style = {styles.readIconButton}>
                    <Image style = {{alignSelf: 'center', width: responsiveSize(10), height: responsiveSize(10)}} source = {require('../../images/readMore.png')} ></Image>
                </TouchableOpacity>
            </View>
        </View> 
    ) 
}
export default SubmissionCard;