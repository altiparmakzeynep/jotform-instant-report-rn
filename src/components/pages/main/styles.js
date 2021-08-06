import { StyleSheet } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../../components/config/env';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerContainer: {
      alignItems: 'center',
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      backgroundColor: '#fff',
    },
    pickerContainer: {
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    pickerText: {
      fontSize: responsiveSize(18)
    },
    arrowImg: {
      width: responsiveSize(9), 
      height: responsiveSize(9),
      marginTop: responsiveSize(2), 
      marginLeft: responsiveSize(2)
    },
    modalContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.4,
      marginTop: PhoneHeight * 0.13,
      backgroundColor: '#fff'
    },
    saveButtonContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      marginRight: PhoneWidth * 0.7,
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    saveButton: { 
      width: PhoneWidth * 0.25, 
      height: PhoneHeight * 0.1, 
      alignItems: 'center'
    },
    submissionContainer: {
      borderRadius: 20,
      marginVertical: responsiveSize(5),
      backgroundColor: '#fbca6f',
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.4,
      alignSelf: 'center'
    },
    plusButtonContainer: {
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.1,
      justifyContent: 'center',
      marginTop: PhoneHeight * 0.85,
      position: 'absolute',
      alignItems: 'flex-start',
      alignSelf: 'flex-end'
    },
    plusIconButton: {
      borderWidth: 2,
      position: "absolute",
      marginBottom: PhoneHeight * 0.1,
      borderRadius: 200,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      width: responsiveSize(50),
      height: responsiveSize(50),
    },
    plusIcon: {
      width: responsiveSize(20), 
      height: responsiveSize(20)
    }
  });
  