import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {useThemeAwareObject} from '../theme';

function CustomButton(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      blackColor: theme.color.primaryColor,
      whiteColor: theme.color.white,
      disabledButton: {
        backgroundColor: theme.color.shadowColor,
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      {!props.loading ? (
        !props.disabled ? (
          <TouchableOpacity
            style={props.style[0]}
            onPress={props.onPress}
            hitSlop={props.hitSlop}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={props.style[1]}>{props.title1}</Text>
              {props.title2 && (
                <Text style={props.style[2]}>{props.title2}</Text>
              )}
            </View>
            {props.children && props.children}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled
            style={[props.style[0], styles.disabledButton]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={props.style[1]}>{props.title1}</Text>
              {props.title2 && (
                <Text style={props.style[2]}>{props.title2}</Text>
              )}
            </View>
            {props.children && props.children}
          </TouchableOpacity>
        )
      ) : (
        <TouchableOpacity
          disabled
          style={[props.style[0]]}
          onPress={props.onPress}>
          <ActivityIndicator
            color={props.blackLoader ? styles.blackColor : styles.whiteColor}
          />
        </TouchableOpacity>
      )}
    </>
  );
}

export default CustomButton;
