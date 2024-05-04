import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import Login from '../login/Login'
import PrivateRoutes from '../../components/utils/PrivateRoutes'
import { UserContext } from '../../components/utils/UserContext'
import CadastroUsuario from '../cadastro/CadastroUsuario'
import HomeEstudo from '../homeEstudo/HomeEstudo'
import SalaDeAtividades from '../salaDeAtividades/SalaDeAtividades'
import Exercises from '../salaDeAtividades/exercises/Exercises'
import Grammar from '../salaDeAtividades/grammar/Grammar'
import ListeningReading from '../salaDeAtividades/listening-reading/ListeningReading'
import Vocabulary from '../salaDeAtividades/vocabulary/Vocabulary'
import Token from '../../reset/Token'

const Rotas = () => {
  const [user, setUser] = useState({ 
    userStatus: false,
    userEmail: '',
    userNome: '',
    userPontuacao: 0,
    userNivel: 0,
    userAula: 0,
    userNivelAtual: 0,
    userAulaAtual: 0
  })

  if(typeof(Storage) !== "undefined"){
    localStorage.setItem("person", JSON.stringify(user)); // agora ele é uma String
  }
  
  localStorage.getItem("person") // precisa fazer um JSON.parse()

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>  }/>
          <Route path="/cadastro" element={<CadastroUsuario/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/:id/Auth/:token" element={<Token/>}/>

          <Route element={<PrivateRoutes liberado={user.userStatus}/>}>
            <Route path="/homeEstudo" element={<HomeEstudo/>}/>
            <Route path="/salaDeAtividades" element={<SalaDeAtividades/>}/>
            <Route path="/exercises" element={<Exercises/>}/>
            <Route path="/grammar" element={<Grammar/>}/>
            <Route path="/listening-reading" element={<ListeningReading/>}/>
            <Route path="/vocabulary" element={<Vocabulary/>}/>
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default Rotas