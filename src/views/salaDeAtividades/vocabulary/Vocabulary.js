import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import api from '../../../Api';
import './Vocabulary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'; 
import { UserContext } from '../../../components/utils/UserContext';
import OffCanvas from '../../../components/OffCanvas';
import Carregando from '../../../components/Carregando';

const imageFilesContext = require.context(
  '../../../../public/classesContent/vocabulary-images',
  true,
  /\.jpg$/
);

const audioFilesContext = require.context(
  '../../../../public/classesContent/vocabulary-audios',
  true,
  /\.mp3$/
);


const Vocabulary = () => {
  const [vocabulary, setVocabulary] = useState([]);
  const [play, setPlay] = useState('')
  const [loading, setLoading] = useState(false)
  
  const {user} = useContext(UserContext)
  const nivel = user.userNivelAtual
  const aula = user.userAulaAtual


  useEffect(() => {
    const fetchPost = async () =>{
      setLoading(true)
      await Axios.post(`${api}/vocabulary`,{
        nivel,
        aula
      }).then(response => {
        console.log('response vocabulary ok');
        setVocabulary(response.data);
      }).catch(err => {
        console.error('Algo inexperado aconteceu: ' );
        console.error(err.response.data);
      });
      setLoading(false)
    }
    fetchPost()
  }, [aula, nivel]);

  const mostrarConteudo = async () =>{
    await vocabulary.map((voc) => {
      const path = imageFilesContext.keys().find((key) => key.replace('./', '') === voc.caminhoImg)
      const imageFile = path ? `../../../../public/classesContent/vocabulary-images/${path.replace('./', '')}` : null
      const imageCut = imageFile.replace('../../../../public', '')

      voc.caminhoImg = imageCut
      
      const path1 = audioFilesContext.keys().find((key) => key.replace('./', '') === voc.caminhoAudio)
      const audioFile = path1 ? `../../../../public/classesContent/vocabulary-audios/${path1.replace('./', '')}` : null
      const audioCut = audioFile.replace('../../../../public', '')
      
      voc.caminhoAudio = audioCut

      setPlay('fim')
    })
  }
  
  if(play === ''){mostrarConteudo()}



  const playAudio = (path) =>{new Audio(path).play()}

  return (
    <>
    <OffCanvas/>
    <br/>
    <div className='container mt-4 mb-4'>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4">
        {vocabulary &&
          vocabulary.map((voc, i) => (
            <div className="col" key={i}>
              <div className="card align-content-center h-100">
                <img src={voc.caminhoImg} className="card-img-top equal-height-image" alt="imagem"/>
                <div className="card-body align-self-center">
                  <div className='d-flex justify-content-center flex-wrap'>
                    <button 
                      type="button" 
                      class="btn btn-outline-primary btn-lg"
                      onClick={()=>playAudio(voc.caminhoAudio)}
                    >
                      <h5 className="card-title">
                        {voc.palavra}
                        <FontAwesomeIcon icon={faCirclePlay} className='ms-2'/>
                      </h5>
                    </button>
                  </div>
                  <p className="card-text fs-5">{voc.frase}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {loading && <Carregando/>}
    </div>
  </>
  );
  };

export default Vocabulary;
