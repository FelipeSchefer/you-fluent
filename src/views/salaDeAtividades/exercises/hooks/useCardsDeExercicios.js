import { useState } from 'react'
/**
 * this hook receives an object
 */
const useCardsDeExercicios = ({cardAtual}) => {
    const [tamanhoInput        , setTamanhoInput       ] = useState(1)
    const [exercicioRespondido , setExercicioRespondido] = useState([])
    const [numExercicio        , setNumExercicio       ] = useState()
    const [cardAtualSlice      , setCardAtualSlice     ] = useState()

    let cardId = cardAtualSlice
    for (let i = 0; i < cardAtual.length; i++) {
      const obj = cardAtual[i];     
      cardId = obj.id
    }

    if (cardId !== cardAtualSlice) {
      setCardAtualSlice(cardId);
    }

    let numb = cardAtual.map((card)=> card.exercicio)
    numb = numb[0]
  
    const verificarResposta =(resposta, id)=>{
      let respostaID = document.getElementById(`respostaID${id}`).value

      setNumExercicio(numb)
  
      let respostaCorreta = resposta === respostaID
      if(respostaCorreta && respostaID !==''){
        setExercicioRespondido([...exercicioRespondido,{numExercicio: cardAtual[0].exercicio, resposta: true}])
        cardAtual[0].border = 'border-success'
        cardAtual[0].text = 'text-success'
        cardAtual[0].estado = true
      }
      if(!respostaCorreta && respostaID !==''){
        setExercicioRespondido([...exercicioRespondido,{numExercicio: cardAtual[0].exercicio, resposta: false}])
        cardAtual[0].border = 'border-danger'
        cardAtual[0].text = 'text-danger'
        cardAtual[0].estado = true
      }
  
      let semResposta = respostaID === ''
      if(semResposta){
        cardAtual[0].border = 'border-dark'
        cardAtual[0].text = 'text-dark'
        cardAtual[0].estado = false
      }
    }
  
    const sizeInputHandle =(e)=>{
      const size = e.target.value.length
      if(size === 0)setTamanhoInput(1)
      else setTamanhoInput(size)
    }

    return {
        exercicioRespondido, tamanhoInput, numExercicio,
        verificarResposta, sizeInputHandle, newCardAtual: cardAtual
    }
}

export default useCardsDeExercicios