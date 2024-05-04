import { useMemo, useRef, useState } from 'react'
import api from '../../Api'
import axios from 'axios'

const useListaNiveis = () => {
 
    const [nivel, setNivel] = useState(0)
    const [aulas, setAulas] = useState([])
    const qtdAulas = useRef(0)

    useMemo(() => {
        axios.get(`${api}/homeEstudo`)
            .then(res => { 
                let niveis = res.data;
                niveis.forEach((dados) => {
                    if(dados.nivel === nivel){
                        setAulas(dados.aula.split(','))
                    }
                })
            })
    }, [nivel])

    qtdAulas.current = parseInt(aulas.length)

    return {
        qtdAulasPorNivel: qtdAulas.current,
        setNivel
    }
}

export default useListaNiveis

