import AuthInput from "@/components/auth/AuthInput";
import { iconeAtencaoOutiline, iconeGoogle } from "@/components/icons";
import userAuth from "@/data/hook/userAuth";
import { useState } from "react";

export default function Autenticacao(){

    const {usuario,login,cadastrar, loginGoogle} =  userAuth();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(null);
    const [modo, setModo] = useState<'login'| 'cadastro'>('login');

    async function submeter(){
        try{
            if (modo === 'login'){
                await login(email,senha)
            }else{
                await cadastrar(email,senha)
                
            }
        }catch(e){
            exibirErro(e?.message ?? 'Ocorreu um erro Inesperado')
        }
        
    }

    function exibirErro(msg:any, tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(() =>setErro(null),tempoEmSegundos*1000)
    }

    return(
        
        <div className=" flex  h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2">
                <img 
                    src="https://source.unsplash.com/random" 
                    alt="Imagem da Tela de Autentificação"
                    className=" h-screen w-full object-cover"
                    />
            </div>
            <div className=" m-10  w-full md:w-1/2">
                <h1 className="text-xl font-bold mb-5">{modo=== 'login'? 'Entre com sua conta cadastada.': 'Cadastre-se para acessar.'}</h1>

                {erro ?(
                     <div className=" flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
                        {iconeAtencaoOutiline(6)} 
                        <span className=" ml-3">{erro}</span>
                     </div>
                ): false}

                <AuthInput
                    label="Email"
                    valor = {email}
                    valorMudou={setEmail}
                    tipo="email"
                    obrigatorio
                ></AuthInput>
                <AuthInput
                    label="Senha"
                    valor = {senha}
                    valorMudou={setSenha}
                    tipo="password"
                    obrigatorio
                ></AuthInput>

                <button onClick={submeter} className={` w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {modo=== 'login'? 'Entrar': 'Cadastrar'}
                </button>

                <hr className=" my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`flex items-center justify-center  w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3
                `}>
                    <div className=" mr-3 shadow-2xl">{iconeGoogle(6)}</div> Entrar com Google
                </button>

                {modo ==='login' ? (
                    <p className="mt-8">
                        Novo por aqui? 
                        <a onClick={()=>setModo('cadastro')} className=" text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Crie agora uma conta gratuitamente</a>
                    </p>
                ):(
                    <p className="mt-8">
                        Ja possui cadastro em nossa plataforma ?
                        <a onClick={()=>setModo('login')} className=" text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Entre agora com suas credenciais.</a>
                    </p>
                )}
            </div>
        </div>


    )
}