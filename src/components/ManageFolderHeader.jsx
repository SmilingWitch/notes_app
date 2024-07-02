import { TouchableOpacity, View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import Icon from '@expo/vector-icons/Feather'


const ManageFolderHeader = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name = "arrow-left" style = {styles.icon}></Icon>
            </TouchableOpacity>
            <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Manage Folders</StyledText>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      flexDirection: 'row', 
      paddingHorizontal: theme.padding,
      backgroundColor: theme.colors.primary,
      alignItems: 'center'
    },

    icon: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.h2
    },
    text: {
      marginLeft: 15
  }
})



export default ManageFolderHeader