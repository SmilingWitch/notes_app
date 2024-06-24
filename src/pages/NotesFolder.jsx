
import { Button } from "react-native"
import NotesFolderHeader from "../components/NotesFolderHeader"
import NotesFolderList from "../components/NotesFolderList"
import { View, StyleSheet } from "react-native"
import theme from "../theme"


const NotesFolder = ({navigation, route}) => {
    return(
        <View style = {styles}>
            <NotesFolderHeader navigation = {navigation}  route = {route}/>
            <NotesFolderList navigation = {navigation}  route = {route}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: theme.colors.primary
})

export default NotesFolder