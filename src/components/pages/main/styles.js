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
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    arrowButtonContainer: {
      borderWidth: 0, 
      justifyContent: 'center',
      width: PhoneWidth * 0.25, 
      height: PhoneHeight * 0.1,
    },
    pickerContainer: {
      borderWidth: 0,
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    picker: {
      borderWidth: 0,
      width: PhoneWidth * 0.5, 
      height: PhoneHeight * 0.05,
      marginLeft: PhoneWidth * 0.25
    },
    modalContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.4,
      borderWidth: 0,
      marginTop: PhoneHeight * 0.13,
      backgroundColor: '#fff'
    },
    saveButtonContainer: {
      borderWidth: 0,
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      marginRight: PhoneWidth * 0.7,
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    submissionContainer: {
      marginTop: PhoneHeight * 0.1,
      borderWidth: 0,
      borderRadius: 24,
      backgroundColor: '#fbca6f',
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.4
    },
    modal: {
      borderWidth: 0,
      backgroundColor: 'red',
      width: PhoneWidth, 
      height: PhoneHeight * 0.3, 
      marginTop: PhoneHeight * 0.2
    },
    plusIconButton: {
      borderWidth: 1,
      marginLeft: PhoneWidth * 0.7,
      marginTop: PhoneHeight * 0.25,
      borderRadius: 200,
      borderColor: '#fbca6f',
      alignItems: 'center',
      justifyContent: 'center',
      width: responsiveSize(50),
      height: responsiveSize(50),
    }
  });
  