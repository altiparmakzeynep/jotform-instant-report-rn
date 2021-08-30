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
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
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
  titleContainer: {
    width: PhoneWidth,
    height: PhoneHeight * 0.1,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: responsiveSize(22),
    marginLeft: PhoneWidth * 0.05,
    fontWeight: '500',
    color: '#0a1551'
  },
  headerText: {
    fontSize: responsiveSize(25),
    marginTop: responsiveSize(15),
    fontWeight: '700',
    color: '#0a1551'
  },
  submissionText: {
    fontSize: responsiveSize(17),
    color: '#6f76a7',
    margin: PhoneWidth * 0.05,
    fontWeight: '400'
  } ,
  dateText: {
    marginLeft: responsiveSize(16), 
    fontSize: responsiveSize(12),
    color: '#8085a8',
    fontWeight: '400'
  },
});