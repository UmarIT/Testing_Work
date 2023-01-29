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
const ForgotPassword = props => {
  const styles = useThemeAwareObject(createStyles);

  const validationSchema = yup.object().shape({
    email: yup
      .string('Email Required')
      .email()
      .label('Email')
      .required('Email is required'),
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
                Forgot
              </Text>
              <Text
                style={{
                  fontSize: hp(2.5),
                  // fontWeight: 'bold',
                  color: '#fff',
                  alignSelf: 'center',
                  fontFamily: 'Satoshi-Bold',
                }}>
                Password
              </Text>
            </View>
            <Formik
              initialValues={{email: ''}}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={async values => {
                // loginApiCalling(values);
                console.log('values', values);
                props.navigation.navigate('OTP');
              }}
              validationSchema={validationSchema}>
              {({handleChange, handleSubmit, handleBlur, errors, values}) => (
                <>
                  <FormInput
                    inputStyle={styles.inputStyles}
                    placeholder={'Please enter your Email Address'}
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

                  <Button
                    style={[styles.loginContainer, styles.loginText]}
                    title1="Continue"
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
                </>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
