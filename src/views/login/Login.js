import React from 'react'
import NavBar from '../../components/NavBar'
import useValidationLogin from './hooks/useValidationLogin'

const Login = () => {
  const {
    emailValido, emailInvalido,
    senhaValido, senhaInvalido,
    logar      , 
    trocaSenha , 
    setTrocaSenha,
    trocarSenha,
    buscarDado,
    validarEmail,
    validarInputsFrom
  } = useValidationLogin()

  return (
    <>
      <NavBar />
      {
        trocaSenha 
          ?
            (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-4 card shadow p-3 bg-body rounded mt-4 mb-4">
                    <div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          className={
                            `form-control
                            ${emailValido   ? 'is-valid'  : '' }
                            ${emailInvalido ? 'is-invalid': '' }
                            `
                          } 
                          onChange={buscarDado}
                          required
                        />
                        {
                          emailValido  
                            ? <div className="valid-feedback">O seu email está no formato correto</div>  
                            : <div className="invalid-feedback">Certifique-se de que o email está escrito corretamente e que contenha @ e .com</div>
                        }
                      </div>
                      <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input 
                          type="password" 
                          id="senha" 
                          name="senha"
                          className={
                            `form-control
                            ${senhaValido   ? 'is-valid'  : '' }
                            ${senhaInvalido ? 'is-invalid': '' }
                            `
                          } 
                          onChange={buscarDado}
                          required
                        />
                        {
                          senhaValido 
                            ? <div className="valid-feedback">A sua senha está no padrão correto de 6 a 20 caracteres</div>  
                            : <div className="invalid-feedback">A senha está incorreta ou não atente a media de 6 a 20 caracteres</div>
                        }
                      </div>
                      {
                        logar &&
                        <div className="alert alert-danger" role="alert">
                          <small>
                            <strong>
                              O seu login não foi encontrado, caso queira cadastrar-se clique no botão abaixo
                            </strong>
                          </small>
                        </div>
                      }
                      <div className="d-grid gap-3">
                        <button 
                          type="button"
                          className="btn btn-secondary"
                          onClick={() =>{
                            validarEmail()
                            validarInputsFrom()
                          }}
                          > Logar
                        </button>
                          
                        <a href='/cadastro' className="btn btn-outline-danger btn-sm">
                          <small>Deseja se cadastrar?</small>
                        </a>
                       
                        <button 
                          type="button" className="btn btn-outline-warning btn-sm" 
                          onClick={()=>setTrocaSenha(false)}
                        >
                          <small>
                            Esqueceu a senha?
                          </small>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          :
            (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-4 card shadow p-3 bg-body rounded mt-4 mb-4">
                    <div>
                      <h1>Esqueceu a senha?</h1>
                      <p>sem problemas escreva o seu meio para a recuperação de sua senha</p>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          className={
                            `form-control
                            ${emailValido   ? 'is-valid'  : '' }
                            ${emailInvalido ? 'is-invalid': '' }
                            `
                          } 
                          onChange={buscarDado}
                          required
                        />
                        {
                          emailValido  
                            ? <div className="valid-feedback">O seu email está no formato correto</div>  
                            : <div className="invalid-feedback">Certifique-se de que o email está escrito corretamente e que contenha @ e .com</div>
                        }
                      </div>
                      <div className="d-grid gap-3">
                        <button 
                          type="button"
                          className="btn btn-secondary"
                          onClick={() =>{
                            trocarSenha()
                          }}
                          > Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
      }
    </>  
  )
}

export default Login