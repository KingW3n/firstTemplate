import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
import TopBar from "./Titulo"

interface LayoutProps{
    titulo:string
    subtitulo:string
    children?: any
}
export default function layout( props:LayoutProps){
    return(
        <div className={`flex h-screen w-screeen`}>
            <MenuLateral></MenuLateral>
            <div className={`
                flex 
                flex-col 
                w-full 
                p-7 
                bg-gray-300 dark:bg-gray-900
            `}>
                <TopBar titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}