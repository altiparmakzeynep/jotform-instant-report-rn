import { StyleSheet } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../../components/config/env';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerContainer: {
      borderBottomWidth: 1,
      borderColor: '#eeeeee',
      justifyContent: 'center',
      marginTop: PhoneHeight * 0.02,
      width: PhoneWidth * 0.9, 
      height: PhoneHeight * 0.1,
      backgroundColor: '#fff', 
      flexDirection: 'row'
    },
    allButton: {
      borderColor: '#434343',
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.075,
      borderBottomRightRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: '#fff',
    },
    allText: {
      color: '#0a1551',
      fontWeight: '500',
      fontSize: responsiveSize(24)
    },
    bottomTeamsButton: {
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 4,
      width: PhoneWidth * 0.4,
      height: PhoneHeight * 0.075
    },
    teamsNameText: {
      color: '#fff',
      fontWeight: '500',
      fontSize: responsiveSize(17)
    },
    submissionContainer: {
      borderRadius: 5,
      borderWidth: 0,
      marginVertical: responsiveSize(10),
      backgroundColor: '#f4f4f4',
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.25,
      alignSelf: 'center',
    },
    deneme: {
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
      borderWidth: 0,
      backgroundColor: 'pink',
      width: PhoneWidth * 0.03,
      height: PhoneHeight * 0.25,
    },
    dateText: {
      position: 'absolute', 
      marginLeft: responsiveSize(15), 
      marginTop: PhoneHeight * 0.08,
      fontSize: responsiveSize(11),
      color: '#0a1551'
    },
    teamsHeaderText: {
      fontSize: responsiveSize(23),
      color: '#0a1551',
      fontWeight: '600',
      position: "absolute",
      margin: responsiveSize(15)
    },
    submissionsText: {
      fontSize: responsiveSize(15),
      color: '#000',
      fontWeight: '500',
      position: "absolute",
      // marginLeft: responsiveSize(15),
      // marginRight: responsiveSize(15),
      marginLeft: responsiveSize(15),
      marginRight: responsiveSize(25),
      marginTop: PhoneHeight * 0.11
    },
    continueText: {
      textDecorationLine: 'underline',  
      fontSize: responsiveSize(15),
      color: '#0a1551',
      fontWeight: '500',
    },
    titleContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      justifyContent: 'center'
    },
    titleText: {
      fontSize: responsiveSize(22),
      marginLeft: PhoneWidth * 0.05,
      fontWeight: '400',
      color: '#434343'
    },
    noSubmissionText: {
      alignSelf: 'center',
      fontSize: responsiveSize(20)
    },
    plusButtonContainer: {
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.1,
      justifyContent: 'center',
      marginTop: PhoneHeight * 0.85,
      position: 'absolute',
      alignSelf: 'flex-end',  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      
      elevation: 12,
    },
    plusIconButton: {
     
      backgroundColor: '#4d4f4e',
      borderWidth: 3,
      position: "absolute",
      marginBottom: PhoneHeight * 0.1,
      borderRadius: 200,
      borderColor: '#3f4140',
      alignItems: 'center',
      justifyContent: 'center',
      width: responsiveSize(55),
      height: responsiveSize(55),
    },
    plusIcon: {
      width: responsiveSize(10), 
      height: responsiveSize(10)
    },
    readIconContainer: {
      width: responsiveSize(30),
      height: responsiveSize(30),
      borderWidth: 0,
      position: 'absolute',
      alignSelf: 'flex-end',
      marginTop: PhoneHeight * 0.2,
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    readIconButton: {
      borderWidth: 0, 
      alignItems: 'center',
      justifyContent: 'center',
      width: responsiveSize(30),
      height: responsiveSize(30),
      position: 'absolute'
    }
  });
  