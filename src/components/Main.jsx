import { View, Text, StyleSheet,Dimensions } from "react-native"
import Constants from 'expo-constants'
import theme from "./theme"

import {Routes,Route, Navigate} from "react-router-native"
import NotesFolder from "../pages/NotesFolder"

const Main = () => {
    return(
        <View style = {styles.container}>
          
            
          <NotesFolder/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,

      },

})

export default Main