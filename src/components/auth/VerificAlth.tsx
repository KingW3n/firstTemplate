import Image from "next/image"
import loading from '../../../public/img/loadin.gif'
import userAuth from "@/data/hook/userAuth"
import router from 'next/router'

export default function VerificarAuth(props:any){

    const {usuario,carregando}=  userAuth()

    function renderizarConteudo(){

        return(
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return(
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={loading} alt={"imagem de loading"}/>
            </div>
        )
    }

    if (!carregando && usuario?.email){
        return renderizarConteudo()
    }else if(carregando){
        return renderizarCarregando()
    }else{
       router.push('/autenticacao') 
       return null
    }
}