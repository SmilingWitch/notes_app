import { Dimensions, FlatList, StyleSheet, View, useWindowDimensions } from "react-native"
import NotesItem from "./NotesItem"
import { useEffect, useState } from "react";
import theme from "../theme";
import StyledText from "./StyledText";
import { useMemo } from 'react';

const data = [
    {
        id: 1,
        category: 'Books',
        name: 'Lorem 1',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 2,
        category: 'Exercise',
        name: 'Lorem 2',
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        id: 3,
        category: 'Lists',
        name: 'Lorem 3',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 4,
        category: 'Novel',
        name: 'Lorem 4',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 5,
        category: 'Books',
        name: 'Lorem 5',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 6,
        category: 'Books',
        name: 'Lorem 6',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 7,
        category: 'Exercise',
        name: 'Lorem 7',
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        id: 8,
        category: 'Lists',
        name: 'Lorem 8',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 9,
        category: 'Novel',
        name: 'Lorem 9',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 10,
        category: 'Books',
        name: 'Lorem 10',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 11,
        category: 'Novel',
        name: 'Lorem 11',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
]

const NotesList = ({navigation, route}) => {
    const { name } = route.params;
    const { width } = useWindowDimensions();
    const [numColumns, setNumColumns] = useState(2);


    // Memoriza los datos filtrados usando useMemo
    const filteredData = useMemo(() => {
        if (name === 'All') {
            return data;
        }
        return data.filter(item => item.category === name);
    }, [name, data]);


    useEffect(() => {
      // Calcula el número de columnas basado en el ancho de la pantalla
      const cols = Math.floor(width / 100); // Ajusta el divisor según tus necesidades
      setNumColumns(2);
    }, [width]);

    const renderItem = ({item}) => (
        <NotesItem id={item.id} navigation={navigation} name={item.name} content={item.content} />   
    )

    return(
        <FlatList
            data = {filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            key={`myFlatList-${numColumns}`} // Actualiza la clave aquí
            numColumns={numColumns}
            columnWrapperStyle={styles.containerWrapp}
            contentContainerStyle = {styles.container}
            ListEmptyComponent={
                <StyledText>
                    List is empty
                </StyledText>
            }
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    containerWrapp:{
       justifyContent: 'space-between',
       paddingHorizontal: theme.padding,

    },
    container: {
        backgroundColor: theme.colors.primary,
    },

})

export default NotesList