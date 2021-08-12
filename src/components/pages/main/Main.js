import React, { Component } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  FlatList
 } from 'react-native';
import styles from '../../pages/main/styles';
import { fetchTeamCategories, fetchSubmissions } from '../../../actions/action';
import { connect } from 'react-redux';
import SubmissionCard from '../../cards/SubmissionCard';
import { PhoneHeight } from '../../config/env';

class Main extends Component {
  componentDidMount(){
    this.props.fetchTeamCategories();
    this.props.fetchSubmissions();
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: [],
      allButton: false
    }   
  }
  searchTeams = (search) => {
    console.log("clicked", search);
    this.setState({ allButton:false })
    return(
      this.props.submissions.map((item) => {
        item.answers[5].answer === search.item ? 
        this.setState(prevState => ({
          selectedTeam: [...prevState.selectedTeam, item]
        }))
            : this.state.selectedTeam.splice(0,100)
      }
     )  
    )
      
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
  renderContent = ({item}) => {
    const teamTitle = item.answers[5].answer;
    return(
      <View style = {styles.submissionContainer}>
      <Text onPress =  {() => this.searchTeams({teamTitle})} style = {styles.teamsHeaderText}>{item.answers[5].answer}</Text>
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
        return (
            <SafeAreaView style = {styles.container}>
              <View style = {styles.headerContainer}>
                <TouchableOpacity 
                  onPress = {() => this.setState({allButton:true})}
                  style = {styles.allButton}>
                  <Text style = {styles.teamsNameText}>All</Text>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    data = {this.props.teamCategoriesValue}
                    renderItem = {this.teamCategoriesRenderItem}
                    keyExtractor={item => item.id}/>

              </View>  
              <View > 
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>What is new?</Text>
                </View>
                {this.state.selectedTeam == 0 || this.state.allButton === true ? <SubmissionCard/> 
                : 
                <View style = {{height: PhoneHeight * 0.7}}>
                  <FlatList data = {this.state.selectedTeam}
                          renderItem = {this.renderContent}/>
                </View>
                }
           
              </View>
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
  const { teamCategoriesValue, submissions, optionsArray } = state.mainReducer;
  return {
    teamCategoriesValue,
    submissions,
    optionsArray
    
  }
}
export default connect(
  mapStateToProps,
  {
    fetchTeamCategories,
    fetchSubmissions
  }
)(Main)
