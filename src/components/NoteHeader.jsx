import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import Icon from '@expo/vector-icons/AntDesign'

const NoteHeader = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <Icon name = "arrowleft" style = {styles.icon}></Icon>
                <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Untiteled Note</StyledText>
            </View>
            <View>
                <Icon name = "check" style = {styles.icon}></Icon>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: theme.padding
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h3
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 15
    },
    

})

export default NoteHeader