import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../screen/AuthScreen/SignUp';
import Login from '../screen/AuthScreen/Login';
import Intro from '../screen/AuthScreen/Intro';
import ForgotPassword from '../screen/AuthScreen/ForgotPassword';
import ResetPassword from '../screen/AuthScreen/ResetPassword';
import OTP from '../screen/AuthScreen/OTP';
import Home from '../screen/HomeScreen/Home';
import TopSong from '../screen/HomeScreen/TopSong';
import NomineeList from '../screen/HomeScreen/NomineeList';
import Setting from '../screen/HomeScreen/Setting';
import {hp, wp} from '../util';
import {useThemeAwareObject} from '../theme';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Intro">
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const TopSongStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TopSong">
      <Stack.Screen name="TopSong" component={TopSong} />
    </Stack.Navigator>
  );
};
const NomineeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="NomineeList">
      <Stack.Screen name="NomineeList" component={NomineeList} />
    </Stack.Navigator>
  );
};
const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Setting">
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};
const TabNavigator = props => {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      // tabBarColor: theme.color.appBackground,
      tabBarColor: '#202837',
      focusedColor: {
        color: '#6791DE',
      },
      grayColor: {
        color: theme.color.shadowColor,
      },
      textStyle: {
        fontSize: theme.size.xSmall,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: false,
      }}
      initialRouteName="HomeStack"
      backBehavior="firstRoute">
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        listeners={({navigation}) => ({
          // tabPress: event => {
          //   event.preventDefault();
          //   navigation.navigate('MyJobsStack', {
          //     screen: 'MyJobs',
          //   });
          // },
        })}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ) : (
              <Image
                source={require('../../assets/icons/homeinActive.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textStyle,
                focused ? styles.focusedColor : styles.grayColor,
              ]}>
              Home
            </Text>
          ),
          tabBarStyle: {
            // display:
            //   getFocusedRouteNameFromRoute(route) == 'ActiveDetails' ||
            //   getFocusedRouteNameFromRoute(route) == 'PastDetails' ||
            //   getFocusedRouteNameFromRoute(route) == 'ProposalDetails' ||
            //   getFocusedRouteNameFromRoute(route) == 'ProposalJobDetails' ||
            //   getFocusedRouteNameFromRoute(route) == 'AllProposalScreen'
            //     ? 'none'
            //     : 'flex',

            backgroundColor: styles.tabBarColor,
            height: hp(8),
            paddingTop: hp(1),
            paddingBottom: hp(1),
            borderTopWidth: 0,
          },
          unmountOnBlur: true,
        })}
      />
      <Tab.Screen
        name="TopSongStack"
        component={TopSongStack}
        listeners={({navigation}) => ({
          // tabPress: event => {
          //   event.preventDefault();
          //   navigation.navigate('MessageStack', {
          //     screen: 'MessageList',
          //   });
          // },
        })}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../../assets/icons/top10.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ) : (
              <Image
                source={require('../../assets/icons/Topsongs-inActive.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textStyle,
                focused ? styles.focusedColor : styles.grayColor,
              ]}>
              Top 10
            </Text>
          ),
          tabBarStyle: {
            // display:
            //   getFocusedRouteNameFromRoute(route) == 'MessageChat'
            //     ? 'none'
            //     : 'flex',
            backgroundColor: styles.tabBarColor,
            height: hp(8),
            paddingTop: hp(1),
            paddingBottom: hp(1),
            borderTopWidth: 0,
          },
          unmountOnBlur: true,
        })}
      />
      <Tab.Screen
        name="NomineeStack"
        component={NomineeStack}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../../assets/icons/MusicActive.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ) : (
              <Image
                source={require('../../assets/icons/Music-inActive.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textStyle,
                focused ? styles.focusedColor : styles.grayColor,
              ]}>
              NomineeList
            </Text>
          ),
          tabBarStyle: {
            backgroundColor: styles.tabBarColor,
            height: hp(8),
            paddingTop: hp(1),
            paddingBottom: hp(1),
            borderTopWidth: 0,
          },
          unmountOnBlur: true,
        })}
      />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        listeners={({navigation}) => ({
          // tabPress: event => {
          //   event.preventDefault();
          //   navigation.navigate('AccountStack', {
          //     screen: 'AccountScreen',
          //   });
          // },
        })}
        options={({route}) => ({
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../../assets/icons/settings.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ) : (
              <Image
                source={require('../../assets/icons/Setting-inActive.png')}
                resizeMode="contain"
                style={{
                  width: wp(8),
                  height: wp(8),
                }}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.textStyle,
                focused ? styles.focusedColor : styles.grayColor,
              ]}>
              Setting
            </Text>
          ),
          tabBarStyle: {
            // display:
            //   getFocusedRouteNameFromRoute(route) == 'ProfileInfo' ||
            //   getFocusedRouteNameFromRoute(route) == 'EditProfile' ||
            //   getFocusedRouteNameFromRoute(route) == 'Reviews'
            //     ? 'none'
            //     : 'flex',
            backgroundColor: styles.tabBarColor,
            height: hp(8),
            paddingTop: hp(1),
            paddingBottom: hp(1),
            borderTopWidth: 0,
          },
          unmountOnBlur: true,
        })}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
