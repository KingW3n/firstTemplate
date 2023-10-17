import { createContext, useState } from "react";

type Tema= 'dark' | ''

interface AppContextProps {
    tema?: Tema 
    alternarTema?: () => void
    children?: any

}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppContextProps){

    const [tema, setTema] = useState<Tema>('')


    function alternarTema(){
        setTema(tema ==='' ? 'dark' : '')
        console.log('altera')
    }

    return(
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
export const AppConsumer = AppContext.Consumer