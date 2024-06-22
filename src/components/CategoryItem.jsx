import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const CategoryItem = ({name, amount}) => {
    return(
        <View style = {styles.container}>
            <StyledText >{name}</StyledText>
            <View style = {styles.number} ><StyledText fontSize = 'small' style = {styles.text}>{amount}</StyledText></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: theme.colors.grey,
        borderRadius: 100,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 50,
        justifyContent: 'space-between'
    },
    number: {
        width: 25,
        height: 25,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        marginLeft: 10 ,
        
    },
    text: {
        color: theme.colors.primary
    }
})

export default CategoryItem