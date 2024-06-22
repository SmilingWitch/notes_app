import { View, StyleSheet } from "react-native"
import StyledText from "../components/StyledText"
import theme from "../theme"
import NoteHeader from "../components/NoteHeader"
import Icon from '@expo/vector-icons/AntDesign'

import { Link } from "react-router-native"
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