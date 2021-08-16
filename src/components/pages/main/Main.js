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
import { fetchTeamCategories, fetchSubmissions, readSubmission } from '../../../actions/action';
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
      allButton: true
    }   
  } 
  searchTeams = (search) => {
    console.log("clicked: ", search);
    this.setState({ allButton:false })
    return(
      this.props.submissions.map((item) => {
        item.answers[5].answer === search.item || item.answers[5].answer === search ? 
        this.setState(prevState => ({
          selectedTeam: [...prevState.selectedTeam, item] 
        }))
          : this.state.selectedTeam.splice(0,100)
      } 
     )  
    ) 
  } 
  submissionsRenderItem = ({item}) => {
    return(
        <SubmissionCard item = {item} 
                        action = {() => this.props.readSubmission(item.id) & this.props.navigation.navigate('readMore') } 
                        filter = {() => this.searchTeams(item.answers[5].answer)}
                        />
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
              <View> 
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>What is new?</Text>
              </View>

              {this.state.allButton === true ?
              <View style = {{height: PhoneHeight * 0.75}}>
                  <FlatList
                      showsVerticalScrollIndicator = {false}
                      data = {this.props.submissions}
                      renderItem = {this.submissionsRenderItem}
                      keyExtractor={item => item.id}/>
              </View>  : console.log("null")}

              {this.state.selectedTeam == 0 ? <Text style = {styles.noSubmissionText}>no submission here</Text> : 
                <FlatList
                  showsVerticalScrollIndicator = {false}
                  data = {this.state.selectedTeam}
                  renderItem = {this.submissionsRenderItem}
                  keyExtractor={item => item.id}/>
              }
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
  const { teamCategoriesValue, submissions } = state.mainReducer;
  return {
    teamCategoriesValue,
    submissions
  }
}
export default connect(
  mapStateToProps,
  {
    fetchTeamCategories,
    fetchSubmissions, 
    readSubmission
  }
)(Main)
