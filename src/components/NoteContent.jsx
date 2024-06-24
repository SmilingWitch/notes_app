import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const NoteContent = () => {
    return(
        <View style = {styles.container}>
            <StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit dolorum praesentium ipsa nam vitae necessitatibus earum nobis, quibusdam saepe est pariatur eos inventore. Non eos autem magnam? Optio, consequuntur.</StyledText>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: theme.colors.primary
    },

})

export default NoteContent