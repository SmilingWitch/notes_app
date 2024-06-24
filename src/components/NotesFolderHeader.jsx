import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../theme"

const NotesFolderHeader = () => {
    return (
        <View style = {styles.header}>
            <StyledText fontSize='h2' fontWeight='bold'>Folders</StyledText>
            <Icon name="ellipsis1" style = {styles.icon}></Icon>
        </View>

    )
}

const styles = StyleSheet.create({
      header: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        paddingHorizontal: theme.padding,
        backgroundColor: theme.colors.primary
      },
      icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2
      }
})


export default NotesFolderHeader