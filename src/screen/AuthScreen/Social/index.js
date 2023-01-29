import React, {useEffect, useState} from 'react';
import {
  Platform,
  TouchableOpacity,
  View,
  Text,
  Pressable,
  Linking,
  PermissionsAndroid,
  ToastAndroid,
  Alert,
} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';
// import {locationApis, social_Login} from '../../../endpoints';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import Button from '../../../components/CustomButton';
// // import jwt_decode from 'jwt-decode';

// import Snackbar from '../../../components/CustomSnackbar';
import {hp, wp} from '../../../util/index';
// import {usePostApiMutation} from '../../../services/service';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   setToken,
//   setUser,
//   setLatitude,
//   setLongitude,
//   setTempToken,
// } from '../../../redux/slices/userSlice';
// // import OneSignal from 'react-native-onesignal';
// // import CustomModal from '../../../components/CustomModal';
// // import Geocoder from 'react-native-geocoding';
// // import Geolocation from 'react-native-geolocation-service';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import Map from '../../../components/CustomMap';
// // import Pin from '../../../assets/Svg/PinBlue.svg';
// // import DropDownIcon from 'react-native-vector-icons/AntDesign';
// // import Back from '../../../assets/Svg/Back.svg';
// // import {
// //   AccessToken,
// //   AuthenticationToken,
// //   GraphRequest,
// //   GraphRequestManager,
// //   LoginManager,
// // } from 'react-native-fbsdk-next';
// // import appleAuth from '@invertase/react-native-apple-authentication';
const Social = props => {
  //   const dispatch = useDispatch();

  //   const [facebookLoader, setFacebookLoader] = useState(false);
  //   const [googleLoader, setGoogleLoader] = useState(false);
  //   const [appleLoader, setAppleLoader] = useState(false);
  const styles = useThemeAwareObject(createStyles);
  //   const [socialCall, socialResponse] = usePostApiMutation();
  //   const [mapShow, setMapShow] = useState(false);
  //   const [buttonPressed, setButtonPressed] = useState(false);
  //   const [locationModal, setLocationModal] = useState(false);
  //   const [lat, setLat] = useState('');
  //   const [lng, setLng] = useState('');
  //   const [latDelta, setLatDelta] = useState(Platform.OS == 'ios' ? -0.003 : 0);
  //   const [lngDelta, setLngDelta] = useState(
  //     Platform.OS == 'ios' ? -0.003 : 0.008,
  //   );
  //   const [address, setAddress] = useState('');
  //   const [userInformation, setUserInformation] = useState({});
  //   const [locationApiCall, locationApiResponse] = usePostApiMutation();

  // =
  //   const signInWithGoogle = async () => {
  //     setGoogleLoader(true);
  //     GoogleSignin.signOut();

  //     try {
  //       await GoogleSignin.hasPlayServices();
  //       const userInfo = await GoogleSignin.signIn();
  //       setUserInformation(userInfo);
  //       googleAuth(userInfo);
  //     } catch (error) {
  //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //         setGoogleLoader(false);
  //       } else if (error.code === statusCodes.IN_PROGRESS) {
  //         setGoogleLoader(false);
  //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //         setGoogleLoader(false);
  //       } else {
  //         setGoogleLoader(false);
  //       }
  //     }
  //   };
  //   const googleAuth = async userInfo => {
  //     let form = new FormData();
  //     form.append('name', userInfo.user.name);
  //     form.append('email', userInfo.user.email.toLowerCase());
  //     form.append('google_id', userInfo.user.id);
  //     form.append('is_google', true);
  //     form.append('user_type', 'contractor');

  //     setGoogleLoader(true);
  //     let apiData = {
  //       url: social_Login,
  //       method: 'POST',
  //       data: form,
  //     };

  //     try {
  //       let res = await socialCall(apiData).unwrap();
  //       if (res.statusCode == 200) {
  //         if (Array.isArray(res.Data.user)) {
  //           if (
  //             res.Data.user[0].latitude == null &&
  //             res.Data.user[0].longitude == null
  //           ) {
  //             setLocationToken(res?.Data?.access_token);
  //             setLocationModal(true);
  //           } else {
  //             if (
  //               res.Data?.user[0].address == null ||
  //               res?.Data?.user[0]?.services?.length < 1 ||
  //               res?.Data?.user[0]?.plan_id == null
  //             ) {
  //               dispatch(setToken(res?.Data?.access_token));
  //               setGoogleLoader(false);

  //               props.navigation.navigate('CompleteProfile', {
  //                 token: res?.Data?.access_token,
  //               });
  //             } else {
  //               OneSignal.setExternalUserId(
  //                 res.Data.user[0]?.email?.toLowerCase(),
  //                 res?.Data?.oneSignalHash,
  //               );
  //               dispatch(setToken(res?.Data?.access_token));
  //               dispatch(setUser(res?.Data?.user[0]));
  //               dispatch(setTempToken(res?.Data?.access_token));
  //             }
  //           }
  //         } else {
  //           Snackbar('Select valid user type');
  //           setGoogleLoader(false);
  //         }
  //       } else {
  //         Snackbar(res.message);
  //         setGoogleLoader(false);
  //       }
  //     } catch (error) {
  //       setGoogleLoader(false);
  //     }
  //   };
  //   const LocationApi = async () => {
  //     let form = new FormData();
  //     form.append('latitude', lat);
  //     form.append('longitude', lng);

  //     let apiData = {
  //       url: locationApis,
  //       method: 'POST',
  //       data: form,
  //       token: locationToken,
  //     };
  //     if (lat && lng && address) {
  //       try {
  //         let resp = await locationApiCall(apiData).unwrap();
  //         if (resp.status == 200) {
  //           dispatch(setToken(locationToken));
  //           props.navigation.navigate('CompleteProfile', {
  //             token: locationToken,
  //           });
  //           setLocationModal(false);
  //           setGoogleLoader(false);
  //         } else {
  //         }
  //       } catch (error) {}
  //     }
  //   };
  //   const signInWithFacebook = async () => {
  //     setFacebookLoader(true);
  //     LoginManager.logOut();
  //     try {
  //       const results = await LoginManager.logInWithPermissions([
  //         'email',
  //         'public_profile',
  //         'user_friends',
  //       ]);

  //       if (Platform.OS === 'ios') {
  //         const result =
  //           await AuthenticationToken.getAuthenticationTokenIOS().then(data => {
  //             const processRequest = new GraphRequest(
  //               '/me?fields=name,email',
  //               null,
  //               (err, res) =>
  //                 getResponseInfo(err, res, result?.authenticationToken),
  //             ); // Start the graph request.
  //             new GraphRequestManager().addRequest(processRequest).start();
  //           });
  //       } else {
  //         if (!results.isCancelled) {
  //           // await AsyncStorage.setItem('login', 'facebook');
  //           // navigation.navigate('MainTab');
  //         }
  //         const result = AccessToken.getCurrentAccessToken().then(data => {
  //           const processRequest = new GraphRequest(
  //             '/me?fields=name,email',
  //             null,
  //             (err, res) =>
  //               getResponseInfo(err, res, data?.accessToken.toString()),
  //           ); // Start the graph request.
  //           new GraphRequestManager().addRequest(processRequest).start();
  //         });
  //       }
  //     } catch (error) {
  //       setFacebookLoader(false);
  //     }
  //   };

  //   const getResponseInfo = (error, result, info) => {
  //     if (error) {
  //       //Alert for the Error
  //       setFacebookLoader(false);
  //     } else {
  //       facebookAuth(result, info);
  //     }
  //   };

  //   const facebookAuth = async (result, info) => {
  //     let form = new FormData();
  //     form.append('name', result.name);
  //     form.append('email', result.email.toLowerCase());
  //     form.append('facebook_id', result.id);
  //     form.append('is_facebook', true);
  //     form.append('user_type', 'contractor');

  //     let apiData = {
  //       url: social_Login,
  //       method: 'POST',
  //       data: form,
  //     };
  //     try {
  //       let res = await socialCall(apiData).unwrap();
  //       console.log('res.Data.user', res.Data.user);
  //       if (res.statusCode == 200) {
  //         if (Array.isArray(res.Data.user)) {
  //           if (
  //             res.Data.user[0].latitude == null &&
  //             res.Data.user[0].longitude == null
  //           ) {
  //             setLocationToken(res?.Data?.access_token);
  //             setLocationModal(true);
  //           } else {
  //             if (
  //               res.Data?.user[0].address == null ||
  //               res?.Data?.user[0]?.services?.length < 1 ||
  //               res?.Data?.user[0]?.plan_id == null
  //             ) {
  //               dispatch(setToken(res?.Data?.access_token));
  //               setFacebookLoader(false);

  //               props.navigation.navigate('CompleteProfile', {
  //                 token: res?.Data?.access_token,
  //               });
  //             } else {
  //               OneSignal.setExternalUserId(
  //                 res.Data.user[0]?.email?.toLowerCase(),
  //                 res?.Data?.oneSignalHash,
  //               );
  //               dispatch(setToken(res?.Data?.access_token));
  //               dispatch(setUser(res?.Data?.user[0]));
  //               dispatch(setTempToken(res?.Data?.access_token));
  //             }
  //           }
  //         } else {
  //           Snackbar('Select valid user type');
  //           setFacebookLoader(false);
  //         }
  //       } else {
  //         setFacebookLoader(false);
  //         Snackbar(res.message);
  //       }
  //     } catch (e) {
  //       console.log('e', e);
  //       setFacebookLoader(false);
  //     }
  //   };

  //   const signInWithApple = async () => {
  //     setAppleLoader(true);
  //     const appleAuthRequestResponse = await appleAuth
  //       .performRequest({
  //         requestedOperation: appleAuth.Operation.LOGIN,
  //         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //       })
  //       .then(async appleAuthResponse => {
  //         const {email, email_verified, is_private_email, sub, name} = jwt_decode(
  //           appleAuthResponse?.identityToken,
  //         );
  //         let form = new FormData();
  //         form.append(
  //           'name',
  //           appleAuthResponse.fullName.givenName +
  //             appleAuthResponse.fullName.familyName,
  //         );
  //         form.append(
  //           'email',
  //           appleAuthResponse.email
  //             ? appleAuthResponse.email?.toLowerCase()
  //             : email.toLowerCase(),
  //         );
  //         form.append('apple_id', appleAuthResponse.user);
  //         form.append('is_apple', true);
  //         form.append('user_type', 'contractor');

  //         let apiData = {
  //           url: social_Login,
  //           method: 'POST',
  //           data: form,
  //         };

  //         try {
  //           let res = await socialCall(apiData).unwrap();
  //           if (res.statusCode == 200) {
  //             if (Array.isArray(res.Data.user)) {
  //               if (
  //                 res.Data.user[0].latitude == null &&
  //                 res.Data.user[0].longitude == null
  //               ) {
  //                 setLocationToken(res?.Data?.access_token);
  //                 setLocationModal(true);
  //               } else {
  //                 if (
  //                   res.Data?.user[0].address == null ||
  //                   res?.Data?.user[0]?.services?.length < 1 ||
  //                   res?.Data?.user[0]?.plan_id == null
  //                 ) {
  //                   setAppleLoader(false);
  //                   dispatch(setToken(res?.Data?.access_token));
  //                   props.navigation.navigate('CompleteProfile', {
  //                     token: res?.Data?.access_token,
  //                   });
  //                 } else {
  //                   console.log(
  //                     'res',
  //                     res.Data.user[0]?.email?.toLowerCase(),
  //                     res?.Data?.oneSignalHash,
  //                   );
  //                   OneSignal.setExternalUserId(
  //                     res.Data.user[0]?.email?.toLowerCase(),
  //                     res?.Data?.oneSignalHash,
  //                   );
  //                   dispatch(setToken(res?.Data?.access_token));
  //                   dispatch(setUser(res?.Data?.user[0]));
  //                   dispatch(setTempToken(res?.Data?.access_token));
  //                   setAppleLoader(false);
  //                 }
  //               }
  //             } else {
  //               Snackbar('Select valid user type');
  //               // setGoogleLoader(false);
  //               setAppleLoader(false);
  //             }
  //           } else {
  //             Snackbar(res.message);
  //             setAppleLoader(false);
  //           }
  //         } catch (error) {
  //           setAppleLoader(false);
  //         }
  //       });
  //   };

  return (
    <>
      <View style={styles.socialContainer}>
        <SocialIcon
          iconSize={styles.iconSize}
          // loading={googleLoader}
          Component={TouchableOpacity}
          // onPress={() => !googleLoader && signInWithGoogle()}
          raised={false}
          type="google"
          title="Google"
          button
          style={{
            width: wp(39),
            height: hp(7),
            borderRadius: hp(2),
          }}
          activityIndicatorStyle={{
            width: wp(3),
            height: wp(3),
          }}
        />
        <SocialIcon
          iconSize={styles.iconSize}
          Component={TouchableOpacity}
          // loading={facebookLoader}
          // onPress={() => !facebookLoader && signInWithFacebook()}
          raised={false}
          type="facebook"
          title="Facebook"
          button
          style={{
            width: wp(39),
            height: hp(7),
            borderRadius: hp(2),
          }}
        />
        {Platform.OS == 'ios' && (
          <SocialIcon
            iconSize={styles.iconSize}
            Component={TouchableOpacity}
            // onPress={!appleLoader && signInWithApple}
            style={styles.socialIcons}
            raised={false}
            type="apple"
          />
        )}
      </View>
    </>
  );
};
export default Social;
