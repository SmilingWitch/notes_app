import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import Icon from '@expo/vector-icons/AntDesign'

const NoteHeader = ({navigation, route}) => {

    const { name } = route.params;


    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </TouchableOpacity>
                
                <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>{name}</StyledText>
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
        fontSize: theme.fontSize.h2
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