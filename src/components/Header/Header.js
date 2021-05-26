import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import _styles, {
  container,
  _shadowStyle,
  innerContainer,
  _leftComponentStyle,
  _rightComponentStyle,
  _rightComponentCustomNoFlexStyle,
  _textStyle,
  _textRightStyle,
} from './Header.style';
import colors from './colors.style';

const hitSlop = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30,
};

const Header = (props) => {
  const {
    styles,
    hitSlops,
    shadowStyle,
    headerTitle,
    shadowColor,
    leftComponent,
    rightComponent,
    centerComponent,
    statusBarHidden,
    leftComponentStyle,
    rightComponentStyle,
    leftComponentDisable,
    leftOnPress,
    centerComponentStyle,
    rightComponentDisable,
    rightOnPress,
    leftTitle,
    rightTitle,
    rightIconName,
    leftIconName,
  } = props;
  return (
    <SafeAreaView>
      <View style={[styles || container(props), shadowStyle || _shadowStyle(shadowColor)]}>
        <View style={[innerContainer(statusBarHidden)]}>
          {leftComponent || (
            <TouchableOpacity
              hitSlop={hitSlops || hitSlop}
              onPress={leftOnPress}
              style={leftComponentStyle || _leftComponentStyle(leftComponentDisable)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Icon color={colors.theme.light.darkBlue} name={leftIconName} size={30} style={{ alignSelf: 'center' }} />
                <Text style={_textStyle()}>{leftTitle}</Text>
              </View>
            </TouchableOpacity>
          )}
          {centerComponent || <Text style={[centerComponentStyle || _styles.centerComponentStyle]}>{headerTitle}</Text>}
          {rightComponent || (
            <TouchableOpacity
              hitSlop={hitSlops || hitSlop}
              onPress={rightOnPress}
              style={ _rightComponentStyle(rightComponentDisable)}
            >
              <Icon style={{paddingTop:20}} color={colors.theme.light.darkBlue} name={rightIconName} size={30} />
              <Text style={_textRightStyle()}>{rightTitle}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
