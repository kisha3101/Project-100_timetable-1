import React, { Component } from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./homeScreen";
import TimeTable from "./TimeTable";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator(); 

export default class TabNavigator extends Component{
    render(){
        return(
            <Tab.Navigator style = {styles.bottomTabNavigator}
            labeled={true}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                  } else if (route.name === "TimeTable") {
                    iconName = focused ? "add-circle" : "add-circle-outline";
                  }
                  return (
                    <Ionicons
                      name={iconName}
                      size={RFValue(25)}
                      color={color}
                      style={styles.icons}
                    />
                  );
                }
              })}
             >
                <Tab.Screen name = "Home" component={HomeScreen} />
                <Tab.Screen name = "TimeTable" component={TimeTable} />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabNavigator:{
        backgroundColor:"#0000ff",
        position:"absolute",
        height:"9%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow:"scroll",
    }
})