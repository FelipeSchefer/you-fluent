import React from 'react'
import style from './home.module.css'
import canadaFlag from "../images/canada-flag.jpg"
import englandFlag from "../images/england-flag.jpg"
import usaFlag from "../images/usa-flag.jpg"
import usaFlag2 from "../images/usa-flag2.jpg"
import jpg1 from "../images/1.jpg"
import jpg2 from "../images/2.jpg"
import jpg3 from "../images/3.jpg"
import jpg4 from "../images/4.jpg"
import jpg5 from "../images/5.jpg"
import jpg6 from "../images/6.jpg"
import NavBar from '../../components/NavBar'

const Home = () => {
  return (
    <div className={style.mainBackground}>
      <NavBar/>
      <div className={`container ${style.main}`}>
        <main>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={canadaFlag} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={englandFlag} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={usaFlag} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={usaFlag2} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <br/>

          <div id='sobre'>
            <h3>Sobre</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={jpg1} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Ambiente completamente virtual</h5>
                    <p className="card-text">
                      Aqui você tem acesso a vídeos, áudios, textos e exercícios de alta qualidade. Além disso, a cada aula, você terá um encontro online com um professor. Ao concluir cada nível, você terá a oportunidade de fazer uma prova para avaliar se está pronto para avançar para a próxima etapa de seu aprendizado.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={jpg2} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Gramática com prática</h5>
                    <p className="card-text">
                      Com facilidade e clareza, você terá objetivos definidos sobre o que estudar e como aplicar o conhecimento.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={jpg3} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Aprenda com audios a falar corretamente</h5>
                    <p className="card-text">
                      Uma das causas de timidez e falta de confiança nas pessoas é a sensação de despreparo ao falar, gerando insegurança e medo de cometer erros. No entanto, aqui você poderá superar esse medo, pois aprenderá a pronunciar corretamente as palavras e alcançar a fluência tão desejada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br/>

          <div id='metodo'>
            <h3>Métodos</h3>
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={jpg4} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Mnemônicas</h5>
                    <p className="card-text">
                      As mnemônicas são técnicas usadas para melhorar a memória. Elas envolvem associar informações a imagens, palavras ou frases fáceis de lembrar. Existem diferentes tipos de mnemônicas, como as de rima, acrônimos e visualização. Elas ajudam a lembrar sequências, listas ou conceitos, utilizando recursos mnemônicos específicos. Cada pessoa pode adaptar essas técnicas de acordo com suas preferências e necessidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Repetição espaçada</h5>
                    <p className="card-text">
                      A repetição espaçada é uma técnica de aprendizado que envolve revisar o material em intervalos crescentes ao longo do tempo para melhorar a retenção e o aprendizado a longo prazo. Em vez de revisar a informação repetidamente em curtos períodos, revisamos pouco antes de esquecer, fortalecendo a memória e aumentando a duração da retenção. É uma estratégia eficaz para otimizar o tempo de estudo e maximizar a eficiência da aprendizagem.                    
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src={jpg5} className="img-fluid rounded-end" alt="..."/>
                </div>
              </div>
            </div>
          </div>

          <br/>

          <div id='precos'>
            <h3>Preços</h3>
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={jpg6} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">O conteúdo é iniciamente GRATUITO</h5>
                    <p className="card-text">
                      Este website e o curso ofertado nela são para a pesquisa do TCC e o seu feedback sobre o site e seu conteúdo ajudaram 
                      no aprimoramento do Trabalho de Conclusão de Curso do curso de Análise e Desenvolvimento de Sistemas.
                      O acesso ao conteudo assim como a plataforma é totalmente <strong>gratuita</strong> uma vez que operiodo de teste assim como
                      o TCC finalizarem este website sairá do ar.
                      Para todos que gostaram dele não se preocupe um dia ele voltará melhorado e com um conteúdo ainda superior a este que está agora
                      disponivel, este website assim como conteúdo que atualmente está disponivel eles se encontram na sua forma BETA, logo será lançada
                      a sua versão profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <br/>
      </div>

      <footer className={style.footer}>
        <br/>
        <div id='contato' className='container'>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"><strong>Link para sua avaliação</strong></h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div class="card" >
                    <div class="card-header">
                      <strong>Contato</strong>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Whatsapp: +55 51 98957-3803 </li>
                      <li class="list-group-item">E-mail: felipe_official@outlook.com</li>
                      <li class="list-group-item">LinkedIn: https://www.linkedin.com/in/felipe-schefer/</li>
                      <li class="list-group-item">GitHub: https://github.com/FelipeSchefer</li>
                      <li class="list-group-item">Desenvolvedor do site: Felipe Teixeira Schefer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </footer>
    </div>
  )
}

export default Home