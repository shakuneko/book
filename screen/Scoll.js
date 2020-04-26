import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity,ScrollView} from "react-native";


const Scroll = () => {
    return (
        <ScrollView style={{top:30,width:360,height:580}}>

        <Image style={styles.picture1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/p4.png" }} />
        <Text style={styles.word2}>Another</Text>
        <View style={styles.square}>
            <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/s1.png" }} />
        </View>
        <View style={styles.square}>
            <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/s2.png" }} />
        </View>
        <View style={styles.square}>
            <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/s3.png" }} />
        </View>
        <View style={styles.square}>
            <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/s1.png" }} />
        </View>
        <View style={styles.square}>
            <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/s2.png" }} />
        </View>
        <View style={styles.square}>
            <Image style={styles.p1} source={{ uri: "https://raw.githubusercontent.com/shakuneko/picture2/master/s3.png" }} />
        </View>
    
    
        </ScrollView>
 );
};


const styles = StyleSheet.create({
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
        backgroundColor:"#EFEFEF",
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
});


export default Scroll;