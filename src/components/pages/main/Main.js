import React, { Component } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  FlatList
 } from 'react-native';
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
    }   
  }
  searchTeams = (search) => {
    console.log("clicked", search);
    this.props.submissions.map((item) => 
      item.answers[5].answer === search.item ? console.log("selected team's submission/s", item) : 0)    
  } 
  teamCategoriesRenderItem = ({item}) => {
    return(
      <TouchableOpacity 
        onPress = {() => this.searchTeams({item})}
        style = {styles.bottomTeamsButton}>
       <Text style = {styles.teamsNameText}>{item}</Text>
     </TouchableOpacity> 
    )
  }
    render(){  
        return (
            <SafeAreaView style = {styles.container}>
              <View style = {styles.headerContainer}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    data = {this.props.teamCategoriesValue}
                    renderItem = {this.teamCategoriesRenderItem}
                    keyExtractor={item => item.id}/>

              </View>  
              <ScrollView showsVerticalScrollIndicator = {false}> 
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>What is new?</Text>
                </View>
                {this.props.submissions.map((item) => {
                  return(
                    <View style = {styles.submissionContainer}>
                      <Text style = {styles.teamsHeaderText}>{item.answers[5].answer}</Text>
                      <Text style = {styles.submissionsText}>{item.answers[4].answer}</Text>
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
  const { teamCategoriesValue, submissions } = state.mainReducer;
  return {
    teamCategoriesValue,
    submissions,
    
  }
}
export default connect(
  mapStateToProps,
  {
    fetchTeamCategories,
    fetchSubmissions
  }
)(Main)