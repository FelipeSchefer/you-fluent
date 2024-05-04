import React from 'react'
import Pagination from './Pagination'
import NivelAula from '../../../components/NivelAula'
import useCardsDeExercicios from './hooks/useCardsDeExercicios'

const CardsDeExercicios = ({cardAtual, conteudoAtual, toPagination, cardsConteudo}) => {
  const {
    tamanhoInput, newCardAtual, exercicioRespondido,
    verificarResposta, sizeInputHandle
  } = useCardsDeExercicios({cardAtual})

  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
          <div className='shadow p-3 mb-5 bg-body rounded'>
            {
              newCardAtual.map(exercise=>(
                <div 
                  key={exercise.exercicio} 
                  className={`card ${exercise.border} mb-3 `}
                >
                  <div className="card-header">
                    <NivelAula 
                      nivel={conteudoAtual.nivel} 
                      aula={conteudoAtual.aula}
                      tituloOuExercicio={exercise.exercicio}
                      tipo={'e'}
                    />
                  </div>
                  <div className={`card-body ${exercise.text}`}>
                    <h5 className="card-title">{exercise.anunciado}</h5>
                    <p className="card-text">
                      {exercise.sentenca_parte_1} 
                      <input 
                        type='text' 
                        className='resposta' 
                        id={`respostaID${exercise.exercicio}`}
                        onChange={sizeInputHandle}
                        size={tamanhoInput}
                        disabled={exercise.estado}
                      /> 
                      {exercise.sentenca_parte_2}
                    </p>
                    <div className="container">
                      <div className='row'>
                        <div className='col-sm-5 col-md-5 col-lg-5 mx-auto mt-1'>
                          <div className="d-grid gap-2">
                            <button 
                              id={`btnID${exercise.exercicio}`}
                              className="btn btn-primary" type="button" 
                              disabled={exercise.estado}
                              onClick={()=>verificarResposta(exercise.resposta, exercise.exercicio)}
                            >
                              <strong>Verify</strong>
                            </button>
                          </div>
                        </div>
                        <div className='col-sm-5 col-md-5 col-lg-5 mx-auto mt-1'>
                          <div className="dropdown-center d-grid gap-2 helper">
                            <button type="button" className="btn btn-warning dropdown-toggle helper" data-bs-toggle="dropdown" aria-expanded="false">
                              <strong>help ? </strong>
                            </button>
                            <ul className="dropdown-menu container">
                              <li><p className="dropdown-item paragraph-wrap">{exercise.help_title}</p></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><p className="dropdown-item paragraph-wrap">{exercise.help_text}</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            <Pagination 
              postPerPage={toPagination.postPerPage} 
              totalPosts={toPagination.post} 
              paginate={toPagination.paginate}
              newCardAtual={newCardAtual}
              exercicioRespondido={exercicioRespondido}
              cardsConteudo={cardsConteudo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsDeExercicios