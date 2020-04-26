import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity} from "react-native";


const image= {uri:"https://raw.githubusercontent.com/shakuneko/picture2/master/arctic.png"}

const Introduction = ({ navigation }) => {
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

const styles = StyleSheet.create({
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
 
  
export default Introduction;