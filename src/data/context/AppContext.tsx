import { createContext, useEffect, useState } from "react";

//type Tema= 'dark' | ''

interface AppContextProps {
    tema?: string 
    alternarTema?: () => void
    children?: any

}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppContextProps){

    const [tema, setTema] = useState('')


    function alternarTema(){
        const novoTema = tema ==='' ? 'dark' : '';
        setTema(novoTema)
        localStorage.setItem('tema',novoTema)
    }


    useEffect(()=>{
        const  temaLocalStorege = localStorage.getItem('tema')
        setTema(temaLocalStorege);
    })

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