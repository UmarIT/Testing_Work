import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../util';

const createStyles = theme => {
  const styles = StyleSheet.create({
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(2),
    },
    socialIcons: {
      backgroundColor: theme.color.textBlack,
      // color: '#fff',
    },
    appleIcon: {
      alignSelf: 'center',
      width: wp(39),
      height: hp(7),
      borderRadius: hp(2),
    },
    iconSize: hp(2),
    deleteModal: {
      padding: hp(2),
      borderRadius: theme.borders.radius3,
      backgroundColor: theme.color.appBackground,
    },
    MapModal: {
      borderRadius: hp(4),
    },
    centerAlign: {
      alignItems: 'center',
    },
    warningText: {
      marginVertical: hp(2),
      fontSize: theme.size.medium,
      fontFamily: theme.family.bold,
      textAlign: 'center',
    },
    backBtn: {
      zIndex: 100,
      top: hp(7),
      left: wp(6),
    },
    map: {
      width: wp(90),
      height: hp(90),
      zIndex: -1,
    },
    mapScreen: {
      position: 'absolute',
      bottom: hp(0),
      width: wp(100),
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
    },
    mapView: {
      flex: 1,
      position: 'absolute',
      height: hp(85),
      width: wp(50),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
    },
    addBtn: {
      backgroundColor: theme.color.buttonBackground,
      width: wp(90),
      height: hp(6),
      justifyContent: 'center',
      alignItems: 'center',
      // alignSelf: 'center',
      // position: 'absolute',
    },
    addText: {
      color: theme.color.white,
      fontFamily: theme.family.bold,
    },
    addBtnLocation: {
      backgroundColor: theme.color.buttonBackground,
      width: wp(50),
      height: hp(6),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: theme.borders.radius2,

      // position: 'absolute',
    },
    addTextLocation: {
      color: theme.color.white,
      fontFamily: theme.family.bold,
    },
    locationView: {
      flexDirection: 'row',
      width: wp(83),
      height: hp(7),
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',

      borderColor: theme.color.inputBorder,
      borderRadius: theme.borders.radius2,
      paddingLeft: wp(2),
      paddingRight: wp(3),
      marginBottom: hp(2.5),
      backgroundColor: theme.color.secondaryColor,
    },
    locationError: {
      color: 'red',
      fontSize: theme.size.xSmall,
      marginTop: hp(-1.9),
      marginBottom: hp(0.5),
      marginLeft: wp(1.8),
    },
    inputHeaderText: {
      marginLeft: wp(2),
      marginBottom: hp(1),
      fontFamily: theme.family.medium,
      fontSize: theme.size.small,
      marginTop: hp(-1),
    },
    locationText: {
      width: wp(73),
      marginLeft: wp(1),

      // backgroundColor: 'red',
    },
  });
  return styles;
};
export default createStyles;
