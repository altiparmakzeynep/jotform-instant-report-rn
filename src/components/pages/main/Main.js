import React, { Component } from 'react';
import { 
  SafeAreaView, 
  Text, 
  View,   
  Image, 
  TouchableOpacity, 
  FlatList,
  ActivityIndicator
 } from 'react-native';
import styles from '../../pages/main/styles';
import { fetchTeamCategories, fetchSubmissions } from '../../../actions/action';
import { connect } from 'react-redux';
import SubmissionCard from '../../cards/SubmissionCard';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../../config/env';

class Main extends Component {
  componentDidMount(){
    this.props.fetchTeamCategories();
    this.props.fetchSubmissions();
  }
  constructor(props) {
    super(props); 
    this.state = {
      selectedTeam: [],
      allButton: true,
      headerText: 'All',
      color: ''
    }   
  } 
  searchTeams = (search) => {
    this.setState({ allButton:false })
    return(
      this.props.submissions.map((item) => {
        item.answers[5].answer === search.item || item.answers[5].answer === search ? 
        this.setState(prevState => ({
          selectedTeam: [...prevState.selectedTeam, item],
          headerText: search.item,
          color: search.color
        }))
          : this.state.selectedTeam.splice(0,100)
      }  
     )  
    ) 
  } 
  submissionsRenderItem = ({item}) => {
    const foundItem = this.props.teamCategoriesValue?.find(teamCategory => teamCategory.title === item.answers[5].answer)
    return(
        <SubmissionCard item = {item}
                        color = {this.state.allButton ? foundItem?.color : this.state.color}
                        action = {() => this.props.navigation.navigate('readMore',{submission:item}) } 
                        filter = {() => this.searchTeams(item.answers[5].answer)}/>
    )
  }
  teamCategoriesRenderItem = ({item}) => {
    return(
      <TouchableOpacity 
        onPress = {() => this.searchTeams({item:item.title, color:item.color})}
        style = {[styles.bottomTeamsButton, {backgroundColor: item.color}]}>
       <Text style = {styles.teamsNameText}>{item.title}</Text>
      </TouchableOpacity> 
    ) 
  } 
    render(){  
        return (
            <SafeAreaView style = {styles.container}>
              <Text style = {{fontSize: responsiveSize(23), marginTop: PhoneHeight * 0.05,}}>{this.state.headerText}</Text>
              <View style = {styles.headerContainer}>
                <TouchableOpacity 
                  onPress = {() => this.setState({allButton:true, selectedTeam:[], headerText: "All"})}
                  style = {styles.allButton}>
                  <Text style = {styles.allText}>All</Text>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    data = {this.props.teamCategoriesValue}
                    renderItem = {this.teamCategoriesRenderItem}
                    keyExtractor={item => item.id}/>
              </View>  
              <View> 
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>What is new?</Text>
              </View>
                <FlatList
                  ListFooterComponent = {<View style = {{height:150}}/>}
                  showsVerticalScrollIndicator = {false}
                  data = {this.state.allButton === true ? this.props.submissions : this.state.selectedTeam}
                  renderItem = {this.submissionsRenderItem}
                  keyExtractor={item => item.id}/>
              </View>
              <View style = {styles.plusButtonContainer}>
                <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('createSubmission')}
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
  const { teamCategoriesValue, submissions, tempArray } = state.mainReducer;
  return {
    teamCategoriesValue,
    submissions, 
    tempArray
  }
}
export default connect(
  mapStateToProps,
  {
    fetchTeamCategories,
    fetchSubmissions, 
  }
)(Main)
