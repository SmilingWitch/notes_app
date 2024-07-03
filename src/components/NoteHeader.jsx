import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import Icon from '@expo/vector-icons/AntDesign'
import { useState } from "react"
import StyledTextInput from "./StyleTextInput"

const NoteHeader = ({navigation, route}) => {

    const { name } = route.params;
    const [header, setHeader] = useState(name)

    console.log(header)

    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </TouchableOpacity>

                <StyledTextInput
                    style={styles.input}
                    name = 'header'
                    value={header}
                    multiline
                    onChangeText={setHeader}
                    fontSize='h2' fontWeight='bold'
                />

            </View>
            <View>
                <Icon name = "check" style = {styles.icon}></Icon>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: theme.padding
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2,
        marginRight: 15
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 15
    },
    

})

export default NoteHeader