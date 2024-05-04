import React from 'react'
const style = "width: 3rem; height: 3rem;" 

const Carregando = () => {
  return (
   <div className='container text-center'>
     <h1 className='text-success'>
       <div className={`spinner-border ${style}`} role="status">
        <span className="visually-hidden">{`Carregando ;)`}</span>
      </div>
     </h1>
   </div>
  )
}

export default Carregando