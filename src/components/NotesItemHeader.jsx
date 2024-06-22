import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../theme"
import { Link } from "react-router-native"
import ScrollCategories from "./ScrollCategories"

const NotesItemHeader = () => {
    return(
        <View >
            <View style = {styles.name}>
                <Link to = '/'>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </Link>
                <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Folder Name</StyledText> 
            </View>
            <View>
                <ScrollCategories/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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