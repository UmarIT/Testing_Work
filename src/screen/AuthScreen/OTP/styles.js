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
    errorText: {
      color: '#fff',
      marginLeft: wp(1.8),
      marginTop: hp(0.7),
      marginBottom: hp(1),
      fontSize: theme.size.xSmall,
      fontFamily: theme.family.bold,
    },
    codeField: {
      marginTop: hp(5),
    },
    resend: {
      alignSelf: 'flex-end',
      //   marginRight: wp(8),
      // marginTop: hp(2),
      borderBottomWidth: hp(0.1),
      borderBottomColor: theme.color.white,
      // fontFamily: theme.family.bold,
    },
    resendOutline: {
      fontFamily: theme.family.bold,
      color: '#fff',
      borderBottomWidth: hp(0.1),
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
