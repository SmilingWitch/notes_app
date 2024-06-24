import { View, StyleSheet, TouchableOpacity, Dimensions} from "react-native"
import StyledText from "./StyledText"
import Ionaicons from '@expo/vector-icons/Ionicons'
import theme from "../theme"



const NotesFolderItem = ({name, amount, navigation}) => {

    return(
        <TouchableOpacity style = {styles.container}  onPress={() => navigation.navigate('Notes', {
          name: name
        })}>
          <>
          <View style = {styles.header}>
                <StyledText fontSize='h3'>{name}</StyledText>
                <Ionaicons name="chevron-forward" style = {styles.icon}></Ionaicons>
            </View>
            <View>
                <StyledText style = {styles.text} fontWeight='bold'>{amount}</StyledText>
            </View>
          </>
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.grey,
            height: 150,
            marginBottom: 10,
            padding: 20,
            justifyContent: 'space-between',
            borderRadius: 20,
        },
      header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      },
      icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h3
      },
      text: {
        fontSize: 80,
    
      }
})




export default NotesFolderItem