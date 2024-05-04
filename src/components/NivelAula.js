import React, { useEffect, useState } from 'react'

const NivelAula = ({nivel, aula, tituloOuExercicio, tipo }) => {
    
    const [titOuExer, setTitOuExer] = useState('')

    useEffect(()=>{
        if(tipo === 't') setTitOuExer('Conteudo da aula:')
        if(tipo === 'e') setTitOuExer('Exercício:')
    },[tipo])

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nível: {nivel}</th>
                        <th scope="col">Aula: {aula}</th>
                        <th scope="col">{`${titOuExer} ${tituloOuExercicio}`}</th>
                    </tr>
                </thead>
            </table>
        </div>
      
    )
}

export default NivelAula