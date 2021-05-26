
import React,{useState,useRef} from 'react';
import { View, FlatList,Text,SafeAreaView,TouchableOpacity,Image } from 'react-native';
import ReelScreenStyles from './ReelcreenStyles.style';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

const ReelScreen = () => {
const [pause,setPause] = useState(false);
const [mute,setMute] = useState(false);
const [visibleIndex,setVisibleIndex] = useState(1);
const [videoRefs,setvideoRefs] = useState([]);

  const listData = [
    {
      id:1,
      url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
    },
    {
      id:2,
      url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
    },
    {
      id:3,
      url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
    },
    {
      id:4,
      url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
    },
  ];
  const onVideoLoad = (duration) =>{
    console.log(duration,'duration')
  }
  const onVideoEnd = (onend) =>{
    console.log(onend,'onend')
  }
  const renderReelCard = ({item,index}) =>{
    console.log(visibleIndex,'item single',item.id)
    return(
      <View style={ReelScreenStyles.video} key={item.id}>
            <Video source={{uri: item.url}}  
                fullscreen={false} 
                // muted={mute}
                resizeMode={'cover'}  
                onLoad={(duration)=>onVideoLoad(duration)}
                onEnd={(onend)=>onVideoEnd(onend)}
                paused={visibleIndex===item.id ? false:true}              
                style={ReelScreenStyles.backgroundVideo}>
            </Video>
        {renderTitleBarLayout()}
        <View style={ReelScreenStyles.footer}>
          <View style={ReelScreenStyles.footerContainer}>
            <View style={ReelScreenStyles.footerOne}>
              <View style={{flexDirection:'row'}}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width: 40, height: 40,borderRadius:50}} />
                <Text style={{fontSize:15,color:'white',alignSelf:'center',left:10}}>Travis</Text>
              </View>
              <Text style={{fontSize:15,color:'grey',top:20}}>#bodybuilding #fitness</Text>
            </View>
            <View style={ReelScreenStyles.footerTwo}>
              <View style={{flexDirection:'column'}}>
                <TouchableOpacity style={{paddingVertical:10}}>
                  <Icon color="white" name={'heart-outline'} size={30}/>
                </TouchableOpacity>
                <Text style={{fontSize:12,color:'white',paddingVertical:10,alignSelf:'center'}}>207k</Text>
                <TouchableOpacity style={{paddingVertical:10}}>
                  <Icon color="white" name={'chatbubble-outline'} size={30}/>
                </TouchableOpacity>
                <Text style={{fontSize:12,color:'white',paddingVertical:10,alignSelf:'center'}}>898</Text>
                <TouchableOpacity style={{paddingVertical:10}}>
                  <Icon color="white" name={'send-outline'} size={28}/>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                  <Icon color="white" name={'ellipsis-vertical-outline'} size={30}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderTitleBarLayout = () => {
    return (
      <SafeAreaView style={ReelScreenStyles.headerContainer}>
        <View >
          <Text style={[ReelScreenStyles.headerTitle]}>
            Reels
          </Text>
        </View>
        <TouchableOpacity style={ReelScreenStyles.leftIcon}>
          <Icon color="white" name={'camera'} size={30}/>
        </TouchableOpacity>
      </SafeAreaView>
      
    );
  }
  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 80
  };
  const onViewableItemsChanged = ({
    viewableItems,changed
  }) => {
    console.log(viewableItems,changed,'pretty cool')
    // setVisibleIndex(viewableItems[0].index)
    changed.forEach(async item => {
      setPause(item.isViewable)
    });
    viewableItems.forEach(async item => {
        if (item.isViewable) {
          console.log(item,'view')
          setVisibleIndex(item.key)
        }
    });
  };
  const viewabilityConfigCallbackPairs = useRef([{ _viewabilityConfig, onViewableItemsChanged }])
  
    return (
      <View style={{backgroundColor:'black'}}>
        <FlatList
          snapToAlignment={'top'}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          viewabilityConfig={_viewabilityConfig}
          pagingEnabled={true}
          decelerationRate={'fast'}
          data={listData}
          ItemSeparatorComponent={ () => <View style={ { height: 2, backgroundColor: 'red' } } /> }
          renderItem={renderReelCard}
          keyExtractor={(item) => item.id}
      />
      </View>
    );
  }
export default  ReelScreen;