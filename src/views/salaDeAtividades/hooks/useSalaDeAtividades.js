import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import api from '../../../Api'
import axios  from 'axios'
import { UserContext } from '../../../components/utils/UserContext'


export default function useSalaDeAtividades(){
  const {user} = useContext(UserContext)
  const nivel = user.userNivelAtual
  const aula = user.userAulaAtual

  let URL_Navigate = useNavigate()

  const [url, setUrl] = useState()
  const [title, setTitle] =useState()
  const [carregando, setCarregando] = useState(true)
  const MEIO_SEGUNDO = 500
  
  const temporizador =()=> setCarregando(false)

  useEffect(()=>{
    axios.post(`${api}/salaDeAtividades`,{
      nivel: nivel,
      aula: aula,
    }).then((response)=>{
      setUrl(response.data.url)
      setTitle(response.data.titulo)
    }).catch((rejected)=>{
      console.error(rejected.response.data)
    })
    setTimeout(temporizador, MEIO_SEGUNDO)
  })

  const abrirConteudo = (conteudo) => {  
      switch (conteudo) {
        case 'exercises':
          console.log('exercises')
          URL_Navigate('/exercises',{
            state:{nivel: nivel, aula: aula}
          })
          break;
        case 'grammar':
          console.log('grammar')
          URL_Navigate('/grammar',{
            state:{nivel: nivel, aula: aula}
          })
          break;
        
        case 'listening-reading':
          console.log('listening-reading')
          URL_Navigate('/listening-reading',{
            state:{nivel: nivel, aula: aula}
          })
          break;
        
        case 'vocabulary':
          console.log('vocabulary')
          URL_Navigate('/vocabulary',{
            state:{nivel: nivel, aula: aula}
          })
          break;       
        default:
          break;
      } 
    }

    return{
        nivel, aula, title,
        carregando, url,
        abrirConteudo

    }
}