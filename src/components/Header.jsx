import { Link } from "react-router-dom"
import { useLangContext } from "../Contexts/LangContext"

 const Header = () => {
    const {lang, toggleLang} = useLangContext()

    return (
        <header>
            <button onClick={toggleLang}> Current Language: {lang}</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/create'}>Create Page</Link>
        </header>
    )
 }

 export default Header