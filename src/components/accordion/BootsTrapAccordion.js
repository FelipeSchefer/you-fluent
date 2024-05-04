import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons' 
import { UserContext } from '../utils/UserContext'
import Carregando from '../Carregando'

const BootsTrapAccordion = (props) => {
  const {user, setUser} = useContext(UserContext)
  let URL_Navigate = useNavigate()
  const [carregando, setCarregando] = useState(true)
  const MEIO_SEGUNDO = 500

  const temporizador =()=> setCarregando(false)
  
  let listaNiveis = props.listaNiveis
  const niveisLiberados = []
  const aulasLiberadas = []
  const aulaLimiteNivelAtual = []
  const niveis = []

  if(user.userNivel !== 0){
    for(let i = 1; i <= user.userNivel; i++){
      niveisLiberados.push(i) 
    }
    
    for(let i = 1; i <= user.userAula; i++){
      aulasLiberadas.push(i)
      aulaLimiteNivelAtual.push(i)
    }
    
    setTimeout(temporizador, MEIO_SEGUNDO)
  }

  listaNiveis.forEach((aulas) => {
    aulas.forEach((__, i) => {
      niveis.push({
        nivel: aulas[i].nivel,
        aulas: [aulas[i].aula.split(',').map((aula) => parseInt(aula))],
        niveisLiberados: niveisLiberados,
        aulasLiberadas: aulasLiberadas,
        aulaLimiteNivelAtual: aulaLimiteNivelAtual,
      })
    })
  })
  
  const abrirAula = (nivel , aula, aulaAberta) => {  
    if(aulaAberta){
      setUser({...user, userNivelAtual: nivel, userAulaAtual: parseInt(aula)})
      URL_Navigate('/salaDeAtividades',{
        state:{nivel: nivel, aula: aula}
      })
    }
  }


  niveis.forEach((nivel, i) => {
    if(nivel.nivel !== nivel.niveisLiberados.length){
      if(nivel.aulasLiberadas[i] === nivel.aulaLimiteNivelAtual[i]){
        nivel.aulasLiberadas = nivel.aulas[0];
      }
    }
  });

  return ( 
    <div className="container shadow p-3 mb-5 bg-body rounded">
      {
        carregando 
        ? <Carregando/>
        : <div className="accordion" id="accordionExample">
            {
              niveis.map((nivel, i) => (
                <div className="accordion-item" key={nivel.nivel}>
                  <h2 className="accordion-header" id={`heading${nivel.nivel}`}>
                    <button  
                      className={`accordion-button ${nivel.niveisLiberados[i] === nivel.nivel ? ' nivel-liberado' : ' nivel-bloqueado'}`} 
                      type="button" 
                      data-bs-toggle={`${nivel.niveisLiberados[i] === nivel.nivel ? 'collapse' : ''}`} 
                      data-bs-target={`#collapse${nivel.nivel}`} 
                      aria-controls={`collapse${nivel.nivel}`} 
                    > Nivel #{nivel.nivel}
                      {
                        nivel.niveisLiberados[i] === nivel.nivel 
                        ?
                          <FontAwesomeIcon icon={faLockOpen} className='ms-2' size="lg"/> 
                        :  
                          <FontAwesomeIcon icon={faLock} className='ms-2' size="lg"/> 
                      }
                    </button>
                  </h2>
                  <div className="container">
                    <div 
                      id={`collapse${nivel.nivel}`}  
                      className={`accordion-collapse collapse ${user.userNivel === nivel.nivel ? 'show' : ''}`}
                      aria-labelledby={`heading${nivel.nivel}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="row flex-column align-items-center text-center justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 flex-column align-items-center text-center justify-content-center">
                          { 
                            nivel.aulas.map((aulas) =>( 
                              aulas.map((aula, index) => (
                                <button 
                                  key={aula}
                                  className={`btn-aula-circulo${nivel.aulasLiberadas[index] === +aula ? '-liberado' : '-bloqueado'}`} 
                                  name={aula}
                                  value={aula}
                                  onClick={()=> abrirAula(nivel.nivel, aula, nivel.aulasLiberadas[index] === +aula) } 
                                > 
                                  <strong>Aulas {aula}</strong>
                                  {
                                    nivel.aulasLiberadas[index] === +aula 
                                    ?
                                      <FontAwesomeIcon icon={faLockOpen} className='ms-2' size="lg"/> 
                                    :  
                                      <FontAwesomeIcon icon={faLock} className='ms-2 text-center' size="lg"/> 
                                  }
                                </button>        
                              ))
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))  
            }
          <br/>
          </div>
      }
    </div>
  )
}

export default BootsTrapAccordion