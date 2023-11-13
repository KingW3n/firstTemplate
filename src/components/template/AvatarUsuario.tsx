import userAuth from "@/data/hook/userAuth";
import Link from "next/link";

interface AvatarUsuarioProps{
    className?: string
}

export default function AvatarUsuario(props:AvatarUsuarioProps){

    const{usuario} = userAuth();

    return(
       <Link href="/perfil">
        <img src={usuario?.imageUrl ?? '/img/01.svg'} 
            alt=  "Avatar do Usuário"
            className={`
                h-10 w-10  rounded-full cursor-pointer
                ${props.className}
            `}
        />
       </Link> 
    )
}