import { useState } from "react"
import { Link } from "react-router-dom"

const Header= () => {
    const [theme, setTheme] = useState('black')
    const [lang, setLang] = useState('')


    return (
        <header>
            <button onClick={() => setTheme(theme === 'black' ? 'white' : 'black')}>Theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/create'}>Create Page</Link>


        </header>
    )
}

export default Header