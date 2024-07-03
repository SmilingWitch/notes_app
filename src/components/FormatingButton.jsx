import { TouchableOpacity, StyleSheet } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome'
import theme from "../theme"

const FormatingButton = ({name, ...prop}) => {
    return (
        <TouchableOpacity style = {styles.container} {...prop}>
            <Icon name = {name} style = {styles.icon} ></Icon>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 40,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
    
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.regular,
        marginHorizontal: 10,
        
        
      }
      
})

export default FormatingButton