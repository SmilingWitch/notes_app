import { View, StyleSheet, TouchableOpacity} from "react-native"
import StyledText from "./StyledText"
import Ionaicons from '@expo/vector-icons/Ionicons'
import theme from "../theme"



const NotesFolderItem = ({name, amount, navigation}) => {

    return(
        <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('Notes', {
          name: name
        })}>
          <>
          <View style = {styles.header}  >
            <Ionaicons name="folder-open-outline" style = {styles.icon}></Ionaicons>
            <StyledText >{name}</StyledText>    
          </View>
            <View>
                <StyledText style = {styles.text} fontSize = 'small' fontWeight='bold'>{amount}</StyledText>
            </View>
          </>
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
        container: {
            marginBottom: 10,
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
      header: {
        alignItems: 'center',
        flexDirection: 'row'
      },
      icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h3,
        marginRight:10
      },
      text: {
        color: theme.colors.lightGrey
    
      }
})




export default NotesFolderItem