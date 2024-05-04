import React, { useContext, useState } from 'react'
import { UserContext } from './utils/UserContext'
/*
* closeBtn escolhe a cor do botão de fechar se branco ou preto usando boolean
*/

const Pontuacao = ({closeBtn}) => {
    const {user} = useContext(UserContext)
    const [abreFecha, setAbreFecha] = useState(false)
    // const [aula, setAula] = useState(0)
    // const [nivel, setNivel] = useState(0)

    const [btn, setBtn] = useState({
      collapsed: 'collapsed',
      expanded: false,
      show: ''
    })
  
    const abrirBtnHamburger = () =>{
      setBtn({
        collapsed: '',
        expanded: true,
        show: 'show'
      })
      setAbreFecha(true)

      // setNivel(user.userNivel)
      // setAula(user.userAula)

    }
  
    const fecharBtnHamburger = () =>{
      setBtn({
        collapsed: 'collapsed',
        expanded: false,
        show: ''
      })
      setAbreFecha(false)
    }

    return (
        <div className="container">
            <div className='hstack gap-3 mb-2'>
                <a 
                    className={"btn btn-outline-primary " + btn.collapsed } 
                    data-bs-toggle="collapse" 
                    href="#collapseExample" 
                    role="button" 
                    aria-expanded={btn.expanded} 
                    aria-controls="collapseExample"
                    onClick={abrirBtnHamburger}
                >
                    Clique aqui para ver sua pontuação
                </a>
                {
                    abreFecha &&
                    <div>
                        <div className="vr"></div>
                        <button type="button" className={`${closeBtn ? 'btn-close btn btn-outline-danger' :'btn-close btn-close-white'} ms-2`} aria-label="Close" onClick={fecharBtnHamburger}></button>
                    </div>
                }
            </div>
            <div className={"collapse " + btn.show} id="collapseExample">
                <div className="card card-body bg-dark bg-gradient bg-opacity-10">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Pontuação total:
                            <span className="badge bg-primary rounded-pill">{user.userPontuacao}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Nivel atual:
                            <span className="badge bg-primary rounded-pill">{user.userNivel}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Ultima aula disponivel:
                            <span className="badge bg-primary rounded-pill">{user.userAula}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pontuacao