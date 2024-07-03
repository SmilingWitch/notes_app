import { View, StyleSheet, TextInput, ScrollView } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import { useEffect, useRef, useState } from "react"
import StyledTextInput from "./StyleTextInput"


const NoteContent = ({route}) => {

    const {content} = route.params

    const [input, setInput] = useState(content)


    return(
        <View style = {styles.container}>
             <StyledTextInput
        style={styles.input}
        name = 'content'
        value={input}
        multiline
        onChangeText={setInput}
        header
      />
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
    input: {
        color: theme.colors.textPrimary,
    }

})

export default NoteContent