/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
 *.\gradlew assembleRelease --warning-mode all
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  _ScrollView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import Swipeout from 'react-native-swipeout';
//import GestureRecognizer from 'react-native-swipe-gestures';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      today:new Date(),
      habitTitle:'Habit',
      settingModal:false,

    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.hambergerBtn}></TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.greyTitle}>
            <TouchableOpacity >
              <Text style={styles.greyText} >{this.state.habitTitle} |</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seletedTitle}>
            <TouchableOpacity>
              <Text style={styles.seletedText}>Do-list</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.date}>
          <View style={styles.dateLeft}>
            <TouchableOpacity >
              <Image style={styles.all} source={require('./icon/all_seleted.png')}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image style={styles.do} source={require('./icon/do.png')}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image style={styles.done} source={require('./icon/done.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.seletedDate}>

              <Text style={styles.seletedDateText}>Weekly</Text>

          </View>
        </View>

        <View style={styles.listView}>
        <ScrollView>
          <View style={styles.item}>
            <Image style={styles.radioBtn} source={require('./icon/radio.png')} />
            <Text style={styles.dolist}>다이어트 도시락 챙겨가기</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.radioBtn} source={require('./icon/radio.png')} />
            <Text style={styles.dolist}>다이어트 도시락 챙겨가기</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.radioBtn} source={require('./icon/radio.png')} />
            <Text style={styles.dolist}>다이어트 도시락 챙겨가기</Text>
          </View>
          <View style={styles.itemDone}>
            <Image style={styles.radioBtn} source={require('./icon/radio_checked.png')} />
            <Text style={styles.dolist}>서점들려서 자기계발서 사기</Text>
          </View>
            
        </ScrollView>
        <TouchableOpacity style={styles.floattingBtn}>
          <Image style={styles.addIcon} source={require('./icon/plus_btn.png')}/>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    //right: 0,
    flex: 1,
    padding: 16,
  },
  hambergerBtn:{
    position:'absolute',
    width:50,
    height:50,
    justifyContent:'center',
    backgroundColor:'silver',
    //borderRadius:50,
    right:16,
    top:20
  },
  floattingBtn:{
    position:'absolute',
    width:50,
    height:50,
    //justifyContent:'center',
    //backgroundColor:'#ffffff',
    //borderRadius:50,
    right:16,
    bottom:40
  },
  addIcon:{
    width:54,
    height:54,
  },
  header:{
    flexDirection:'row',
    flex:1,
  },
  seletedTitle: {
    justifyContent:'center',
    padding: 10,
    //backgroundColor: Colors.white,
    
    
  },
  seletedText:{
    color:'#333333',
    fontSize:24,
    fontFamily:'arial'
  },
  greyTitle: {
    justifyContent:'center',
    padding:10,
    //fontSize: 50,
    //fontFamily:'arial',
    //fontWeight: '600',
    //color: '#b2b2b2',
    //color:'pink'
   
  },
  radioBtn:{
    width:20,
    height:20,
    marginRight:12
  },
  greyText:{
    color:'#b2b2b2',
    fontSize:24,
    fontFamily:'arial'
  },
  date:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:16,
    padding:3,
    flex:1.2,
    //flexDirection:'row',
    //backgroundColor:'pink',
    //width:'100%'
    
  },
  dateLeft:{
    flexDirection: 'row',
  },

  todayText:{
    color:Colors.white,
    fontSize: 15,
    alignSelf:'auto'
    
  },

  all:{
    marginLeft:6,
    height:29,
    width:49
  },
  do:{
    marginLeft:6,
    height:29,
    width:52
  },
  done:{
    marginLeft:6,
    height:29,
    width:69
  },
  seletedDate:{
    justifyContent:'center',
  },
  seletedDateText:{
    fontSize:16,
    color:'#333333',
    fontFamily:'arial'
  },
  listView: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    flex: 8,
  },
  item:{
    width:'100%',
    height:58,
    borderRadius: 10,
    //backgroundColor:'#ff7170',
    backgroundColor:'#f5f5f5',
    //fontSize: 40,
    justifyContent: 'flex-start',
    marginBottom:16,
    flexDirection:'row',
    alignItems:'center',
    padding: 20
  },
  itemDone:{
    width:'100%',
    height:58,
    borderRadius: 10,
    //backgroundColor:'#7bf2a4',
    backgroundColor:'#cccccc',
    fontSize: 40,
    justifyContent: 'flex-start',
    marginBottom:16,
    flexDirection:'row',
    alignItems:'center',
    padding: 20
  },
  item3:{
    width:'100%',
    height:81,
    borderRadius: 10,
    //backgroundColor:'#ff8b39',
    backgroundColor:'#f2e5d5',
    fontSize: 40,
    justifyContent: 'space-between',
    marginBottom:16,
    flexDirection:'row',
    alignItems:'center',
    padding: 20
  },
  item4:{
    width:'100%',
    height:81,
    borderRadius: 10,
    //backgroundColor:'#6fd8ff',
    backgroundColor:'#d9c2a7',
    fontSize: 40,
    justifyContent: 'space-between',
    marginBottom:16,
    flexDirection:'row',
    alignItems:'center',
    padding: 20
  },
  itemTitle:{
    fontFamily:'spoqa_han_sans',
    fontSize:18,
    color:'#333333'
  },
  dolist:{
    fontFamily:'spoqa_han_sans',
    fontSize:16,
    color:'#333333'
  }
});


