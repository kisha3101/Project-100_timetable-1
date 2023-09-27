import React, {Component} from "react";
import {Text,View , Image,StyleSheet} from "react-native";

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Time Table</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffb3d9"
    },
    textFont:{
        color:"white",
       flex:1,
       textAlign:"center",
       borderTopWidth:300
        
    }
})