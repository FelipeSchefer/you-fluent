import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {UserContext} from './utils/UserContext'
import Pontuacao from './Pontuacao'
import './css/offCanvas.css'

const OffCanvas = () => {
  const {user} = useContext(UserContext)
  const [fechaSalaDeAtividades, setFechaSalaDeAtividades] = useState(true)

  let URL_Navigate = useNavigate()

  const nome = user.userNome
  const nivel = user.userNivelAtual
  const aula = user.userAulaAtual


  useEffect(()=>{
    if(nivel === 0 || aula === 0){
      setFechaSalaDeAtividades(false)
    }
  },[aula, nivel])
  
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const abrirConteudo = (conteudo) => {  
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
  
  const toggleOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  return (
    <>
      <nav className="navbar navbar-background navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            You Fluent
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleOffCanvas}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      {showOffCanvas && (
        <>
          <div className="offcanvas-backdrop fade show" onClick={toggleOffCanvas}></div>
          <div
            className="offcanvas offcanvas-end text-bg-dark show"
            tabIndex="-1"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Perfil
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={toggleOffCanvas}
                aria-label="Close"
              ></button>
            </div>
            <h5 className='ms-3'>Nome: {nome}</h5>
            <Pontuacao closeBtn={false}/>
            <hr></hr>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link pointer text-danger" aria-current="page" href="/">{`Logout (sair)`}</a>
                </li>
                <li className="nav-item">
                  <p className="nav-link pointer" onClick={() => abrirConteudo('homeEstudo')}>Niveis</p>
                </li>
                {
                  fechaSalaDeAtividades &&
                    <>
                      <li className="nav-item">
                        <p className="nav-link pointer" onClick={() => abrirConteudo('salaDeAtividades')}>Sala de aula</p>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link pointer dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Afazeres
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li><p className="dropdown-item" onClick={() => abrirConteudo('exercises')} >Exercises</p></li>
                          <li><p className="dropdown-item" onClick={() => abrirConteudo('listening-reading')} >Reading / Listening</p></li>
                          <li><p className="dropdown-item" onClick={() => abrirConteudo('vocabulary')} >Vocabulary</p></li>
                          <li><p className="dropdown-item" onClick={() => abrirConteudo('grammar')} >Grammar</p></li>
                        </ul>
                      </li>
                    </>
                }
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default OffCanvas