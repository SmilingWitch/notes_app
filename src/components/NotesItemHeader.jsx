
import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../theme"
import ScrollCategories from "./ScrollCategories"


const NotesItemHeader = ({route,navigation}) => {

    return(
        <View style = {styles.container}>

            <View style = {styles.header}>
                <View style = {styles.name}>
                    <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Fast Notes</StyledText> 
                </View>
                {/*<TouchableOpacity>
                    <Icon name = "ellipsis1" style = {styles.icon}></Icon>
                </TouchableOpacity>*/}
            </View>
            
            <View>
                <ScrollCategories navigation = {navigation} route = {route}/>
            </View>

            
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: theme.padding
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    

})

export default NotesItemHeader