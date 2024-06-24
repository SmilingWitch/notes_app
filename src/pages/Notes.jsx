import { Text } from "react-native"


import NotesList from "../components/NotesList"
import NotesItemHeader from "../components/NotesItemHeader"

const Notes = () => {
    return(
        <>
            <NotesItemHeader></NotesItemHeader>
            <NotesList/>
        </>
        
    )
}

export default Notes