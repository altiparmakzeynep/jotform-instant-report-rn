import { StyleSheet } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../../components/config/env';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e5e5e5',
      alignItems: 'center',
    },
    headerContainer: {
        borderWidth: 2,
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
      textContainer: {
        borderWidth: 1, 
        width: PhoneWidth,
        height: PhoneHeight * 0.75,
      },
      textStyle: {
        fontSize: responsiveSize(15),
        margin: 10
      }
});