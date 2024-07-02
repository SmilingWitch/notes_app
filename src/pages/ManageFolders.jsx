import { View,StyleSheet, TouchableOpacity,BackHandler } from "react-native"
import ManageFolderHeader from "../components/ManageFolderHeader"
import theme from "../theme"
import NotesFolderList from "../components/NotesFolderList"
import StyledText from "../components/StyledText"
import Icon from '@expo/vector-icons/Feather'
import CreateFolder from "../components/CreateFolder"
import { useState, useEffect } from "react"


const ManageFolders = ({navigation}) => {


    const [showDialog, setShowDialog] = useState(false)

    // for close CreateFolder component when the user press back button
    useEffect(() => {

        const handleBackPress = () => {
          if (showDialog) {
            setShowDialog(false);
            return true; // Prevenir el comportamiento por defecto
          }
          return false;
        };
    
        if (showDialog) {
          BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        } else {
          BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        }
    
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }, [showDialog]);

    return(
        <View style = {styles.container}>
            <ManageFolderHeader navigation={navigation}/>
            <NotesFolderList navigation = {navigation} touch = {false}/>
            <TouchableOpacity style = {styles.create_folder} onPress = {() => setShowDialog(true)}>
                <Icon name="plus" style = {styles.icon}></Icon>
                <StyledText>Create Folder</StyledText>
            </TouchableOpacity>
            {showDialog && <CreateFolder setShowDialog = {setShowDialog} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    icon: {
        color: theme.colors.secundary,
        fontSize: theme.fontSize.h2,
        marginRight: 10
      },
    create_folder: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ManageFolders