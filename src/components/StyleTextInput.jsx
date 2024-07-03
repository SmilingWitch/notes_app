import { TextInput, StyleSheet } from "react-native"
import theme from "../theme"
import { useEffect, useRef } from "react";



const StyledTextInput = ({style = {}, error,color, fontSize, fontWeight,header, ...props}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);



    const inputStyles = [
        styles.textInput,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontSize === 'h1' && styles.h1,
        fontSize === 'h2' && styles.h2,
        fontSize === 'h3' && styles.h3,
        fontSize === 'small' && styles.small,
        fontWeight === 'bold' && styles.bold,
        style,
    ]
    return(
        <TextInput 
                  style = {inputStyles} 
                  {...props} 
                  ref= {header && inputRef} 
                  editable 
                  multiline 
                  inputMode="text"
                  textAlignVertical="top"></TextInput>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderColor: theme.colors.primary,
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
     },
     error: {
        borderColor: 'red'
     },
     colorPrimary: {
        color: theme.colors.textPrimary,
        
    },
    colorSecundary: {
        color: theme.colors.primary
    },
    h1: {
        fontSize: theme.fontSize.h1
    },
    h2: {
        fontSize: theme.fontSize.h2
    },
    h3: {
        fontSize: theme.fontSize.h3
    },
    regular: {
        fontSize: theme.fontSize.regular,
        fontWeight: theme.fontWeight.normal,
        color: theme.colors.textPrimary
    },
    small: {
        fontSize: theme.fontSize.small
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    }
})


export default StyledTextInput