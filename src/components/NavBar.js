import React, { useState } from 'react'
import './css/NavBar.css'

const NavBar = () => {
  const [abreFecha,setAbreFecha] = useState(false)

  const [btn, setBtn] = useState({
    collapsed: 'collapsed',
    expanded: false,
    navBarCollapsed: ''
  })

  const abrirBtnHamburger = () =>{
    setBtn({
      collapsed: '',
      expanded: true,
      navBarCollapsed: 'show'
    })
    setAbreFecha(true)
  }

  const fecharBtnHamburger = () =>{
    setBtn({
      collapsed: 'collapsed',
      expanded: false,
      navBarCollapsed: ''
    })
    setAbreFecha(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-background navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">YouFluent</a>
        {
          abreFecha 
          ?
            <button type="button" className="btn-close" aria-label="Close" onClick={fecharBtnHamburger}></button>
          :
            <button 
              className={"navbar-toggler " + btn.collapsed} 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarTogglerDemo01" 
              aria-controls="navbarTogglerDemo01" 
              aria-expanded={btn.expanded}
              aria-label="Toggle navigation"
              onClick={abrirBtnHamburger}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
        }

        <div className={"collapse navbar-collapse " + btn.navBarCollapsed} id="navbarTogglerDemo01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#metodo">Método</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#precos">Preços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contato">Contato</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cadastro">Cadastro</a>
            </li>
          </ul>
        </div>
      </div>  
    </nav>
  )
}

export default NavBar