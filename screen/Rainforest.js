import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity,ScrollView} from "react-native";


const Rainforest = () => {
    return (
        
        <View  style={{height:'100%',width:'100%',backgroundColor:"#5e7369",flex:1}}>
            <View style={styles.header}>
                <Image style={styles.hamburger} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Group%2028.png" }} />
                <Text style={{fontSize:20,color:"#f1dacc",left:-9}}>MeowMo</Text>
                <Image style={{height:30,width:30}} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/search.png" }} />
            </View>
             <View style={styles.content}>
              
                <ScrollView style={{top:30,width:360,height:580,backgroundColor:'#fff'}}>
                      <View style={styles.menu}>
                
                    <Text style={styles.word}>Arctic</Text>
                    <Text style={styles.word}>Desert</Text>
                    <Text style={styles.word1}>Rainforest</Text>
                </View>
            

                    <Image style={styles.picture1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Rainforest_Top_2.png" }} />
                    <Text style={styles.word2}>Another</Text>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Rainforest_Another_1.png" }} />
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Rainforest_Another_2.png" }} />
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Rainforest_Another_3.png" }} />
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Rainforest_Another_1.png" }} />
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Rainforest_Another_2.png" }} />
                    </View>
                    <View style={styles.square}>
                        <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/Rainforest_Another_3.png" }} />
                    </View>
        
        
            </ScrollView>
                </View>
              
               
        </View>
        
        
        );
};

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        padding:16,
 
        
    },
    hamburger:{
        width:48,
        height:48,
    },
    menu:{
        top:0,
        width:360,
        flexDirection:"row",
        
    },
    word:{
        width:100,
        fontSize:15,
        justifyContent:"space-around",
        left:40,
        fontWeight:"bold",

    },
    word1:{
        color:"#A63d40",
        width:100,
        fontSize:15,
        fontWeight:"bold",
        justifyContent:"space-around",
        left:40,
        

    },
    content:{
        backgroundColor:"#fff",
        top:0,
        width:360,
        height:590,
        borderTopStartRadius:25,
        borderTopEndRadius:25,
        elevation:10
    },
    picture1:{
        width:302,
        height:183,
        top:10,
        left:29,
        borderRadius:25,
    },
    word2:{
        fontWeight:"bold",
        fontSize:18,
        width:302,
        height:183,
        top:25,
        left:34
    },
    square:{
        justifyContent:'center',
        alignItems:"flex-start",
        backgroundColor:"#FCF8F5",
        borderRadius:10,
        width:302,
        height:85,
        top:-130,
        marginTop:10,
        left:29
    },
    p1:{
        borderRadius:10,
        width:85,
        height:85,
    },
    buttom:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    borderTopStartRadius:25,
    borderTopEndRadius:25,
    backgroundColor:"#869FB3",
    //borderWidth:1,
    //borderColor:"#1E87B0",
    top:-88,
    width:360,
    height:60,
    elevation:11
   },
   icon:{
    alignItems:"center",
    justifyContent:"center",
   }


});


export default Rainforest;