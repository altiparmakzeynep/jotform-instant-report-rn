import { StyleSheet } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../../components/config/env';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FE',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: PhoneHeight * 0.03,
    width: PhoneWidth,
    height: PhoneHeight * 0.1,
    flexDirection: 'row'
  },
  arrowButtonContainer: {
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
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#d1d1d8',
    alignSelf: 'flex-start',
    marginTop: PhoneHeight * 0.015,
    backgroundColor: '#f4f4f4',
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.07,
    justifyContent: 'center',
    marginLeft: PhoneWidth * 0.05
  },
  bottomHeaderText: {
    fontSize: responsiveSize(20),
    fontWeight: '500',
    marginLeft: PhoneWidth * 0.01,
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
    marginLeft: PhoneWidth * 0.05,
  },
  dropdownText: {
    fontSize: responsiveSize(17),
    fontWeight: '400',
    color: '#55647E',
    fontFamily: 'circular-std-book'
  },
  downArrowImg: {
    width: responsiveSize(12),
    height: responsiveSize(12),
    position: 'absolute',
    marginLeft: PhoneWidth * 0.75
  },
  inputContainer: {
    backgroundColor: '#fff',
    width: PhoneWidth,
    height: PhoneHeight ,
    alignItems: 'center',
  },
  saveButtonContainer: {
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
    width: PhoneWidth,
    height: PhoneHeight * 0.1,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: responsiveSize(22),
    marginLeft: PhoneWidth * 0.05,
    fontWeight: '500',
    color: '#55647e',
    fontFamily: 'circular-std-medium'
  },
  textContainer: {
    width: PhoneWidth,
    height: PhoneHeight * 0.5,
  },
  textInputContainer: {
    alignSelf: 'center',
    width: PhoneWidth * 0.9, 
    height: PhoneHeight * 0.4, 
    borderWidth: 1,
    borderColor: '#d1d1d8',
    borderRadius: 3,
    padding: responsiveSize(10),
  },
  submitButtonContainer: {
    width: PhoneWidth,
    position: 'absolute',
    height: PhoneHeight * 0.1,
    marginTop: PhoneHeight * 0.68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    borderRadius: 5,
    height: PhoneHeight * 0.075,
    width: PhoneWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01bd6f'
  },
  submitText: {
    fontSize: responsiveSize(20), 
    color: 'white', 
    fontWeight: '900',
    fontFamily: 'circular-std-black'
  },
  homeText: {
    color: '#0A1551',
    fontWeight: '700',
    marginTop: 19,
    fontSize: responsiveSize(24),
    fontFamily: 'circular-std-bold'
  },
  pickerHeaderText: {
    fontSize: responsiveSize(16),
    fontWeight: '500',
    fontFamily: 'circular-std-medium',
    alignSelf: 'flex-start', 
    marginLeft: PhoneWidth * 0.05,
    marginTop: PhoneHeight * 0.03
  }
});