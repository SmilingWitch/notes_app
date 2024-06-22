import { View, Text, StyleSheet,Dimensions } from "react-native"
import Constants from 'expo-constants'
import theme from "../theme"

import {Routes,Route, Navigate} from "react-router-native"
import NotesFolder from "../pages/NotesFolder"
import Notes from "../pages/Notes"

const Main = () => {
    return(
        <View style = {styles.container}>
          
            <Routes>
              <Route path = '/' element = {<NotesFolder/>}/>
              <Route path = '/note' element = {<Notes/>}/>
            </Routes>
          
            
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