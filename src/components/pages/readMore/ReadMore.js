
import React, {Component} from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import styles from '../readMore/styles';

class ReadMore extends Component{
    constructor(props) {
        super(props);   
      } 
    render(){
        const { submission } = this.props.route.params;
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
                    <Text style = {styles.headerText}>{submission.answers[5].answer} Team</Text>
                    
                </View>
               <View style = {{backgroundColor: '#fff'}}>
               <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>Latest Update</Text>
                    <Text style = {styles.dateText}>{submission.created_at.substring(0,10)}</Text>

                </View>
                
                <ScrollView style = {styles.textContainer}>
                    <Text style = {styles.submissionText}>{submission.answers[4].answer}</Text>
                </ScrollView>
               </View>
            </SafeAreaView>
        )
    }
}
export default ReadMore;