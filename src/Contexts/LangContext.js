import { createContext, useContext, useMemo, useState } from "react"

export const langOptions = {
    Geo: 'თასქების ლისტის აპლიკაცია, ახალი დავალებების შექმნის ფუნქციით',
    En: 'todo list app with the function of creating new tasks'
}

const LangContext = createContext(null)

const LangContextProvider = ({children}) => {
    const [lang, setLang] = useState(true)

    const contextValue = useMemo(() => ({
        lang: lang ? 'Geo' : 'En',
        toggleLang: () => setLang((prev) => !prev)
    }))

    return <LangContext.Provider value={contextValue}>
        {children}
    </LangContext.Provider>
}

export const useLangContext = () => {
    const contextValue = useContext(LangContext)
    if(!contextValue) throw new Error('Your component is outside')

    return contextValue
}

export default LangContextProvider