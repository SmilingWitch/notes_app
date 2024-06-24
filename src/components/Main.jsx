import { View, Text, StyleSheet,Dimensions } from "react-native"
import Constants from 'expo-constants'
import NotesFolder from "../pages/NotesFolder"
import Notes from "../pages/Notes"
import Note from "../pages/Note"
import Appbar from "./Appbar"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Main = () => {
    return(
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="NotesFolder"
                        component={NotesFolder} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="Notes" 
                        component={Notes} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="Note" 
                        component={Note} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <Appbar />
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


        