import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
const image= {uri:"https://raw.githubusercontent.com/shakuneko/picture2/master/arctic.png"}
class FavoritesScreen extends Component {
  
    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
          <Image 
          source={require('../assets/icon_drawer_favorites.png')}
          style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
          />
        )
      }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} >
        <Text style={styles.title}>Arctic</Text>
        <TouchableOpacity
                       onPress={() => navigation.goBack()}>
                    
                   </TouchableOpacity>
        </ImageBackground>
    </View>

    );
};

    
  }



export default FavoritesScreen;

const styles = StyleSheet.create({
  container3: {
    backgroundColor: '#00b49f',
  },
  container:{
    flex:1,
    flexDirection:"column",
},
image:{
    flex:1,
    resizeMode:"cover",
    width:360
},
title:{
    color:"#04519f",
    fontFamily:"Roboto",
    fontSize:25,
    fontWeight:"bold",
    top:25,
    left:25

}

});