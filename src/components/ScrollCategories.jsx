import { FlatList, StyleSheet } from "react-native"
import CategoryItem from "./CategoryItem"
import theme from "../theme"

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



const ScrollCategories = () => {

    const renderItem = ({item}) => (
        <CategoryItem name = {item.name} amount = {item.amount}></CategoryItem>
    )


    return(
        <FlatList
        renderItem={renderItem}
        data = {data}
        keyExtractor={(item) => item.id}
        horizontal
        style = {styles.container}
        />

        
    )
}


const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingHorizontal: theme.padding
    }
})

export default ScrollCategories