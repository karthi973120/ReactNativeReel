// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home/Home';
import ProfileScreen from './src/screens/Profile/Profile';
import FeedScreen from './src/screens/Feed/Feed';
import AddScreen from './src/screens/AddPost/Add';
import NotificationScreen from './src/screens/Notifications/Notification';
import ReelScreen from './src/screens/Reels/Reel';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            gestureEnabled: false,
        tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    return <Icon color={color} name="home-outline" size={32} />;
                }else if(route.name==='Profile'){
                    return <Icon color={color} name="person-outline" size={32} />;
                }else if(route.name==='Feed'){
                  return <Icon color={color} name="search-outline" size={32} />;
                }else if(route.name==='Reel'){
                  return <Icon color={color} name="film-outline" size={32} />;
                }else if(route.name==='Notification'){
                  return <Icon color={color} name="notifications-outline" size={32} />;
                }
            }
        })}
        tabBarOptions={{
            showLabel:false,
            labelPosition: 'below-icon',
            activeTintColor: '#2e0301',
            inactiveTintColor: '#9B9B9B',
            style: {
            backgroundColor: '#f7f7f7',
            },
            labelStyle: {
            fontSize: 12,
            },
            tabStyle: {
            paddingTop: 5,
            },
        }}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Reel" component={ReelScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <NavigationContainer 
        
      >
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
        >
            <Stack.Screen name="Home" component={MyTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;