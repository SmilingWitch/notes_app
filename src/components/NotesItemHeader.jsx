import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../theme"
import { Link } from "react-router-native"

const NotesItemHeader = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <Link to = '/'>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </Link>
                
                <StyledText fontSize='h1' fontWeight='bold' style = {styles.text}>Header</StyledText> 
            </View>
            <Icon name = "search1" style = {styles.icon}></Icon>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
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

export default NotesItemHeader