import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../Api'
import axios from 'axios'
import { validaEmail, validaSenha } from "../../validations/formValidation";
import { UserContext } from '../../../components/utils/UserContext'

export default function useValidationLogin (){

    let URL_Navigate = useNavigate()
    const {setUser} = useContext(UserContext)
  
    const [emailValido, setEmailValido    ] = useState()
    const [emailInvalido, setEmailInvalido] = useState()
    const [senhaValido, setSenhaValido    ] = useState()
    const [senhaInvalido, setSenhaInvalido] = useState()
    const [trocaSenha   , setTrocaSenha   ] = useState(true)
    const [logar, setLogar  ] = useState()
    const [values, setValues] = useState()
   
    const buscarDado = (value) => {
      setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
    }

    const validarEmail = async (event) => {
        axios.post(`${api}/login`,{
          email: values.email,
          senha: values.senha,
        }).then((response)=>{
          getStatus(response.data)
        }).catch((rejected)=>{
          getStatus(rejected.response.data)
        })
      }

    const getStatus = (data) =>{
        setLogar(true)
        if(data.msg){
          setEmailInvalido(false)
          setUser({
            userStatus: data.msg,
            userEmail: data.email,
            userNome: data.nome,
            userPontuacao: data.pontuacao,
            userNivel: data.nivel,
            userAula: data.aula,
            userNivelAtual: 0,
            userAulaAtual: 0
          })
          URL_Navigate('/homeEstudo',{replace: true})
        }
    }

    const validarInputsFrom = async () =>{
        let email = {email: document.getElementById('email').value}
        let senha = {senha: document.getElementById('senha').value}
    
        const isEmailValid = await validaEmail.isValid(email)
        const isSenhaValid = await validaSenha.isValid(senha)
    
        if(isEmailValid) setEmailValido(true)
        else setEmailInvalido(true)
      
        if(!isEmailValid) setEmailValido(false)
        else setEmailInvalido(false)
        
        if(isSenhaValid) setSenhaValido(true)
        else setSenhaInvalido(true)
      
        if(!isSenhaValid) setSenhaValido(false)
        else setSenhaInvalido(false) 
    }

    const trocarSenha = async () =>{
      axios.post(`${api}/login`,{
        email: values.email,
        trocaSenha: true
      }).then((response)=>{
        alert('VERIFIQUE SUA CAIXA DE EMAIL OU SPAN')
        console.log(response.data)
      }).catch((rejected)=>{
        alert('Seu email não foi encontrado digite um email valido')
        console.error(rejected.response.data)
      })
    }
    

    return{
        emailValido, emailInvalido,
        senhaValido, senhaInvalido,
        logar      , 
        trocaSenha ,
        setTrocaSenha,
        trocarSenha,
        buscarDado,
        validarEmail,
        validarInputsFrom
    }
}