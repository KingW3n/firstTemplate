import useAppData from '../../data/hook/useAppData'
import AvatarUsuario from './AvatarUsuario'
import BotaoAlterarTema from './Botoes/BotaoAlternarTema'
import Titulo from './Titulo'

interface TopBarProps{
    titulo:string
    subtitulo:string
}
export default function TopBar( props:TopBarProps){
    const {tema, alternarTema} = useAppData()
    console.log(tema)
    return(
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlterarTema tema={tema} alternarTema={alternarTema}></BotaoAlterarTema>
                <AvatarUsuario className='ml-3'></AvatarUsuario>
            </div>
        </div>
    )
}