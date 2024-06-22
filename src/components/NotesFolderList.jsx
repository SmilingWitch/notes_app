import { FlatList, View } from "react-native"
import NotesFolder from "./NotesFolderItem"
import NotesFolderItem from "./NotesFolderItem"

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



const NotesFolderList = () => {
    
    const renderItem = ({item}) => (
        <NotesFolderItem name = {item.name} amount = {item.amount} to = {'/note'}></NotesFolderItem>
    )


    return(
        
            <FlatList data = {data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}>

            </FlatList>
        
        

        
    )
}

export default NotesFolderList