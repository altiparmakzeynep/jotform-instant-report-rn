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
  width: PhoneWidth, 
  height: PhoneHeight * 0.1,
  backgroundColor: '#F6F6FF', 
  flexDirection: 'row'
  },
  allButton: {
    borderColor: '#434343',
    alignItems: 'center',
    justifyContent: 'center',
    width: PhoneWidth * 0.2,
    height: PhoneHeight * 0.075,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    flexDirection: 'row'
  },
  allText: {
    color: '#0A1551',
    fontWeight: '500',
    marginTop: 20,
    fontSize: responsiveSize(24),
    fontFamily: 'circular-std-medium'
  },
  bottomTeamsButton: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginTop: 8,
    width: PhoneWidth * 0.4,
    height: PhoneHeight * 0.075
  },
  teamsNameText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: responsiveSize(17),
    fontFamily: 'circular-std-medium'
  },
  submissionContainer: {
    borderRadius: 5,
    marginVertical: responsiveSize(10),
    backgroundColor: '#F6F6FF',
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.25,
    alignSelf: 'center',
  },
  deneme: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: 'pink',
    width: PhoneWidth * 0.03,
    height: PhoneHeight * 0.25,
  },
  dateText: {
    position: 'absolute', 
    marginLeft: responsiveSize(16), 
    marginTop: PhoneHeight * 0.07,
    fontSize: responsiveSize(12),
    color: '#6F76A7',
    fontWeight: '400',
    fontFamily: 'circular-std-book'
  },
  teamsHeaderText: {
    fontSize: responsiveSize(18),
    color: '#0a1551',
    fontFamily: 'circular-std-bold',
    fontWeight: '700',
    position: "absolute",
    margin: responsiveSize(15)
  },
  submissionsText: {
    fontSize: responsiveSize(13),
    color: '#6F76A7',
    fontFamily: 'circular-std-book',
    fontWeight: '400',
    position: "absolute",
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
    fontWeight: '700',
    color: '#0a1551',
    fontFamily: 'circular-std-bold'
  },
  noSubmissionText: {
    alignSelf: 'center',
    fontSize: responsiveSize(20)
  },
  plusButtonContainer: {
    width: PhoneWidth * 0.2,
    height: PhoneHeight * 0.1,
    justifyContent: 'center',
    marginTop: PhoneHeight * 0.88,
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
    width: responsiveSize(15), 
    height: responsiveSize(15)
  },
  readIconContainer: {
    width: responsiveSize(30),
    height: responsiveSize(30),
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: PhoneHeight * 0.2,
  },
  readIconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveSize(30),
    height: responsiveSize(30),
    position: 'absolute'
  },
  line: {
    height: PhoneHeight * 0.075, 
    borderWidth: 1, 
    borderColor: '#6F76A7', 
    borderRadius: 1,
    marginTop: 20, 
    marginLeft: 20
  }
});
  