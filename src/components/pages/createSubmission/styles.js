import { StyleSheet } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../../components/config/env';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerContainer: {
      borderWidth: 0,
      marginTop: PhoneHeight * 0.03,
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      flexDirection: 'row'
    },
    arrowButtonContainer: {
      borderWidth: 0, 
      alignItems: 'center',
      justifyContent: 'center',
      width: PhoneWidth * 0.15, 
      height: PhoneHeight * 0.1,
    },
    arrowImg: {
      width: responsiveSize(15), 
      height: responsiveSize(15), 
    },
    bottomHeader: {
      borderWidth: 0,
      borderRadius: 3,
      marginTop: PhoneHeight * 0.015,
      backgroundColor: '#dadada',
      width: PhoneWidth * 0.8,
      height: PhoneHeight * 0.07,
      justifyContent: 'center',
    },
    bottomHeaderText: {
      fontSize: responsiveSize(20),
      fontWeight: '500',
      marginLeft: PhoneWidth * 0.05,
      color: '#646464'
    },
    bottomDropdown: {
      borderRadius: 1,
      width: PhoneWidth * 0.54,
      height: PhoneHeight * 0.06,
      marginTop: PhoneHeight * 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: '#fff',
      marginLeft: PhoneWidth * 0.25
    },
    dropdownText: {
      fontSize: responsiveSize(20),
      fontWeight: '300',
      color: '#8d8d8d',
      marginLeft: PhoneWidth * 0.03
    },
    downArrowImg: {
      width: responsiveSize(10),
      height: responsiveSize(10),
      position: 'absolute',
      marginLeft: PhoneWidth * 0.48
    },
    inputContainer: {
      borderWidth: 0,
      backgroundColor: '#fff',
      width: PhoneWidth,
      height: PhoneHeight ,
      alignItems: 'center',
    },
    saveButtonContainer: {
      borderWidth: 0,
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      marginRight: PhoneWidth * 0.7,
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    modalContainer: {
      borderBottomWidth: 1,
      borderColor: '#dadada',
      width: PhoneWidth,
      height: PhoneHeight * 0.4,
      marginTop: PhoneHeight * 0.13,
      backgroundColor: '#fff'
    },
    titleContainer: {
      borderWidth: 0,
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
    textContainer: {
      borderWidth: 0,
      width: PhoneWidth,
      height: PhoneHeight * 0.5,
    },
    textInputContainer: {
      alignSelf: 'center',
      width: PhoneWidth * 0.9, 
      height: PhoneHeight * 0.5, 
      borderWidth: 1,
      borderColor: '#dadada',
      borderRadius: 3,
      padding: responsiveSize(10),
    },
    submitButtonContainer: {
      borderWidth: 0,
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      marginTop: PhoneHeight * 0.05,
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitButton: {
      borderRadius: 5,
      height: PhoneHeight * 0.075,
      width: PhoneWidth * 0.4,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#01bd6f'
    },
    submitText: {
      fontSize: responsiveSize(20), 
      color: 'white', 
      fontWeight: '600'
    }
});