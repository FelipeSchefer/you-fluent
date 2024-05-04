import React from 'react'
import NavBar from '../../components/NavBar';
import useValidationCadastro from './hooks/useValidationCadastro';

const CadastroUsuario = () => {
  const {
    nomeValido     , nomeInvalido,
    sobrenomeValido, sobrenomeInvalido,
    cidadeValido   , cidadeInvalido,
    celularValido  , celularInvalido,
    estadoURValido , estadoURInvalido,
    cursoValido    , cursoInvalido,
    emailValido    , emailInvalido,
    senhaValido    , senhaInvalido,
    senhasIguais   , senhasDesiguais,
    camposInvalidos,
    enviarForm,
    validarInputsFrom,
    cadastrarUsuario
  } = useValidationCadastro()

  return (
    <>
      <NavBar/>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6 card shadow p-3 bg-body rounded mt-4 mb-4">
            <h3 className='mt-4'><strong>Cadastro de usuario</strong></h3>

            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input 
                type="text" 
                id="nome" 
                name="nome"
                className={
                  `form-control
                  ${nomeValido   ? 'is-valid'  : '' }
                  ${nomeInvalido ? 'is-invalid': '' }
                  `
                } 
                onChange={cadastrarUsuario}
              />
              {
                nomeValido  
                  ? <div className="valid-feedback">Campo preenchido</div>  
                  : <div className="invalid-feedback">Este campo deve conter seu nome</div>
              }
            </div>
            <div className="mb-3">
              <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
              <input 
                type="text" 
                id="sobrenome" 
                name="sobrenome"
                className={
                  `form-control
                  ${sobrenomeValido   ? 'is-valid'  : '' }
                  ${sobrenomeInvalido ? 'is-invalid': '' }
                  `
                } 
                onChange={cadastrarUsuario}
              />
              {
                sobrenomeValido  
                ? <div className="valid-feedback">Campo preenchido</div>  
                : <div className="invalid-feedback">Este campo deve conter seu sobrenome</div>
              }
            </div>

            <div className="mb-3">
              <label htmlFor="cidade" className="form-label">Cidade</label>
              <input 
                type="text"
                id="cidade" 
                name="cidade"
                className={
                  `form-control
                  ${cidadeValido   ? 'is-valid'  : '' }
                  ${cidadeInvalido ? 'is-invalid': '' }
                  `
                } 
                onChange={cadastrarUsuario}
              />
              {
                cidadeValido  
                ? <div className="valid-feedback">Campo preenchido</div>  
                : <div className="invalid-feedback">Este campo deve conter o nome da sua cidade</div>
              }
            </div>

            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">Telefone</label>
              <input 
                type="tel" 
                id="telefone" 
                name="telefone"
                className={`form-control`} 
                onChange={cadastrarUsuario}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="celular" className="form-label">Celular</label>
              <input 
                type="tel"  
                id="celular" 
                name="celular"
                className={
                  `form-control
                  ${celularValido   ? 'is-valid'  : '' }
                  ${celularInvalido ? 'is-invalid': '' }
                  `
                } 
                onChange={cadastrarUsuario}
              />
              {
                celularValido  
                ? <div className="valid-feedback">Campo preenchido</div>  
                : <div className="invalid-feedback">O campo deve conter um numero de celular valido</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="estadoUR" className="form-label">Estado</label>
              <select 
                aria-label="Default select example"
                name="estadoUR"
                id='estadoUR'
                className={
                  `form-control
                  ${estadoURValido   ? 'is-valid'  : '' }
                  ${estadoURInvalido ? 'is-invalid': '' }
                  `
                } 
                onChange={cadastrarUsuario}
              >
                <option defaultValue>--Estado--</option>
                <option value="RS">RS</option>
                <option value="SP">SP</option>
              </select>
              {
                estadoURValido  
                  ? <div className="valid-feedback">O seu estado foi escolhido</div>  
                  : <div className="invalid-feedback">Escolha seu Estado</div>
              }
            </div>

            <div className="mb-3">
              <label htmlFor="curso" className="form-label">Curso</label>
              <select 
                aria-label="Default select example"
                name="curso"
                id='curso'
                className={
                  `form-control
                  ${cursoValido   ? 'is-valid'  : '' }
                  ${cursoInvalido ? 'is-invalid': '' }
                  `
                } 
                onChange={cadastrarUsuario}
              >
                <option defaultValue>--Curso--</option>
                <option value="Inglês">Inglês</option>
                <option value="Espanhol" disabled>Espanhol - não disponivel</option>
              </select>
              {
                cursoValido  
                ? <div className="valid-feedback">Seu curso foi escolhido</div>  
                : <div className="invalid-feedback">Escolha um curso</div>
              }
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
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
                onChange={cadastrarUsuario}
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
                onChange={cadastrarUsuario}
                required
              />
              {
                senhaValido 
                  ? <div className="valid-feedback">A sua senha está no padrão correto de 6 a 20 caracteres</div>  
                  : <div className="invalid-feedback">A senha está incorreta ou não atente a media de 6 a 20 caracteres</div>
              }
            </div>

            <div className="mb-3">
              <label htmlFor="confirmaSenha" className="form-label">Confirma a senha</label>
              <input 
                type="password" 
                id="confirmaSenha" 
                name="confirmaSenha"
                className={
                  `form-control
                  ${senhasIguais   ? 'is-valid'  : '' }
                  ${senhasDesiguais ? 'is-invalid': '' }
                  `
                } 
                onChange={cadastrarUsuario}
                required
              />
              {
                senhasIguais 
                  ? <div className="valid-feedback">As senhas estão iguais</div>  
                  : <div className="invalid-feedback">As senhas estão diferentes favor digitá-las iguais</div>
              }
            </div>
            {
              camposInvalidos &&
              <div className="alert alert-danger" role="alert">
                <small>
                  <strong>
                    Existem campos invalidos, por favor preencha todos
                  </strong>
                </small>
              </div>
            }
            <button 
              className="btn btn-primary mb-4" 
              onClick={() => {
                enviarForm()
                validarInputsFrom()
              }}
            > Submit
            </button>
          </div>
        </div>
        <br/>
      </div>
    </>
  )
}

export default CadastroUsuario