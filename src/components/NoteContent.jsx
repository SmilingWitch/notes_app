import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const NoteContent = ({route}) => {

    const {content} = route.params

    return(
        <View style = {styles.container}>
            <StyledText>{content}</StyledText>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: theme.padding,
    },

})

export default NoteContent