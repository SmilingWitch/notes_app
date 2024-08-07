import { FlatList, StyleSheet } from "react-native"
import NotesFolder from "./NotesFolderItem"
import NotesFolderItem from "./NotesFolderItem"
import theme from "../theme"
import NotesFolderItemWithoutTouch from "./NotesFolderItemWithoutTouch"

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



const NotesFolderList = ({navigation, touch}) => {
    
    const renderItem = ({item}) => (
        touch === true ? <NotesFolderItem name = {item.name} amount = {item.amount} navigation = {navigation}/>:
                          <NotesFolderItemWithoutTouch name = {item.name} amount = {item.amount}/>
    )


    return(
            <FlatList data = {data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style = {styles}>
            </FlatList>
    )
}

const styles = StyleSheet.create({
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.padding
})

export default NotesFolderList