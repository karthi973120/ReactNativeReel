import { Dimensions, StyleSheet } from 'react-native';
const {width,height} = Dimensions.get('window');
console.log(width,height,'cool')
const ReelScreenStyles = StyleSheet.create({
    backgroundVideo:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    video: {
        width:width,
        height:height-50,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        flexDirection: 'row', 
        marginTop: 24 
    },
    headerTitle: {
        textAlign: 'left',
        fontFamily: 'cursive',
        fontSize: 30,
        color: 'white',
        fontWeight:'bold',
        alignSelf: 'center',
        left: 20,
    },
    leftIcon: {
        alignItems:'flex-end',
        right:20
      },
    footer:{
        flex:1,
        justifyContent: 'flex-end',
        bottom:20,
        left:20
    },
    footerContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footerOne:{
        alignItems:'flex-start',
        justifyContent:'flex-end',
        bottom:10
    },
    footerTwo:{
        alignItems:'flex-end',right:30
    },
    stickItemTop : {
        top:0,position:'absolute'
    }
});

export default ReelScreenStyles;
