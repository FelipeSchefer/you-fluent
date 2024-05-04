import React from 'react'
import usePagination from './hooks/usePagination'

const Pagination = ({
  postPerPage, totalPosts,
  paginate, newCardAtual,
  exercicioRespondido, cardsConteudo
}) => {

  const {
    exercicioClicado, pageNumber,
    liberaDiv, bloqueiaDiv, divBtnEnviar,
    liberaDivToast, qtdRespostasCorretas,
    exerciciosSelecionado, retornarSalaDeAtividades
  } = usePagination({postPerPage, totalPosts, paginate, exercicioRespondido})

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item d-none d-sm-block">
            <p className="page-link" onClick={() => exerciciosSelecionado(exercicioClicado, 'anterior')}>Anterior</p>
          </li>
          {pageNumber.map(number => (
            <li className="page-item" key={number}>
              <p
                className={`
                  page-link 
                  ${number === newCardAtual[0].exercicio ? 'active' : ''} 
                `}
                key={number}
                onClick={() => { exerciciosSelecionado(number, 'active') }}
              >{number}
              </p>
            </li>
          ))}
          <li className="page-item d-none d-sm-block">
            <p className="page-link" onClick={() => exerciciosSelecionado(exercicioClicado, 'proximo')}>Proximo</p>
          </li>
        </ul>
        {liberaDivToast &&
          <div
            aria-live="polite"
            aria-atomic="true"
            className="d-flex justify-content-center align-items-center w-100 mb-3"
          >
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header text-light bg-dark">
                <strong className="me-auto">Resultado</strong>
                <small className='text-info'>Total de {qtdRespostasCorretas} acertos</small>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={() => retornarSalaDeAtividades()}
                />
              </div>
              <div className="toast-body">
                Confira as respostas corretas
              </div>
              <div className="card m-2">
                <ul className="list-group list-group-flush">
                  {cardsConteudo.map((exercise, index) =>
                    <li className="list-group-item" key={index}>
                      {exercise.sentenca_parte_1}
                      <strong> {exercise.resposta} </strong>
                      {exercise.sentenca_parte_2}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <br />
          </div>
        }
      </nav>
      {(liberaDiv.current && bloqueiaDiv.current) && 
        <div className="d-flex justify-content-center align-items-center w-100">
          {divBtnEnviar}
        </div>
      }
    </>
  
  
  )
}

export default Pagination