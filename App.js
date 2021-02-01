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
          <View style={styles.habitTitle}>
            <TouchableOpacity >
              <Text style={styles.habitText} >{this.state.habitTitle} |</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.doListTitle}>
            <TouchableOpacity>
              <Text style={styles.doText}>Do-list</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.date}>
          <View style={styles.dateLeft}>
            <TouchableOpacity >
              <Image style={styles.today} source={require('./icon/today_btn.png')}/>
              {/* <Text style={styles.todayText}>today </Text> */}
            </TouchableOpacity>
            <TouchableOpacity >
              <Image style={styles.all} source={require('./icon/all_btn.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.seletedDate}>

              <Text style={styles.seletedDateText}>2021.03.10</Text>

          </View>
        </View>

        <View style={styles.listView}>
        <ScrollView>
          <View style={styles.item1}>
            <Text style={styles.itemTitle} >기상 후 스 트레칭</Text>
            <Text style={styles.itemPercent}>42%</Text>
          </View>
          <View style={styles.item2}>
            <Text style={styles.itemTitle} >기상 후 스 트레칭</Text>
            <Text style={styles.itemPercent}>42%</Text>
          </View>
          <View style={styles.item3}>
            <Text style={styles.itemTitle} >기상 후 스 트레칭</Text>
            <Text style={styles.itemPercent}>42%</Text>
          </View>
          <View style={styles.item4}>
            <Text style={styles.itemTitle} >기상 후 스 트레칭</Text>
            <Text style={styles.itemPercent}>42%</Text>
          </View>
          <View style={styles.item1}>
            <Text style={styles.itemTitle} >기상 후 스 트레칭</Text>
            <Text style={styles.itemPercent}>42%</Text>
          </View>
          <View style={styles.item2}>
            <Text style={styles.itemTitle} >기상 후 스 트레칭</Text>
            <Text style={styles.itemPercent}>42%</Text>
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
  habitTitle: {
    justifyContent:'center',
    padding: 10,
    //backgroundColor: Colors.white,
    
    
  },
  habitText:{
    color:'#333333',
    fontSize:24,
    fontFamily:'arial'
  },
  doListTitle: {
    justifyContent:'center',
    padding:10,
    //fontSize: 50,
    //fontFamily:'arial',
    //fontWeight: '600',
    //color: '#b2b2b2',
    //color:'pink'
   
  },
  doText:{
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
    flex:1,
    //flexDirection:'row',
    //backgroundColor:'pink',
    //width:'100%'
    
  },
  dateLeft:{
    flexDirection: 'row',
  },
  today:{
   width:73,
   height:29
    
  },
  todayText:{
    color:Colors.white,
    fontSize: 15,
    alignSelf:'auto'
    
  },

  all:{
    marginLeft:8,
    height:29,
    width:49
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
  item1:{
    width:'100%',
    height:81,
    borderRadius: 10,
    backgroundColor:'#ff7170',
    //fontSize: 40,
    justifyContent: 'space-between',
    marginBottom:16,
    flexDirection:'row',
    alignItems:'center',
    padding: 20
  },
  item2:{
    width:'100%',
    height:81,
    borderRadius: 10,
    backgroundColor:'#7bf2a4',
    fontSize: 40,
    justifyContent: 'space-between',
    marginBottom:16,
    flexDirection:'row',
    alignItems:'center',
    padding: 20
  },
  item3:{
    width:'100%',
    height:81,
    borderRadius: 10,
    backgroundColor:'#ff8b39',
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
    backgroundColor:'#6fd8ff',
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
  itemPercent:{
    fontFamily:'spoqa_han_sans',
    fontSize:13,
    color:'#333333'
  }
});


