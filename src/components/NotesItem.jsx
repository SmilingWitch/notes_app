import { View,StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import Icon from '@expo/vector-icons/AntDesign'



const NotesItem = ({ id, navigation, name, content, date}) => {
    return(
        <TouchableOpacity style = {styles.container} onPress = {() => {navigation.navigate('Note', {name: name, content: content})}}>
            <View>
                <View style = {styles.header}>
                    <StyledText fontSize='h2' fontWeight='bold'>{name}</StyledText>
                    <Icon name="pushpino" style = {styles.icon}></Icon>
                </View>
                <View style = {styles.text}>
                    <StyledText>{content}</StyledText> 
                </View>

            </View>
                
            <View style = {styles.footer}>
                <StyledText fontSize='small'>{date}</StyledText>
                <Icon name="ellipsis1" style = {styles.icon}></Icon>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.grey,
        minHeight: 150,
        maxHeight: 200,
        width: Dimensions.get('window').width / 2.2 ,
        marginBottom: 12,
        borderRadius: 20,
        padding: 10,
        justifyContent: 'space-between'
    },
    text : {
        marginVertical: 10,
        minHeight: 80,
        maxHeight: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        color: theme.colors.secundary,
        fontSize: theme.fontSize.h3,
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        alignItems: 'center'
      }
})

export default NotesItem