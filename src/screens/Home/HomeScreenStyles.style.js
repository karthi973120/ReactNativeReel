import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#c4c4c4',
  },
  headerTitle: {
    textAlign: 'center',
    fontFamily: 'cursive',
    fontSize: 24,
    color: '#2e0301',
    alignSelf: 'center',
    marginLeft: 13,
  },
  headerTitleContainer: { flexDirection: 'row', paddingBottom: 14, marginTop: 24 },
});

export default HomeScreenStyles;
