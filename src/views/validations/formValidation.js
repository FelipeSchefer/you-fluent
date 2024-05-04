import * as yup from 'yup'

export const validaEmail = yup.object().shape({
    email: yup.string().email().required()
}) 

export const validaSenha = yup.object().shape({
    senha: yup.string().min(6).max(20).required()
}) 

export const validaNome = yup.object().shape({
    nome: yup.string().min(3).required()
}) 

export const validaSobrenome = yup.object().shape({
    sobrenome: yup.string().min(3).required()
}) 

export const validaCidade = yup.object().shape({
    cidade: yup.string().required()
}) 

export const validaEstadoUR = yup.object().shape({
    estadoUR: yup.string().min(1).max(3).required()
}) 

export const validaTelefone = yup.object().shape({
    telefone: yup.string().min(9).max(13) 
}) 

export const validaCelular = yup.object().shape({
    celular: yup.string().min(9).max(13).required() 
}) 

export const validaCurso = yup.object().shape({
    curso: yup.string().min(1).max(8).required() 
}) 
