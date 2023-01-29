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
    loginContain: {
      backgroundColor: 'transparent',
      width: wp(82),
      height: hp(7),
      // marginTop: hp(2),
      borderRadius: theme.borders.radius2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginText: {
      color: '#000',
      fontSize: theme.size.small,
      fontFamily: theme.family.semiBold,
    },
    Login: {
      color: '#fff',
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
    forgotText: {
      color: theme.color.buttonBackground,
      fontSize: hp(1.7),
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
    dotLine: {
      marginTop: hp(5),
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: theme.color.secondaryColor,
    },
    linearGradient: {
      width: wp(82),
      height: hp(6),
      marginTop: hp(3),
      borderRadius: theme.borders.radius3,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    buttonText: {
      color: '#fff',
      fontFamily: 'Satoshi-Bold',
    },
    orSignInStyle: {
      marginTop: hp(5),
      textAlign: 'center',
      color: theme.color.buttonBackground,
      fontFamily: theme.family.bold,
    },
    doNotHaveAccountView: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: hp(5),
      marginBottom: hp(3),
    },
    textAnAccount: {
      color: theme.color.textBlack,
    },
    signUp: {
      color: theme.color.buttonBackground,
      textDecorationLine: 'underline',
      fontFamily: theme.family.bold,
    },
  });
  return styles;
};
export default createStyles;
