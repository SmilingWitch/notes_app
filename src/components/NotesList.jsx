import { FlatList, StyleSheet, useWindowDimensions } from "react-native"
import NotesItem from "./NotesItem"
import { useEffect, useState } from "react";
import theme from "../theme";

const data = [
    {
        id: 1,
        name: 'All',
        amount: 100
    },
    {
        id: 2,
        name: 'Novel',
        amount: 20
    },
    {
        id: 3,
        name: 'Lists',
        amount: 5
    },
    {
        id: 4,
        name: 'Exercise',
        amount: 10
    },
    {
        id: 5,
        name: 'Books',
        amount: 3
    }
]

const NotesList = () => {

    const { width } = useWindowDimensions();
    const [numColumns, setNumColumns] = useState(2);

    useEffect(() => {
      // Calcula el número de columnas basado en el ancho de la pantalla
      const cols = Math.floor(width / 100); // Ajusta el divisor según tus necesidades
      setNumColumns(2);
    }, [width]);

    const renderItem = ({item}) => (
        <NotesItem id = {item.id} to = '/note'></NotesItem>
    )

    return(
        <FlatList
            data = {data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            key={`myFlatList-${numColumns}`} // Actualiza la clave aquí
            numColumns={numColumns}
            columnWrapperStyle={styles.container}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: 'space-between',
       paddingHorizontal: theme.padding
    }
})

export default NotesList