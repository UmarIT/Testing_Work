import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {useThemeAwareObject} from '../../../theme';
import createStyles from './styles';
import {hp, wp} from '../../../util';
import Button from '../../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
const Intro = props => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar
        backgroundColor={styles.bgStatusBar}
        barStyle="light-content"
      />
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
              marginTop: hp(18),
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
              My Music
            </Text>
            <Text
              style={{
                fontSize: hp(2.5),
                // fontWeight: 'bold',
                color: '#fff',
                alignSelf: 'center',
                fontFamily: 'Satoshi-Bold',
              }}>
              Chart
            </Text>
          </View>
          <View
            style={{
              marginTop: hp(20),
            }}>
            <Text
              style={{
                fontSize: hp(2.5),
                // fontWeight: 'bold',
                fontFamily: 'Satoshi-Bold',
                color: '#fff',
                alignSelf: 'center',
              }}>
              For Your
            </Text>
            <Text
              style={{
                fontSize: hp(2.5),
                // fontWeight: 'bold',
                fontFamily: 'Satoshi-Bold',
                color: '#fff',
                alignSelf: 'center',
              }}>
              Music
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: wp(8),
                color: '#fff',
                fontFamily: 'Satoshi-Light',
                marginTop: hp(2),
              }}>
              Rate your music,choose all your best musics for the week and
              select your Top 10 Music with a caption to share with your friend.
            </Text>
          </View>
          <Button
            style={[styles.loginContainer, styles.loginText]}
            title1="Create Account"
            onPress={() => props.navigation.navigate('SignUp')}
          />

          <LinearGradient
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
            <Button
              style={[styles.loginContain, styles.Login]}
              title1="Login"
              onPress={() => props.navigation.navigate('Login')}
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Intro;
