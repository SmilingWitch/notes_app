import { Text, View, StyleSheet } from "react-native"
import Appbar from '../components/Appbar'

import NotesList from "../components/NotesList"
import NotesItemHeader from "../components/NotesItemHeader"
import theme from "../theme"


const Notes = ({route,navigation}) => {


    return(
        <View style={styles.container}>
            <NotesItemHeader navigation = {navigation} route = {route}></NotesItemHeader>
            <NotesList navigation = {navigation} route = {route}/>
            <Appbar navigation = {navigation}></Appbar>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: theme.colors.primary
    } 
   });

export default Notes