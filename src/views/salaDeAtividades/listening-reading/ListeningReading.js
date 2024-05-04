import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import api from '../../../Api'
import Carregando from '../../../components/Carregando'
import OffCanvas from '../../../components/OffCanvas'
import useFormatText from '../../../components/hooks/useFormatText'
import { UserContext } from '../../../components/utils/UserContext'

const audioFilesContext = require.context(
  '../../../../public/classesContent/listening-reading',
  true,
  /\.mp3$/
);


const ListeningReading = () => {
  const {formatText} = useFormatText()
  const [play, setPlay] = useState('')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const {user} = useContext(UserContext)
  const nivel = user.userNivelAtual
  const aula = user.userAulaAtual


  useEffect(() =>{
    const fetchPost = async () =>{
      setLoading(true)
      await axios.post(`${api}/listening-reading`,{
        nivel,
        aula
      }).then((response) => { 
        console.log('response')
        setPosts(response.data)
      }).catch((rejected)=> { console.error(rejected.response.data)})
      setLoading(false)
    }
    fetchPost()
  },[nivel, aula])

  const audioPlay = async () =>{
    await posts.map((post) => {
      const path = audioFilesContext.keys().find((key) => key.replace('./', '') === post.audio)
      const audioFile = path ? `../../../../public/classesContent/listening-reading/${path.replace('./', '')}` : null
      const audioCut = audioFile.replace('../../../../public/', '')

      post.audio = audioCut

      setPlay(audioCut)
    })
  }
  
  if(play === ''){audioPlay()}
  

  return (
    <>
      <OffCanvas/>
      <br/>
      <div className='container mt-5'>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
            <div className='shadow p-3 mb-5 bg-body rounded'>
              <h1>Listening Reading</h1>
              {
                posts.map((post, i) =>(
                  <div key={i}>
                    <br></br>
                    <p><strong>{post.titulo}</strong></p>
                    <p className="fw-semibold">
                      {
                        formatText(post.texto)
                      }
                    </p>
                    <audio controls>
                      <source 
                        src={post.audio}            
                        type={"audio/mp3"}
                        />
                      Your browser does not support the audio element.
                    </audio>
                    <hr/>
                  </div>
                ))
              }
              {loading && <Carregando/>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListeningReading
