import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../theme"


const Appbar = () => {
    return(
        <View style = {styles.container}>
            <Icon name = "home" style = {styles.icon}></Icon>
            <View style = {styles.icon_pluss}>
                <Icon name = "plus" style = {styles.icon}></Icon>
            </View>
            
            <Icon name = "search1" style = {styles.icon}></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.grey,
        height: 60,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: theme.fontSize.h2,
        color: theme.colors.textPrimary
    },
    icon_pluss:{
        fontSize: theme.fontSize.h2,
        backgroundColor: theme.colors.secundary,
        width: 50,
        height: 50,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000
        
    }
})

export default Appbar