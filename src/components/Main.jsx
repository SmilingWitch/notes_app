
import { View, StyleSheet} from "react-native"
import Constants from 'expo-constants'
import NotesFolder from "../pages/NotesFolder"
import Notes from "../pages/Notes"
import Note from "../pages/Note"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageFolders from "../pages/ManageFolders"

const Stack = createNativeStackNavigator();

const Main = () => {
    return(
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen 
                        name="Notes" 
                        component={Notes} 
                        initialParams={{ name: 'All'}}
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="NotesFolder"
                        component={NotesFolder} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="ManageFolders"
                        component={ManageFolders} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    
                    <Stack.Screen 
                        name="Note" 
                        component={Note} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      },

})

export default Main


        