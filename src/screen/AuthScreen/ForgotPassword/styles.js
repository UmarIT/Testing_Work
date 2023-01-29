import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util/index';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flexGrow: 1,
      // backgroundColor: theme.color.appBackground,
    },

    header: {
      flex: 1,
      backgroundColor: '#454545',
    },
    contentContainerStyle: {
      marginHorizontal: wp(8),
    },
    inputStyles: {
      color: '#fff',
    },
    bgStatusBar: '#242627',
    inputStyle: {
      color: theme.color.textBlack,
    },
    loginContainer: {
      backgroundColor: theme.color.appBackground,
      width: wp(82),
      height: hp(7),
      marginTop: hp(9),
      borderRadius: theme.borders.radius2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginText: {
      color: '#000',
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    imageView: {
      justifyContent: 'center',
    },
    forgotView: {
      alignItems: 'flex-end',

      alignSelf: 'flex-end',
      marginTop: hp(-3),
    },

    loginContainer: {
      backgroundColor: '#fff',
      width: wp(82),
      height: hp(6),
      marginTop: hp(5),
      borderRadius: theme.borders.radius3,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    loginText: {
      color: '#000',
      fontSize: theme.size.small,
      // fontFamily: ,
      fontFamily: 'Satoshi-Bold',
    },
  });
  return styles;
};
export default createStyles;
