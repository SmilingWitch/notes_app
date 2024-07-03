import { View, StyleSheet, TextInput, ScrollView, Button, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import { useEffect, useImperativeHandle, useRef, useState } from "react"
import StyledTextInput from "./StyleTextInput"
import { Keyboard } from "react-native"
import FormatingButton from "./FormatingButton"


const NoteContent = ({route}) => {

    const {content} = route.params

    const [input, setInput] = useState(content)

    //Select fraction of text
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    

      const handleFormat = (style) => {
        const start = selection.start;
        const end = selection.end;
        const selectedText = input.slice(start, end);
        const beforeText = input.slice(0, start);
        const afterText = input.slice(end);
  
        let formattedText = selectedText;
  
        switch (style) {
          case 'bold':
            formattedText = `**${selectedText}**`;
            break;
          case 'italic':
            formattedText = `*${selectedText}*`;
            break;
          case 'resalt':
            formattedText = `<u>${selectedText}</u>`;
            break;
          default:
            break;
        }
  
        setInput(`${beforeText}${formattedText}${afterText}`);
    }
    

      console.log(selection)

  

      const applyStyles = (text) => {
        const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|<u>.*?<\/u>)/g); // Divide el texto por las etiquetas de estilo

        console.log("parts",parts)
        return parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <Text key={index} style={{ fontWeight: 800 }}>{part.slice(2, -2)}</Text>;
          } else if (part.startsWith('*') && part.endsWith('*')) {
            return <Text key={index} style={{ fontStyle: 'italic' }}>{part.slice(1, -1)}</Text>;
          } else if (part.startsWith('<u>') && part.endsWith('</u>')) {
            return <Text key={index} style={{ backgroundColor: 'grey' }}>{part.slice(3, -4)}</Text>;
          } else {
            
            return part;
            
          }
          
        });
      };


     


    return(
            <View style={styles.container}>
                <StyledTextInput
                    style={styles.input}
                    name='content'
                    multiline
                    onChangeText={setInput}
                    onSelectionChange={({ nativeEvent: { selection } }) => setSelection(selection)}
                    selection={selection} 
                    header
                    selectedTextStyle
                >{applyStyles(input)}</StyledTextInput>


      <View  >
            <ScrollView horizontal style = {styles.scroll_container}>
            <View style = {styles.icon_bx}>
                <FormatingButton name = 'bold' onPress={() => handleFormat('bold')}/>
                <FormatingButton name = 'italic' onPress={() => handleFormat('italic')}/>
                <FormatingButton name = 'circle' onPress={() => handleFormat('resalt')}/>
                <FormatingButton name = 'text-height' onPress={() => handleFormat('height')}/>
            </View>
            <View style = {styles.icon_bx}>
                <FormatingButton name = 'check-square-o' onPress={() => handleFormat('to-do-list')}> </FormatingButton>
                <FormatingButton name = 'list-ul' onPress={() => handleFormat('list-binetas')}/>
                <FormatingButton name = 'list-ol' onPress={() => handleFormat('enum-list')}/>
                
            </View>
            <View style = {styles.icon_bx}>
                <FormatingButton name = 'align-justify' onPress={() => handleFormat('justify')}/>
                <FormatingButton name = 'align-left' onPress={() => handleFormat('aling-left')}/>
                <FormatingButton name = 'align-right' onPress={() => handleFormat('aling-right')}/>
            </View>
            <View style = {styles.icon_bx}>
                <FormatingButton name = 'rotate-right' onPress={() => handleFormat('back')}/>
                <FormatingButton name = 'rotate-left' onPress={() => handleFormat('behind')}/>
            </View>
        </ScrollView>
        </View>  
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: theme.padding,
    },
    scroll_container: {
        height: 50,
        borderRadius: 10,
        marginBottom: 3
        
      },
      icon_bx: {
          flexDirection: 'row',
          backgroundColor: theme.colors.grey,
  
          margin: 3 ,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10
      },
      touchable: {
          position: 'relative',
          height: 40,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
      },
      icon: {
          color: theme.colors.textPrimary,
          fontSize: theme.fontSize.regular,
          marginHorizontal: 10
        },
    input: {
        color: theme.colors.textPrimary,
        
    }

})

export default NoteContent