import React, { Fragment } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image } from 'react-native'
import {createDrawerNavigator,DrawerItems,createBottomTabNavigator} from 'react-navigation'
import {NavigationContainer, TabActions} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {creat}


import HomeScreen from './screen/HomeScreen'
import SettingsScreen from './screen/SettingsScreen'
import FavoritesScreen from './screen/FavoritesScreen'
import MybookScreen from './screen/MybookScreen'
import Arctic from './screen/Arctic'
import Desert from './screen/Desert'
import Rainforest from './screen/Rainforest'
import Mmo from './screen/Mmo'

import { render } from 'react-dom';

//const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render(){

  
  return (
    <View style={{flex:1}}>
      <AppDrawerNavigator/>
      {/* <MytabNavigator/> */}
      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MybookScreen} />
          <Tab.Screen name="Mybook" component={HomeScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </View>
    
  );
}
}



const CustomDrawerComponent = (props) => (
  <Fragment>
  <SafeAreaView style={{flex:1,backgroundColor:"#273939"}}/>
  <View style={{backgroundColor:"#273939",height:"100%"}}>
    <View style={{height:200,backgroundColor:"#273939"}}>
      <Image 
        source= {require('./assets/img_user_photo.png')}
        style = {{height:80,width:80,marginTop:45,marginLeft:20}}
      />
      <View style={styles.userinfoStyle}>
        <View>
          <Text style={styles.userinfotextStyle}>
          Kanahei
          </Text>
         
        </View>
        
      </View>
      
    </View>
    
    <ScrollView >
      <DrawerItems {...props}/>
      
    </ScrollView>
  </View>
    
    
  
  </Fragment>
  
)

// const resetAction = NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({ routeName: 'My book ' })],
// });


const MytabNavigator = createBottomTabNavigator({
  "Arctic":{
    screen:Arctic,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./assets/Arctic_change.png')}
          style = {{width:40 ,height:40,top:5,tintColor:tintColor}}
          />
      )
    }
  },
  "Desert":{
    screen:Desert,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./assets/Desert_change.png')}
          style = {{width:40 ,height:40,top:5,tintColor:tintColor}}
          />
      ),
    },
    
  },
  "Rainforest":{
    screen:Rainforest,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./assets/Rainforest.png')}
          style = {{width:40 ,height:40,top:4,left:-2,tintColor:tintColor}}
          />
      ),
    }
  }
},{
  initialRouteName: 'Arctic',
  
  tabBarOptions:{
    activeTintColor :'#f1dacc',
    inactiveTintColor :'#818181',

   labelStyle: {
    fontSize: 12,
    marginBottom:5,
    
    top:2
  },
   style:{
     backgroundColor:'#273939',
     margin:0,
     height:60,
      borderTopStartRadius:25,
      borderTopEndRadius:25,
   }
  },
});


const AppDrawerNavigator = createDrawerNavigator({
  Favorites:FavoritesScreen,
  "Tag":{
    screen:MytabNavigator,
    navigationOptions: {
      drawerIcon : ({tintColor}) => (
        <Image 
        source={require('./assets/tag.png')}
        style = {{width:30 ,height:30,marginBottom:20,marginTop:20,tintColor:tintColor}}
        />
      )
    }
    
  },
  Setting:SettingsScreen,
  SignOut:Mmo
},{
  initialRouteName: 'Tag',
  contentComponent:CustomDrawerComponent,
  drawerWidth:335,
  contentOptions:{
    activeTintColor :'#273939',
    inactiveTintColor :'#F1DACC',

   activeBackgroundColor :'#93AB98',
   inactiveBackgroundColor :'#273939',
   
  },
  index:2

})



const styles = StyleSheet.create({
  
  userinfoStyle:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:20
  },
  userinfotextStyle:{
    color:"white",
    fontSize:20,
    marginRight:120
  }
});
