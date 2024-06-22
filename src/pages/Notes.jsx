import { Text } from "react-native"
import { Link } from "react-router-native"

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