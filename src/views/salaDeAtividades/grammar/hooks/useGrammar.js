import Axios from 'axios'
import { useContext, useState } from 'react'
import api from '../../../../Api'
import { UserContext } from '../../../../components/utils/UserContext'

export default function useGrammar(){
    const [grammar, setGrammar] = useState({
        titulo: '',
        introducao: '',
        texto: '',
        conclusao: '',
        exemplo: ''
    })

    const PRIMEIRO_ITEM = 0
    const {user} = useContext(UserContext)
    const nivel = user.userNivelAtual
    const aula = user.userAulaAtual

    const conteudoAtual = {
        nivel,
        aula
    }

    const getGrammar = async () =>{
        await Axios.post(`${api}/grammar`,{
            nivel: conteudoAtual.nivel,
            aula: conteudoAtual.aula
        }).then(response=>{
            console.log('response.data. (Everything went smoothly we got the grammar data)\n' + response)
            setGrammar({
                titulo: response.data[PRIMEIRO_ITEM].titulo,
                introducao: response.data[PRIMEIRO_ITEM].introducao,
                texto: response.data[PRIMEIRO_ITEM].texto,
                conclusao: response.data[PRIMEIRO_ITEM].conclusao,
                exemplo: response.data[PRIMEIRO_ITEM].exemplo
            })
        }).catch(error=>{
            console.error('error.response.data (Something went wrong it seems we didn\'t find the grammar data)\n' + error)
        })  
    }

    if(grammar.titulo === ''){
        getGrammar()
    }

    return {grammar}
}
