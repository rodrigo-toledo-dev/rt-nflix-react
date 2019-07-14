import React, { Component } from 'react';


import '../../css/all.css';
import '../../css/agency.css';
import '../../css/custom.css';

import '../../javascript/bootstrap.bundle';
import '../../javascript/jquery.easing';
import '../../javascript/jquery.easing.compatibility';
import '../../javascript/jqBootstrapValidation';
import '../../javascript/contactMe';
import '../../javascript/agency';

import profile0 from '../../images/profile-image-0.png';
import profile1 from '../../images/profile-image-1.png';
import profile2 from '../../images/profile-image-2.png';
import profile3 from '../../images/profile-image-3.png';

class Main extends Component {
  render(){
    return (
      <div id="page-top">
        <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
          <div className='container'>
            <a className='navbar-brand js-scroll-trigger' href='#page-top'>RT NFlix</a>
            <button aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' className='navbar-toggler navbar-toggler-right' data-target='#navbarResponsive' data-toggle='collapse' type='button'>
            Menu
            <i className='fas fa-bars' />
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav text-uppercase ml-auto'>
                <li className='nav-item'>
                  <a className='nav-link js-scroll-trigger' href='#portfolio'>Perfils</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link js-scroll-trigger' href='#services'>Categorias</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link js-scroll-trigger' href='#about'>Lançamentos</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link js-scroll-trigger' href='#team'>Mais votados</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link js-scroll-trigger' href='#contact'>Meus dados</a>
                </li>
                <li className='nav-item'>
                  <input type="text" name="q" id="q" defaultValue="" placeholder="buscar por..." className="nav-link js-scroll-trigger search-at-top" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className='masthead'>
          <div className='container'>
            <div className='intro-text'>
              <div className='intro-lead-in'>Entendiado(a), procurando algo mais?</div>
              <div className='intro-heading text-uppercase'>Já chegou a solução</div>
              <a className='btn btn-secondary btn-xl text-uppercase js-scroll-trigger' href='#services'>Saber mais...</a>
            </div>
          </div>
        </header>
        <section className='bg-light page-section' id='portfolio'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2 className='section-heading text-uppercase'>Perfils</h2>
                <h3 className='section-subheading text-muted'>Uma lista de filmes personalizada para cada Perfil, assim gaste menos tempo escolhendo o que gostaria de assistir.</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 portfolio-item'>
                <a className="portfolio-link" data-toggle="modal" href="#perfil-1">
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <i className='fas fa-plus fa-3x' />
                    </div>
                  </div>
                  <img className="img-fluid" src={profile0} alt="profile0" />
                </a>
                <div className='portfolio-caption'>
                  <h4>Perfil 1</h4>
                </div>
              </div>
              <div className='col-md-6 portfolio-item'>
                <a className="portfolio-link" data-toggle="modal" href="#perfil-2">
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <i className='fas fa-plus fa-3x' />
                    </div>
                  </div>
                  <img className="img-fluid" src={profile1} alt="profile1" />
                </a>
                <div className='portfolio-caption'>
                  <h4>Perfil 2</h4>
                </div>
              </div>
              <div className='col-md-6 portfolio-item'>
                <a className="portfolio-link" data-toggle="modal" href="#perfil-3">
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <i className='fas fa-plus fa-3x' />
                    </div>
                  </div>
                  <img className="img-fluid" src={profile2} alt="profile2" />
                </a>
                <div className='portfolio-caption'>
                  <h4>Perfil 3</h4>
                </div>
              </div>
              <div className='col-md-6 portfolio-item'>
                <a className="portfolio-link" data-toggle="modal" href="#perfil-4">
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <i className='fas fa-plus fa-3x' />
                    </div>
                  </div>
                  <img className="img-fluid" src={profile3} alt="profile3" />
                </a>
                <div className='portfolio-caption'>
                  <h4>Perfil 4</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='page-section' id='services'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2 className='section-heading text-uppercase'>Categorias</h2>
                <p className='text-muted'>Cada Perfil terá sugestões de Filmes a partir das Categorias adicionadas a ele.</p>
                <p className='text-muted'>Escolha um dos Perfis e clique em Adicionar, assim os Filmes e Sugestões estarão no Perfil escolhido.</p>
              </div>
            </div>
            <div className='row text-center' id='genres_list'>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Ação</h4>
                <p>
                  <select className='form-control' url='/genres/28/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Aventura</h4>
                <p>
                  <select className='form-control' url='/genres/12/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Animação</h4>
                <p>
                  <select className='form-control' url='/genres/16/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Comédia</h4>
                <p>
                  <select className='form-control' url='/genres/35/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Crime</h4>
                <p>
                  <select className='form-control' url='/genres/80/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Documentário</h4>
                <p>
                  <select className='form-control' url='/genres/99/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Drama</h4>
                <p>
                  <select className='form-control' url='/genres/18/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Família</h4>
                <p>
                  <select className='form-control' url='/genres/10751/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Fantasia</h4>
                <p>
                  <select className='form-control' url='/genres/14/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>História</h4>
                <p>
                  <select className='form-control' url='/genres/36/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Terror</h4>
                <p>
                  <select className='form-control' url='/genres/27/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Música</h4>
                <p>
                  <select className='form-control' url='/genres/10402/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Mistério</h4>
                <p>
                  <select className='form-control' url='/genres/9648/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Romance</h4>
                <p>
                  <select className='form-control' url='/genres/10749/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Ficção científica</h4>
                <p>
                  <select className='form-control' url='/genres/878/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Cinema TV</h4>
                <p>
                  <select className='form-control' url='/genres/10770/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Thriller</h4>
                <p>
                  <select className='form-control' url='/genres/53/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Guerra</h4>
                <p>
                  <select className='form-control' url='/genres/10752/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div className='col-md-4 mb-10'>
                <h4 className='service-heading'>Faroeste</h4>
                <p>
                  <select className='form-control' url='/genres/37/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='page-section' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2 className='section-heading text-uppercase'>Lançamentos</h2>
                <h3 className='section-subheading text-muted'>Lançamentos, novidades e sugestões para você assistir</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <ul className='timeline'>
                  <li className=''>
                    <div className='timeline-image'>
                      <img className='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///6wtOOCzTNxzwzwvpMeimMHQNTqI.jpg' alt='6wtOOCzTNxzwzwvpMeimMHQNTqI' />
                    </div>
                    <div className='timeline-panel'>
                      <div className='timeline-heading'>
                        <h4>2019-06-28</h4>
                        <h4 className='subheading'>Homem-Aranha: Longe de Casa</h4>
                      </div>
                      <div className='timeline-body'>
                        <p className='text-muted' data-toggle='tooltip' title='Peter Parker está de volta em Homem-Aranha: Longe de Casa, novo capítulo da série De Volta Ao Lar. Nosso amigão da vizinhança decide se unir aos seus melhores amigos para passar férias na Europa. Mas o plano de Peter de abandonar seus feitos heroicos por algumas semanas logo são mudados quando ele concorda em ajudar Nick Fury a solucionar o mistério de ataques de criaturas elementais, criando uma destruição pelo continente...'>Peter Parker está de volta em Homem-Aranha: Longe de Casa, novo capítulo da série De Volta Ao Lar...</p>
                      </div>
                    </div>
                  </li>
                  <li className='timeline-inverted'>
                    <div className='timeline-image'>
                      <img className='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///d586CgWo808sbSbiGVdr6o8KSEr.jpg' alt='d586CgWo808sbSbiGVdr6o8KSEr' />
                    </div>
                    <div className='timeline-panel'>
                      <div className='timeline-heading'>
                        <h4>2019-01-31</h4>
                        <h4 className='subheading'>Alita: Anjo de Combate</h4>
                      </div>
                      <div className='timeline-body'>
                        <p className='text-muted' data-toggle='tooltip' title='Quando Alita (Rosa Salazar) desperta sem memória de quem é, em um mundo futurístico que não reconhece, ela é levada por Ido (Christoph Waltz), um médico compassivo que percebe que em algum lugar nesta casca de ciborgue abandonada está o coração e alma de uma jovem mulher com um passado extraordinário. Enquanto Alita aprende a navegar sua nova vida e as ruas traiçoeiras da Cidade de Ferro, Ido tenta protegê-la de sua misteriosa história, enquanto seu novo amigo de rua Hugo (Keean Johnson) oferece ajuda para recuperar suas memórias. Mas é somente quando as forças mortais e corruptas que controlam a cidade vêm atrás de Alita que ela descobre uma pista de seu passado - ela tem habilidades únicas de combate que os que estão no poder não conseguem controlar. Se ela puder ficar fora de seu alcance, pode ser a chave para salvar seus amigos, sua família e o mundo que ela está amando.'>Quando Alita (Rosa Salazar) desperta sem memória de quem é, em um mundo futurístico que não recon...</p>
                      </div>
                    </div>
                  </li>
                  <li className=''>
                    <div className='timeline-image'>
                      <img className='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///eDIxIvpBm5MsHuafEEmCQIKfG4u.jpg' alt='eDIxIvpBm5MsHuafEEmCQIKfG4u' />
                    </div>
                    <div className='timeline-panel'>
                      <div className='timeline-heading'>
                        <h4>2019-05-15</h4>
                        <h4 className='subheading'>John Wick 3: Parabellum</h4>
                      </div>
                      <div className='timeline-body'>
                        <p className='text-muted' data-toggle='tooltip' title='Após assassinar o chefe da máfia Santino D&#39;Antonio (Riccardo Scamarcio) no Hotel Continental, John Wick (Keanu Reeves) passa a ser perseguido pelos membros da Alta Cúpula sob a recompensa de U$14 milhões. Agora, ele precisa unir forças com antigos parceiros que o ajudaram no passado enquanto luta por sua sobrevivência. by xilften.net'>Após assassinar o chefe da máfia Santino D&#39;Antonio (Riccardo Scamarcio) no Hotel Continental, Joh...</p>
                      </div>
                    </div>
                  </li>
                  <li className='timeline-inverted'>
                    <div className='timeline-image'>
                      <img className='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///gUpO1uHeq16fDx47waCggANIKGR.jpg' alt='gUpO1uHeq16fDx47waCggANIKGR' />
                    </div>
                    <div className='timeline-panel'>
                      <div className='timeline-heading'>
                        <h4>2019-06-19</h4>
                        <h4 className='subheading'>Toy Story 4</h4>
                      </div>
                      <div className='timeline-body'>
                        <p className='text-muted' data-toggle='tooltip' title='Woody, Buzz, Jesse e toda a turma vivem felizes, agora como brinquedos da pequena Bonnie. Entretanto, a chegada de um garfo transformado em brinquedo, Forky, faz com que a calmaria reinante chegue ao fim, justamente porque ele não se aceita como brinquedo.'>Woody, Buzz, Jesse e toda a turma vivem felizes, agora como brinquedos da pequena Bonnie. Entreta...</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-light page-section' id='team'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2 className='section-heading text-uppercase'>Mais votados</h2>
                <h3 className='section-subheading text-muted'>Os que estão realmente em alta pelos usuários!</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='team-member'>
                  <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///uC6TTUhPpQCmgldGyYveKRAu8JN.jpg' alt='uC6TTUhPpQCmgldGyYveKRAu8JN' />
                  <h5 data-toggle='tooltip' title='Dilwale Dulhania Le Jayenge'>Dilwale Dulhania ...</h5>
                  <p className='text-muted'>
                    Média de votos
                    9 (total: 2075)
                  </p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='team-member'>
                  <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' alt='7IiTTgloJzvGI1TAYymCfbfl3vT' />
                  <h5 data-toggle='tooltip' title='기생충'>기생충</h5>
                  <p className='text-muted'>
                    Média de votos
                    8.8 (total: 310)
                  </p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='team-member'>
                  <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///gD1INoVS8haUutzabwUV7Io6akm.jpg' alt='gD1INoVS8haUutzabwUV7Io6akm' />
                  <h5 data-toggle='tooltip' title='Um Sonho de Liberdade'>Um Sonho de Liber...</h5>
                  <p className='text-muted'>
                    Média de votos
                    8.7 (total: 13345)
                  </p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='team-member'>
                  <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///o8DYJTbPdnKqCTEnBcfNGt3NoKn.jpg' alt='o8DYJTbPdnKqCTEnBcfNGt3NoKn' />
                  <h5 data-toggle='tooltip' title='O Poderoso Chefão'>O Poderoso Chefão</h5>
                  <p className='text-muted'>
                    Média de votos
                    8.6 (total: 10195)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='page-section' id='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2 className='section-heading text-uppercase'>Meus dados</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <form id='contactForm' name='sentMessage' noValidate='novalidate'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input className='form-control' data-validation-required-message='Please enter your name.' id='name' placeholder='Nome *' required='required' type='text' />
                        <p className='help-block text-danger'></p>
                      </div>
                      <div className='form-group'>
                        <input className='form-control' data-validation-required-message='Please enter your email address.' id='email' placeholder='Seu email *' required='required' type='email' />
                        <p className='help-block text-danger'></p>
                      </div>
                      <div className='form-group'>
                        <input className='form-control' data-validation-required-message='Please enter your email address.' id='birthday' placeholder='Data de Nascimento *' required='required' type='date' />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input className='form-control' data-validation-required-message='Please enter your phone number.' id='password' placeholder='Sua senha *' required='required' type='password' />
                        <p className='help-block text-danger'></p>
                      </div>
                      <div className='form-group'>
                        <input className='form-control' data-validation-required-message='Please enter your phone number.' id='password_confirmation' placeholder='Confirme sua senha *' required='required' type='password' />
                        <p className='help-block text-danger'></p>
                      </div>
                      <div className='form-group'>
                        <input className='form-control' data-validation-required-message='Please enter your phone number.' id='current_password' placeholder='Senha atual *' required='required' type='password' />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='clearfix'></div>
                    <div className='col-lg-12 text-center'>
                      <div id='success'></div>
                      <button className='btn btn-primary btn-xl text-uppercase' id='sendMessageButton' type='submit'>Atualizar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className='footer'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-12'>
                <span className='copyright'>Copyright © RT NFlix 2019</span>
              </div>
            </div>
          </div>
        </footer>
        <div aria-hidden='true' className='portfolio-modal modal fade' id='perfil-1' role='dialog' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-dismiss='modal'>
                <div className='lr'>
                  <div className='rl'></div>
                </div>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Perfil 1</h2>
                      <p className='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="mx-auto img-fluid d-block" src="../images/profile-image-0.png" alt='profile 0' />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className='btn btn-primary' data-dismiss='modal' type='button'>
                      <i className='fas fa-times' />
                      Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden='true' className='portfolio-modal modal fade' id='perfil-2' role='dialog' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-dismiss='modal'>
                <div className='lr'>
                  <div className='rl'></div>
                </div>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Perfil 2</h2>
                      <p className='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="mx-auto img-fluid d-block" src="../../images/profile-image-1.png" alt='profile 1' />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className='btn btn-primary' data-dismiss='modal' type='button'>
                      <i className='fas fa-times' />
                      Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden='true' className='portfolio-modal modal fade' id='perfil-3' role='dialog' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-dismiss='modal'>
                <div className='lr'>
                  <div className='rl'></div>
                </div>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Perfil 3</h2>
                      <p className='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="mx-auto img-fluid d-block" src="../../images/profile-image-2.png" alt='profile 2'/>
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className='btn btn-primary' data-dismiss='modal' type='button'>
                      <i className='fas fa-times' />
                      Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden='true' className='portfolio-modal modal fade' id='perfil-4' role='dialog' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='close-modal' data-dismiss='modal'>
                <div className='lr'>
                  <div className='rl'></div>
                </div>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='modal-body'>
                      <h2 className='text-uppercase'>Perfil 4</h2>
                      <p className='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="mx-auto img-fluid d-block" src="../../images/profile-image-3.png" alt="profile 3" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className='btn btn-primary' data-dismiss='modal' type='button'>
                      <i className='fas fa-times' />
                      Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default Main;