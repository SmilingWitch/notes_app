
import { Button } from "react-native"
import NotesFolderHeader from "../components/NotesFolderHeader"
import NotesFolderList from "../components/NotesFolderList"


const NotesFolder = ({navigation}) => {
    return(
        <>
           
            <NotesFolderHeader/>
            <NotesFolderList navigation = {navigation}/>
        </>
        
    )
}




export default NotesFolder