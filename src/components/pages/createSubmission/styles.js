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
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      flexDirection: 'row'
    },
    headerTextContainer: {
      borderWidth: 0,
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    arrowButtonContainer: {
      borderWidth: 0, 
      justifyContent: 'center',
      width: PhoneWidth * 0.25, 
      height: PhoneHeight * 0.1,
    },
    inputsContainer: {
      borderWidth: 0,
      backgroundColor: '#fff',
      width: PhoneWidth,
      height: PhoneHeight ,
      alignItems: 'center',
    },
    teamContainer: {
      borderRadius: 12,
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.1,
      marginTop: PhoneHeight * 0.1,
      backgroundColor: '#fbca6f',
      flexDirection: 'row',
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
      width: PhoneWidth,
      height: PhoneHeight * 0.4,
      borderWidth: 1,
      marginTop: PhoneHeight * 0.13,
      backgroundColor: 'pink'
    },
    textContainer: {
      borderWidth: 0,
      justifyContent: 'center',
      borderRadius: 12,
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.4,
      marginTop: PhoneHeight * 0.05,
      backgroundColor: '#fbca6f'
    },
    textInputContainer: {
      alignSelf: 'center',
      width: PhoneWidth * 0.85, 
      height: PhoneHeight * 0.3, 
      borderWidth: 0,
      marginTop: responsiveSize(10), 
      borderRadius: 12,
      backgroundColor: '#fddb9c',
      padding: responsiveSize(10),
    },
    submitButtonContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      marginTop: PhoneHeight * 0.05,
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitButton: {
      borderWidth: 0,
      borderRadius: 12,
      height: PhoneHeight * 0.075,
      width: PhoneWidth * 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fbca6f'
    },
    modalContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.4,
      borderWidth: 0,
      marginTop: PhoneHeight * 0.13,
      backgroundColor: '#fff'
    },
  });