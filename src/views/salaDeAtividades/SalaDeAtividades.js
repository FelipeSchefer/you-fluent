import React from 'react'
import Iframe from 'react-iframe'
import './salaDeAtividades.css'
import NivelAula from '../../components/NivelAula'
import Carregando from '../../components/Carregando'
import useSalaDeAtividades from './hooks/useSalaDeAtividades'
import OffCanvas from '../../components/OffCanvas'
import './salaDeAtividades.css'

const SalaDeAtividades = () => {
  const {
    nivel, aula, title,
    carregando, url,
    abrirConteudo
  } = useSalaDeAtividades()
 
  return (
    <>
      <OffCanvas/>
      <br/>
      <div className="container shadow p-3 mb-5 bg-body rounded mt-5 scroll-body">
        <p className='fs-3'>Sala de aula</p> 
        <NivelAula 
          nivel={nivel} 
          aula={aula}
          tituloOuExercicio={title}
          tipo={'t'}
          />
        {
          carregando 
          ? <Carregando/>
          : <>
              <div className="ratio ratio-16x9 mb-3">
                <Iframe 
                  width="560" height="315" 
                  src={`${url}`} title={`${title}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen 
                  />
              </div>
            </>
        }
        <div className="container btn-group btn-group-margin" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary btn-division"
            onClick={() => abrirConteudo('grammar')}
          >Grammar
          </button>
          <button type="button" className="btn btn-primary btn-division"
            onClick={() => abrirConteudo('vocabulary')}
            >Vocabulary
          </button>
        </div>
        <div className="container btn-group btn-group-margin mb-5" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary btn-division"
            onClick={() => abrirConteudo('listening-reading')}
          >Listening / Reading
          </button>
          <button type="button" className="btn btn-primary btn-division"
            onClick={() => abrirConteudo('exercises')}
            > Exercises
          </button>
        </div>
      </div>
    </>
  )
}

export default SalaDeAtividades