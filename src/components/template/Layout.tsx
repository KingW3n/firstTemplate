import useAppData from "@/data/hook/useAppData"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
import TopBar from "./TopBar"
import VerificarAuth from "../auth/VerificAlth"

interface LayoutProps{
    titulo:string
    subtitulo:string
    children?: any
}
export default function layout( props:LayoutProps){

    const {tema} = useAppData()

    return(
        <VerificarAuth> 
            <div className={` ${tema} flex h-screen w-screeen`}>
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
        </VerificarAuth>
       
    )
}