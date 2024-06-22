import { View,StyleSheet, Dimensions } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import Icon from '@expo/vector-icons/AntDesign'


const NotesItem = ({id}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <StyledText fontSize='h2' fontWeight='bold'>Name</StyledText>
                <Icon name="pushpino" style = {styles.icon}></Icon>
            </View>
            <View style = {styles.text}>
                <StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatem facere qui suscipit architecto ipsam, consequuntur facilis voluptatibus sint accusantium iste inventore earum officiis! </StyledText> 
            </View>
            

            <View style = {styles.footer}>
                <StyledText fontSize='small'>07 APril 2024</StyledText>
                <Icon name="ellipsis1" style = {styles.icon}></Icon>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.grey,
        minHeight: 150,
        maxHeight: 300,
        width: Dimensions.get('window').width / 2.2 ,
        marginBottom: 10,
        borderRadius: 20,
        padding: 10
    },
    text : {
        marginVertical: 10
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