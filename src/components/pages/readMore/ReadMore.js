
import React, {Component} from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import styles from '../readMore/styles';



class ReadMore extends Component{
    render(){
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
                    <Text style = {{fontSize:25, marginTop: 20}}>TAKIMTAKIMTAKIM</Text>
                </View>
                <ScrollView style = {styles.textContainer}>
                    <Text style = {styles.textStyle}>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default ReadMore;