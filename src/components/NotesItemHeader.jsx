import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../theme"
import ScrollCategories from "./ScrollCategories"

const NotesItemHeader = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <TouchableOpacity to = '/'>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </TouchableOpacity>
                <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Folder Name</StyledText> 
            </View>
            <View>
                <ScrollCategories/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: theme.padding
    
    },
    text: {
        marginLeft: 15
    }

})

export default NotesItemHeader