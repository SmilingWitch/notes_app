import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import Icon from '@expo/vector-icons/Feather'
import theme from "../theme"

const NotesFolderHeader = ({navigation}) => {

    return (
        <View style = {styles.container}>
          <View style = {styles.header}>
            <TouchableOpacity onPress = {() => navigation.goBack()}>
              <Icon name = 'arrow-left' style = {styles.icon}></Icon>
            </TouchableOpacity>
           
            <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Folders</StyledText>
          </View>
            
            <TouchableOpacity onPress = {() => navigation.navigate('Note')}>
              <Icon name="plus" style = {styles.icon}></Icon>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
      container: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        paddingHorizontal: theme.padding,
        backgroundColor: theme.colors.primary
      },
      header: {
        flexDirection: 'row',
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


export default NotesFolderHeader