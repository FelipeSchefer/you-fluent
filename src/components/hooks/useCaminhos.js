import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {UserContext} from '../utils/UserContext'

const useCaminhos = () => {
    const {user} = useContext(UserContext)
    
    let URL_Navigate = useNavigate()
    
    const [nivel, setNivel] = useState(user.userNivelAtual)
    const [aula, setAula] = useState(user.userAulaAtual)
    
    
    console.log('antes nivel ' + nivel + ' aula ' + aula)

    useEffect(()=>{
        if(nivel === 0 || aula === 0){
            setNivel(user.userNivel)
            setAula(user.userAula)
        }
    },[aula, nivel, user.userAula, user.userNivel])

    console.log('depois nivel ' + nivel + ' aula ' + aula)

    const abrirConteudo = (conteudo) => {  
        console.log('nivel ' + nivel + ' aula ' + aula + ' conteudo ' + conteudo)
        switch (conteudo) {
          case 'homeEstudo':
            console.log('homeEstudo')
            URL_Navigate('/homeEstudo',{
              state:{nivel: nivel, aula: aula}
            })
            break;
          case 'salaDeAtividades':
            console.log('salaDeAtividades')
            URL_Navigate('/salaDeAtividades',{
              state:{nivel: nivel, aula: aula}
            })
            break;
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
  return {abrirConteudo}
}

export default useCaminhos