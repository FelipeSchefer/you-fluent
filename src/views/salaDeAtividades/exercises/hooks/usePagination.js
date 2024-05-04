import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import api from '../../../../Api'
import Axios from 'axios'
import { UserContext } from '../../../../components/utils/UserContext'
import useListaNiveis from '../../../../components/hooks/useListaNiveis'

const usePagination = ({postPerPage, totalPosts, paginate, exercicioRespondido}) => {
  const {
    qtdAulasPorNivel,
    setNivel
  } = useListaNiveis()

  const pageNumber = []
  const {user, setUser} = useContext(UserContext)
  const nivel = parseInt(user.userNivelAtual)
  const aula = parseInt(user.userAulaAtual)
  let URL_Navigate = useNavigate()

  const [exercicioClicado    , setExercicioClicado    ] = useState(1)
  const [liberaDivToast      , setLiberaDivToast      ] = useState(false)
  const [qtdRespostasCorretas, setQtdRespostasCorretas] = useState(0)
  const bloqueiaDiv = useRef(true)
  const liberaDiv = useRef(false)
  const liberaProximoNivel = useRef(false)
  const liberaProximaAula = useRef(false)
  const liberaPontuacao = useRef(false)

  useEffect(() => {
    setNivel(nivel)
  }, [])

  for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){pageNumber.push(i)}

  const exerciciosSelecionado =(numero, lado)=>{
    let soma = 0
    
    if(numero === exercicioClicado && lado === 'anterior'){
      soma = numero - 1
      if(soma <= 0) soma = 1
      setExercicioClicado(soma)
      paginate(soma)
    }

    if(numero === exercicioClicado && lado === 'proximo'){
      soma = numero + 1
      if(numero === pageNumber[pageNumber.length -1]) soma = pageNumber.length 
      setExercicioClicado(soma)
      paginate(soma)
    }

    if(lado === 'active'){
      setExercicioClicado(numero)
      paginate(numero)
    }
  }

  let count = 0
  const enviarRespostas =()=>{
    bloqueiaDiv.current = !bloqueiaDiv.current
    setLiberaDivToast(true)
    exercicioRespondido.forEach((resposta) => {
      if(resposta.resposta === true){
        count +=1
        setQtdRespostasCorretas(count)
      } 
    }) 
  }
  
  let divBtnEnviar
  if(pageNumber.length === exercicioRespondido.length){
    liberaDiv.current = !liberaDiv.current
    divBtnEnviar = 
      <div className="d-grid gap-2">
        <button type="button" id="liveToastBtn" className="btn btn-success btn-lg"
          onClick={enviarRespostas}
        >Confira respostas
        </button>
      </div>
  }
  
  const retornarSalaDeAtividades =()=>{
    salvarPontuacao()
    URL_Navigate('/salaDeAtividades',{
      state:{nivel: nivel, aula: aula}
    })
  }

  
  const salvarPontuacao = async () =>{
    let media = (qtdRespostasCorretas / totalPosts) * 100;
    let porcentagemMinima = 60;
    let passouNaMedia = media >= porcentagemMinima;
    let nivelAtualizado = nivel
    let aulaAtualizada = aula 
    
    if(passouNaMedia && (user.userAula < qtdAulasPorNivel)){
      if(user.userNivel === user.userNivelAtual && user.userAula === user.userAulaAtual){
        aulaAtualizada = aula + 1
        liberaProximaAula.current = !liberaProximaAula.current
      }
    }
    else if(user.userAula === qtdAulasPorNivel){
      if(user.userNivel === user.userNivelAtual && user.userAula === user.userAulaAtual){
        nivelAtualizado = nivel + 1
        aulaAtualizada = 1
        liberaProximoNivel.current = !liberaProximoNivel.current  
      }
    }
    else{
      liberaPontuacao.current = !liberaPontuacao.current 
    }

    await Axios.put(`${api}/exercises`,{
      nivel,
      aula,
      nivelAtualizado,
      aulaAtualizada,
      liberaProximoNivel: liberaProximoNivel.current,
      liberaProximaAula: liberaProximaAula.current,
      potuacaoAtual: user.userPontuacao,
      qtdRespostasCorretas: qtdRespostasCorretas,
      userEmail: user.userEmail
    }).then(response=>{

      if(liberaPontuacao.current){
        setUser(prevUser => {
          return {
            ...prevUser,
            userPontuacao: response.data.somaTotalPontos
        }})      
      }

      if(liberaProximaAula.current){
        setUser(prevUser => {
          return {
            ...prevUser,
            userPontuacao: response.data.somaTotalPontos,
            userAula: response.data.aulaAtualizada 
        }})      
      }

      if(liberaProximoNivel.current){
        setUser(prevUser => {
          return {
            ...prevUser,
            userPontuacao: response.data.somaTotalPontos,
            userNivel: response.data.nivelAtualizado,
            userAula: response.data.aulaAtualizada 
        }})      
      }
    }).catch(err=>{
      console.error("Usuário não encontrado. \nVerifique se seu email ou senha estão corretos \nou se já foram cadastrados.\n " + err)
    })
  }
  
  if(liberaDiv){
    liberaDiv.current = (liberaDiv.current = bloqueiaDiv.current)
  }
  
  return {
      exercicioClicado, pageNumber,
      liberaDiv, bloqueiaDiv, divBtnEnviar,
      liberaDivToast, 
      qtdRespostasCorretas,
      exerciciosSelecionado, retornarSalaDeAtividades
  }
}

export default usePagination