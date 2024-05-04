import React from 'react'
import OffCanvas from '../../components/OffCanvas'
import './HomeEstudo.css'
import listaNiveis from './Niveis'
import BootsTrapAccordion from '../../components/accordion/BootsTrapAccordion'
// import Pontuacao from '../../components/Pontuacao'

const  HomeEstudo = () => {

  return (
    <>
    <OffCanvas/>
    <div className='espacoAcima scroll-body'>
      {/* <Pontuacao closeBtn={true}/> */}
      <br/>
      <BootsTrapAccordion listaNiveis={listaNiveis}/>
    </div>
    </>
  )
}

export default HomeEstudo