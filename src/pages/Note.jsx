import { View, StyleSheet } from "react-native"
import theme from "../theme"
import NoteHeader from "../components/NoteHeader"
import NoteContent from "../components/NoteContent"
import FormatingBar from "../components/FormatingBar"
import { useRef } from "react"


const Note = ({navigation, route}) => {
    return(
        <View style = {styles.container}>
            <NoteHeader navigation = {navigation} route = {route} />
            <NoteContent route = {route} />
            {/*<FormatingBar onFormat={handleFormat}/>*/}
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    
})

export default Note