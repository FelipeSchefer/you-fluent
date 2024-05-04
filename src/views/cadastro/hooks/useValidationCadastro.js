import {useState} from 'react'
import api from '../../../Api'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
  validaCelular, validaCidade, validaCurso,
  validaEmail, validaNome, 
  validaSenha, 
  validaSobrenome, 
  validaEstadoUR 
} from '../../validations/formValidation';

export default function useValidationCadastro () {

    const navigate = useNavigate()
    const [values, setValues]   = useState()
    const [camposInvalidos, setCamposInvalidos] = useState()
  
    const [nomeValido, setNomeValido] = useState()
    const [nomeInvalido, setNomeInvalido] = useState()
  
    const [sobrenomeValido, setSobrenomeValido] = useState()
    const [sobrenomeInvalido, setSobrenomeInvalido] = useState()
  
    const [cidadeValido, setCidadeValido] = useState()
    const [cidadeInvalido, setCidadeInvalido] = useState()
  
    const [estadoURValido, setEstadoURValido] = useState()
    const [estadoURInvalido, setEstadoURInvalido] = useState()
    
    const [celularValido, setCelularValido] = useState()
    const [celularInvalido, setCelularInvalido] = useState()
  
    const [cursoValido, setCursoValido] = useState()
    const [cursoInvalido, setCursoInvalido] = useState()
  
    const [emailValido, setEmailValido    ] = useState()
    const [emailInvalido, setEmailInvalido] = useState()
  
    const [senhaValido, setSenhaValido    ] = useState()
    const [senhaInvalido, setSenhaInvalido] = useState()

    const [senhasIguais, setSenhasIguais] = useState()
    const [senhasDesiguais, setSenhasDesiguais] = useState()
    
    const cadastrarUsuario = (value) => {
      setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
    }
  
    const enviarForm = async () =>{
      if(senhasIguais){
        await axios.post(`${api}/cadastro`,{
          nome: values.nome,
          sobrenome: values.sobrenome,
          cidade: values.cidade, 
          estadoUR: values.estadoUR,
          telefone: values.telefone,
          celular: values.celular,
          curso: values.curso,
          email: values.email,
          senha: values.senha,
        }).then((response)=>{
          console.log("Cadastro " + response.data.msg)
          navigate(`/login`)
        }).catch((rejected) =>{
          console.error("Cadastro rejeitado " + rejected.response.data.msg)
          navigate(`/cadastro`)
        })
      }
    }
  
    const validarInputsFrom = async () =>{
      let nome = {nome: document.getElementById('nome').value}
      let sobrenome = {sobrenome: document.getElementById('sobrenome').value}
      let cidade = {cidade: document.getElementById('cidade').value}
      let estadoUR = {estadoUR: document.getElementById('estadoUR').value}
      let celular = {celular: document.getElementById('celular').value}
      let curso = {curso: document.getElementById('curso').value}
      let email = {email: document.getElementById('email').value}
      let senha = {senha: document.getElementById('senha').value}
      let confirmaSenha = {confirmaSenha: document.getElementById('confirmaSenha').value}
      
      const isNomeValid      = await validaNome.isValid(nome)
      const isSobrenomeValid = await validaSobrenome.isValid(sobrenome)
      const isCidadeValid    = await validaCidade.isValid(cidade)
      const isEstadoURValid  = await validaEstadoUR.isValid(estadoUR)
      const isCelularValid   = await validaCelular.isValid(celular)
      const isCursoValid = await validaCurso.isValid(curso)
      const isEmailValid = await validaEmail.isValid(email)
      const isSenhaValid = await validaSenha.isValid(senha)
  
      if( isNomeValid     || isSobrenomeValid || 
          isCidadeValid   || isEstadoURValid  || 
          isCelularValid  || isCursoValid     || 
          isEmailValid    || isSenhaValid    
        ){
          setCamposInvalidos(true)
      }
  
      // --- NOME
      if(isNomeValid) setNomeValido(true)
      else setNomeInvalido(true)
      if(!isNomeValid) setNomeValido(false)
      else setNomeInvalido(false)
      
      // --- SOBRENOME
      if(isSobrenomeValid) setSobrenomeValido(true)
      else setSobrenomeInvalido(true)
      if(!isSobrenomeValid) setSobrenomeValido(false)
      else setSobrenomeInvalido(false) 
  
      // --- CIDADE
      if(isCidadeValid) setCidadeValido(true)
      else setCidadeInvalido(true)
      if(!isCidadeValid) setCidadeValido(false)
      else setCidadeInvalido(false)
  
      // --- ESTADO UR
      if(isEstadoURValid && (estadoUR.estadoUR !== "--Estado--")) setEstadoURValido(true)
      else setEstadoURInvalido(true)
      if(!isEstadoURValid && (estadoUR.estadoUR === "--Estado--")) setEstadoURValido(false)
      else setEstadoURInvalido(false) 

      // --- CELULAR
      if(isCelularValid) setCelularValido(true)
      else setCelularInvalido(true)
      if(!isCelularValid) setCelularValido(false)
      else setCelularInvalido(false) 
  
      // --- CURSOS
      if(isCursoValid && (curso.curso !== "--Curso--")) setCursoValido(true)
      else setCursoInvalido(true)
      if(!isCursoValid && (curso.curso === "--Curso--")) setCursoValido(false)
      else setCursoInvalido(false) 
  
      // --- EMAIL
      if(isEmailValid)setEmailValido(true)
      else setEmailInvalido(true)
      if(!isEmailValid) setEmailValido(false)
      else setEmailInvalido(false)
      
      // --- SENHA
      if(isSenhaValid) setSenhaValido(true)
      else setSenhaInvalido(true)
      if(!isSenhaValid) setSenhaValido(false)
      else setSenhaInvalido(false) 

      // --- SENHAS IGUAIS
      if(senha.senha === confirmaSenha.confirmaSenha) setSenhasIguais(true)
      else setSenhasDesiguais(true)
      if(!(senha.senha === confirmaSenha.confirmaSenha)) setSenhasIguais(false)
      else setSenhasDesiguais(false)
     }  

    return{
      nomeValido     , nomeInvalido,
      sobrenomeValido, sobrenomeInvalido,
      cidadeValido   , cidadeInvalido,
      celularValido  , celularInvalido,
      estadoURValido , estadoURInvalido,
      cursoValido    , cursoInvalido,
      emailValido    , emailInvalido,
      senhaValido    , senhaInvalido,
      senhasIguais   , senhasDesiguais,
      camposInvalidos,
      enviarForm: enviarForm,
      validarInputsFrom: validarInputsFrom,
      cadastrarUsuario: cadastrarUsuario
    }
  }