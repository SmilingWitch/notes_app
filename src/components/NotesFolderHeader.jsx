import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import Ionaicons from '@expo/vector-icons/Ionicons'
import theme from "../theme"

const NotesFolderHeader = () => {
    return (
        <View style = {styles.header}>
            <StyledText fontSize='h1' fontWeight='bold'>My Notes</StyledText>
            <Ionaicons name = "menu" style = {styles.icon}></Ionaicons>
        </View>

    )
}

const styles = StyleSheet.create({
      header: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      },
      icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2
      }
})


export default NotesFolderHeader