import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import { Link } from "react-router-native"
import theme from "../theme"
import Icon from '@expo/vector-icons/AntDesign'

const NoteHeader = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <Link to = '/'>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </Link>
                <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Untiteled note</StyledText> 
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
        fontSize: theme.fontSize.h2
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    
    },
    text: {
        marginLeft: 15
    }

})

export default NoteHeader