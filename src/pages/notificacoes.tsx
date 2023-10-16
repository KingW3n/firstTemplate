import Layout from "../components/template/Layout"
import useAppData from "@/data/hook/useAppData"

export default function Home() {

  const ctx = useAppData()
  return (
    <Layout 
      titulo='Notificações' 
      subtitulo= 'Aqui voce ira gerenciar as suas noticações. ' >
        <button onClick={ctx.alternarTema}> Alterar Tema</button>
    </Layout>
  )
}
