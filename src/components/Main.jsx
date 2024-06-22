import { View, Text, StyleSheet,Dimensions } from "react-native"
import Constants from 'expo-constants'
import {Routes,Route, Navigate} from "react-router-native"
import NotesFolder from "../pages/NotesFolder"
import Notes from "../pages/Notes"
import Note from "../pages/Note"
import Appbar from "./Appbar"

const Main = () => {
    return(
        <View style = {styles.container}>

            <Routes>
              <Route path = '/' element = {<NotesFolder/>}/>
              <Route path = '/notes' element = {<Notes/>}/>
              <Route path = '/note' element = {<Note/>}></Route>
            </Routes>
            <Appbar/>
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