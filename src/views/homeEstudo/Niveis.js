import api from '../../Api'
import axios from 'axios'
import './HomeEstudo.css'

const listaNiveis = []

axios.get(`${api}/homeEstudo`)
.then(res => { 
  const nivel = res.data;
  // console.log('nivel')
  // console.log(nivel)
  listaNiveis.push(nivel)
})
export default listaNiveis
