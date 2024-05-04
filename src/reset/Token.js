import React, { useState } from 'react'
import { validaSenha } from "../views/validations/formValidation";
import axios from 'axios';
import api from '../Api';
import { useNavigate, useParams } from 'react-router';

const Token = () => {
    const {id, token} = useParams()

    console.log('ROTAS ID E TOKEN')
    console.log(id)
    console.log(token)
    let URL_Navigate = useNavigate()

    const [senhaValido, setSenhaValido    ] = useState()
    const [senhaInvalido, setSenhaInvalido] = useState()
    const [logar, setLogar  ] = useState()
    const [values, setValues] = useState()
    const [senhasIguais, setSenhasIguais] = useState()
    const [senhasDesiguais, setSenhasDesiguais] = useState()


    const trocaSenha =(value)=>{
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const validarEmail = async (event) => {
        axios.put(`${api}/troca-senha`,{
          id,
          senha: values.senha,
        }).then((response)=>{
            console.log('response')
            console.log(response)
          getStatus(response.data)
        }).catch((rejected)=>{
            console.log('rejected.response.data')
            console.log(rejected.response.data)
          getStatus(rejected.response.data)
        })
      }

    const getStatus = (data) =>{
        setLogar(true)
        if(data.msg){
          URL_Navigate('/login',{replace: true})
        }
    }

    const validarInputsFrom = async () =>{  
        let senha = {senha: document.getElementById('senha').value}
        let confirmaSenha = {confirmaSenha: document.getElementById('confirmaSenha').value}

        const isSenhaValid = await validaSenha.isValid(senha)  


        // --- SENHA
        if(isSenhaValid) setSenhaValido(true)
        else setSenhaInvalido(true)      
        if(!isSenhaValid) setSenhaValido(false)
        else setSenhaInvalido(false) 

        // --- CONFIRMA SENHA
        if(senha.senha === confirmaSenha.confirmaSenha){
            setSenhasIguais(true)
            validarEmail()
        }
        else setSenhasDesiguais(true)
        if(!(senha.senha === confirmaSenha.confirmaSenha)) setSenhasIguais(false)
        else setSenhasDesiguais(false)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 card shadow p-3 bg-body rounded mt-4 mb-4">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">Password</label>
                            <input 
                            type="password" 
                            id="senha" 
                            name="senha"
                            className={
                                `form-control
                                ${senhaValido   ? 'is-valid'  : '' }
                                ${senhaInvalido ? 'is-invalid': '' }
                                `
                            } 
                            onChange={trocaSenha}
                            required
                            />
                            {
                            senhaValido 
                                ? <div className="valid-feedback">A sua senha está no padrão correto de 6 a 20 caracteres</div>  
                                : <div className="invalid-feedback">A senha está incorreta ou não atente a media de 6 a 20 caracteres</div>
                            }
                        </div>
                        {
                            logar &&
                                <div className="alert alert-danger" role="alert">
                                    <small>
                                        <strong>
                                        O seu login não foi encontrado, caso queira cadastrar-se clique no botão abaixo
                                        </strong>
                                    </small>
                                </div>
                        }
                        <div className="mb-3">
                            <label htmlFor="confirmaSenha" className="form-label">Confirma a senha</label>
                            <input 
                                type="password" 
                                id="confirmaSenha" 
                                name="confirmaSenha"
                                className={`
                                    form-control
                                    ${senhasIguais   ? 'is-valid'  : '' }
                                    ${senhasDesiguais ? 'is-invalid': '' }
                                `} 
                                onChange={trocaSenha}
                                required
                            />
                            {
                                senhasIguais 
                                    ? <div className="valid-feedback">As senhas estão iguais</div>  
                                    : <div className="invalid-feedback">As senhas estão diferentes favor digitá-las iguais</div>
                            }
                        </div>
                        <div className="d-grid gap-3">
                            <button 
                                type="button"
                                className="btn btn-secondary"
                                onClick={() =>{validarInputsFrom()}}
                            > Trocar
                            </button>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token