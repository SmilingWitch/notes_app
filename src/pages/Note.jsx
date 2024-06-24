import { View, StyleSheet } from "react-native"
import theme from "../theme"
import NoteHeader from "../components/NoteHeader"
import NoteContent from "../components/NoteContent"


const Note = () => {
    return(
        <View style = {styles.container}>
            <NoteHeader/>
            <NoteContent/>
            

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.padding,
        flex: 1
    },
    
})

export default Note