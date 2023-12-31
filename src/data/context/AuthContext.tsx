import { createContext, useEffect, useState } from "react";
import route from 'next/router';
import firebase from "../../firebase/config";
import Usuario from "@/model/Usuario";
import Cookies from 'js-cookie';

interface AuthCOntextProps{
    usuario?:Usuario
    carregando?:boolean
    loginGoogle?:() => Promise<void>
    logout?:() => Promise<void>
}

const AuthContext = createContext<AuthCOntextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{

    const token = await usuarioFirebase.getIdToken()

    return{
        uid:usuarioFirebase.uid,
        nome:usuarioFirebase.displayName,
        email:usuarioFirebase.email,
        token,
        proverdor: usuarioFirebase.providerData[0]?.providerId,
        imageUrl:usuarioFirebase.photoURL
    }
}

function gerenciarCookie(logado: boolean){
    if (logado){
        Cookies.set('admin-template-firs-auth', logado,{
            expires:7
        })
    }else{
        Cookies.remove('admin-template-firs-auth')
    }
} 

export function AuthProvider(props){

    const [usuario,setUsuario] = useState<Usuario>(null)
    const [carregando,setCarregando] = useState(true)
    
    async function configurarSessao(usuarioFirebase){
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario (usuario)
            setCarregando(false)
            gerenciarCookie(true);
            return usuario.email
        }else{  
            setUsuario (null)
            setCarregando(false)
            gerenciarCookie(false)
            return false
        }
    }

    async function loginGoogle() {
       try{
            setCarregando(true)

            const resp = await firebase.auth(). signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            configurarSessao(resp.user)
            route.push('/')   
       }finally{
            setCarregando(false )
       }
    }

    async function logout (){
        console.log('oi')
        try{
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        }finally{
            setCarregando(false)
        }
    }

    useEffect(()=>{
        if(Cookies.get('admin-template-firs-auth')){
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return() => cancelar()
        }else{
            setCarregando(false)
        }
    },[])

    return (
        <AuthContext.Provider value={{
            usuario, carregando,loginGoogle, logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext