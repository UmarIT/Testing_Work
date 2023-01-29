import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useThemeAwareObject} from '../../../theme';
import createStyles from './styles';
import {hp, wp} from '../../../util';
import Button from '../../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import FormInput from '../../../components/FormInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as yup from 'yup';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Social from '../Social/index';
const SignUp = props => {
  const styles = useThemeAwareObject(createStyles);
  const minPass = 8;
  const [passwordIcon, setPasswordIcon] = useState(true);
  function PasswordRightIcon() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setPasswordIcon(!passwordIcon);
        }}>
        {icon()}
      </TouchableOpacity>
    );
  }
  function icon() {
    if (passwordIcon) {
      return <Feather name="eye-off" size={25} color={'#fff'} />;
    } else {
      return <Feather name="eye" size={25} color={'#fff'} />;
    }
  }
  const validationSchema = yup.object().shape({
    email: yup
      .string('Email Required')
      .email()
      .label('Email')
      .required('Email is required'),
    password: yup
      .string('Password Required')
      .label('Password')
      .required('Password is required')
      .min(
        minPass,
        ({}) =>
          `Minimum ${minPass} characters. 1 capital and 1 lower case and 1 special character is must.`,
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\()*])(?=.{8,})/,
        `Minimum ${minPass} characters. 1 capital and 1 lower case and 1 special character is must.`,
      ),
  });
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar
        backgroundColor={styles.bgStatusBar}
        barStyle="light-content"
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <ImageBackground
          source={require('../../../../assets/images/bg.png')}
          style={{
            // flex: 1,
            width: wp(100),
            height: hp(100),
          }}
          resizeMode="cover">
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../../../assets/images/Logo.png')}
              style={{
                marginTop: hp(10),
                width: wp(30),
                height: hp(10),
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
            <View
              style={{
                marginTop: hp(-2),
              }}>
              <Text
                style={{
                  fontSize: hp(2.5),

                  color: '#fff',
                  alignSelf: 'center',
                  fontFamily: 'Satoshi-Bold',
                }}>
                Create your
              </Text>
              <Text
                style={{
                  fontSize: hp(2.5),
                  // fontWeight: 'bold',
                  color: '#fff',
                  alignSelf: 'center',
                  fontFamily: 'Satoshi-Bold',
                }}>
                Account
              </Text>
            </View>
            <Formik
              initialValues={{email: '', password: ''}}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={async values => {
                // loginApiCalling(values);
                console.log('values', values);
              }}
              validationSchema={validationSchema}>
              {({handleChange, handleSubmit, handleBlur, errors, values}) => (
                <>
                  <FormInput
                    inputStyle={styles.inputStyles}
                    placeholder={'Email'}
                    placeholderTextColor="#fff"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    errorMsg={errors.email}
                    appendComponent={
                      <View style={styles.imageView}>
                        <MaterialCommunityIcons
                          name="email"
                          size={25}
                          color={'#fff'}
                        />
                      </View>
                    }
                  />
                  <FormInput
                    inputStyle={styles.inputStyles}
                    placeholder={'Password'}
                    placeholderTextColor="#fff"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    errorMsg={errors.password}
                    secureTextEntry={passwordIcon}
                    appendComponent={
                      <View style={styles.imageView}>
                        {PasswordRightIcon()}
                      </View>
                    }
                  />
                  <Button
                    style={[styles.loginContainer, styles.loginText]}
                    title1="Create Account"
                    onPress={() => handleSubmit()}
                  />
                  {/* <LinearGradient
                    start={{x: 0, y: 0.75}}
                    end={{x: 1, y: 0.25}}
                    colors={[
                      '#2B3FAE',
                      '#551BB2',
                      '#4924AA',
                      '#33309B',
                      '#342C88',

                      '#3E1874',
                      '#3F1974',
                    ]}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Login</Text>
                  </LinearGradient> */}
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={styles.dotLine}></View>

                    <Text style={styles.orSignInStyle}>Or Sign In with</Text>
                    <View style={styles.dotLine}></View>
                  </View>

                  <Social {...props} />
                  <View style={styles.doNotHaveAccountView}>
                    <Text style={styles.textAnAccount}>
                      Already have an account?{' '}
                    </Text>
                    <Text
                      onPress={() => {
                        props.navigation.replace('Login');
                      }}
                      style={styles.signUp}>
                      Sign In
                    </Text>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
