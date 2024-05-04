import React from 'react'
import useGrammar from './hooks/useGrammar'
import OffCanvas from '../../../components/OffCanvas'
import useFormatText from '../../../components/hooks/useFormatText'

const Study = () => {
  const { grammar } = useGrammar()
  const {formatText} = useFormatText()

  return (
    <>
      <OffCanvas />
      <div className='container'>
        <hr />
        <br />
        <div className='mb-3 mt-3 card shadow p-3 mb-5 bg-body rounded'>
          <h2 className='mb-3 mt-3'><strong>{grammar.titulo}</strong></h2>
          <h3 className='mb-3 mt-3'>{grammar.introducao}</h3>
          <p>
            {formatText(grammar.texto)}
          </p>
          <p>
            {formatText(grammar.conclusao)}
          </p>
          <p>
            {formatText(grammar.exemplo)}
          </p>
        </div>
        <hr />
        <br />
      </div>
    </>
  )
}

export default Study
