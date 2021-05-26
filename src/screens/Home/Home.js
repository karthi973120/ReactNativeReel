
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import HomeScreenStyles from './HomeScreenStyles.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  const renderTitleBarLayout = () => {
    return (
      <Header
        headerTitle={'Motivation'}
        leftIconName={'add-circle-outline'}
        rightIconName={'chatbox-ellipses-outline'}
        leftOnPress={''}
        rightOnPress={() => {}}
      />
    );
  };
    return (
      <View style={{ flex: 1}}>
        {renderTitleBarLayout()}
      </View>
    );
  }
export default  HomeScreen;