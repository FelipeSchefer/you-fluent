import React, { useContext, useEffect, useState } from 'react'
import OffCanvas from '../../../components/OffCanvas'
import './exercises.css'
import api from '../../../Api'
import axios  from 'axios'
import Carregando from '../../../components/Carregando'
import CardsDeExercicios from './CardsDeExercicios'
import { UserContext } from '../../../components/utils/UserContext'

const Exercises = () => {
  const {user} = useContext(UserContext)
  const nivel = user.userNivelAtual
  const aula = user.userAulaAtual
  const conteudoAtual = {
    nivel,
    aula
  }

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(1)

  useEffect(() =>{
    const fetchPost = async () =>{
      setLoading(true)
      await axios.post(`${api}/exercises`,{
        nivel: conteudoAtual.nivel,
        aula: conteudoAtual.aula,
      }).then((response) => { setPost(response.data)
      }).catch((rejected)=> { console.error(rejected.response.data)})
      setLoading(false)
    }
    fetchPost()
  },[conteudoAtual.nivel, conteudoAtual.aula])

  if(loading) return <Carregando/>

  const newPost = [...post]

  const indexOfTheLastPost = currentPage * postPerPage
  const indexOfTheFirstPost = indexOfTheLastPost - postPerPage
  const currentPosts = newPost.slice(indexOfTheFirstPost, indexOfTheLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber) // lifting the state up

  return (
    <>
      <div className='container mb-4'>
        <OffCanvas />
      </div>
      <br/>
      <div className='mt-4'>
        <br/>
        <CardsDeExercicios 
          cardAtual={currentPosts} 
          conteudoAtual={conteudoAtual} 
          toPagination={{postPerPage: postPerPage, post: post.length, paginate}}
          cardsConteudo={post}
        />
      </div>
    </>
  )
}

export default Exercises