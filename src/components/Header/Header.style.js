import { Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import colors from './colors.style';

export function container(props) {
  const { height, width, backgroundColor, statusBarHidden } = props;
  return {
    width: width || '100%',
    ...Platform.select({
      ios: {
        top: 0,
        ...ifIphoneX(
          {
            height: height || 45,
          },
          { height: height || 50 }
        ),
      },
      android: {
        top: 0,
        height: height || (statusBarHidden ? 60 : 50),
      },
    }),
    backgroundColor: backgroundColor || colors.theme.light.white,
  };
}

export function innerContainer(statusBarHidden) {
  return {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  };
}

export function _shadowStyle(shadowColor) {
  return {
    ...Platform.select({
      ios: {},
      android: {
        elevation: 0,
      },
    }),
  };
}

export function _leftComponentStyle(leftComponentDisable) {
  return {
    opacity: leftComponentDisable ? 0 : 1,
    flex: 1,
  };
}

export function _rightComponentStyle(rightComponentDisable) {
  return {
    opacity: rightComponentDisable ? 0 : 1,
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
  };
}

export function _rightComponentCustomNoFlexStyle(rightComponentDisable) {
  return {
    opacity: rightComponentDisable ? 0 : 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
  };
}
export function _textStyle() {
  return {
    color: colors.theme.light.darkBlue,
    fontSize: 18,
    marginLeft: 6,
    paddingTop: 3,
    fontFamily: 'cursive',
    alignSelf: 'center',
  };
}
export function _textRightStyle() {
  return {
    color: colors.theme.light.textColor,
    fontSize: 18,
    paddingTop: 2,
    fontFamily: 'cursive',
    alignItems: 'flex-end',
  };
}
export default {
  centerComponentStyle: {
    textTransform: 'capitalize',
    fontSize: 23,
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontFamily:'cursive',
    paddingTop: 2,
    color: '#2e0301',
    flex: 1,
  },
};
