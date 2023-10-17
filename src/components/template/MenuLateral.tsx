import { iconeAjustesOutline, iconeBellOutline, iconeCasautline, iconeSairOutline  } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return(
        <aside className={`
            flex  flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={` 
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800 
                h-20 w-20 `}>
                <Logo></Logo>
            </div>
            <ul className=" flex-grow">
                <MenuItem 
                    url="/"
                    texto="inicio"
                    icone={iconeCasautline }
                ></MenuItem>
                <MenuItem 
                    url="/ajustes"
                    texto="Ajustes"
                    icone={iconeAjustesOutline }
                ></MenuItem>
                <MenuItem 
                    url="/notificacoes"
                    texto="Notificações"
                    icone={iconeBellOutline }
                ></MenuItem>
            </ul>
            <ul className="">
                <MenuItem 
                    texto="Sair"
                    icone={iconeSairOutline }
                    onClick={() => console.log('Sair')}
                    clasName={` 
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                        `}
                ></MenuItem>
            </ul>
        </aside>
    )
}