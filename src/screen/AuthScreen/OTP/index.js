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
import Code from '../../../components/CodeVerification';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const OTP = props => {
  const styles = useThemeAwareObject(createStyles);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  function verifyCode(value) {
    setCode(value);
    setError('');
  }

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
                OTP
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginTop: hp(1.5),
                  textAlign: 'center',
                  color: '#fff',
                }}>
                Enter the OTP sent to the email
              </Text>
              <View style={styles.codeField}>
                <Code verifyCode={value => verifyCode(value)} />
                <Text style={styles.errorText}>{error}</Text>
                <Button
                  style={[styles.resend, styles.resendOutline]}
                  title1="Resend"
                />
                <Button
                  style={[styles.loginContainer, styles.loginText]}
                  title1="Verify OTP"
                  onPress={() => {
                    if (code.length == 4) {
                      console.log('!');
                      props.navigation.navigate('ResetPassword');
                    } else {
                      setError('Invalid Code');
                    }
                  }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OTP;
