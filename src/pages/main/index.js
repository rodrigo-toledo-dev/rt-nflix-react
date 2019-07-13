import React, { Component } from 'react';

import '../../css/all.css';
import '../../css/agency.css';
import '../../css/custom.css';

class Main extends Component {
  render(){
    return (
      <div id="page-top">
        <nav class='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
          <div class='container'>
            <a class='navbar-brand js-scroll-trigger' href='#page-top'>RT NFlix</a>
            <button aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' class='navbar-toggler navbar-toggler-right' data-target='#navbarResponsive' data-toggle='collapse' type='button'>
            Menu
            <i class='fas fa-bars'></i>
            </button>
            <div class='collapse navbar-collapse' id='navbarResponsive'>
              <ul class='navbar-nav text-uppercase ml-auto'>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='#portfolio'>Perfils</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='#services'>Categorias</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='#about'>Lançamentos</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='#team'>Mais votados</a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='#contact'>Meus dados</a>
                </li>
                <li class='nav-item'>
                  <input type="text" name="q" id="q" value="" placeholder="buscar por..." class="nav-link js-scroll-trigger search-at-top" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header class='masthead'>
          <div class='container'>
            <div class='intro-text'>
              <div class='intro-lead-in'>Entendiado(a), procurando algo mais?</div>
              <div class='intro-heading text-uppercase'>Já chegou a solução</div>
              <a class='btn btn-secondary btn-xl text-uppercase js-scroll-trigger' href='#services'>Saber mais...</a>
            </div>
          </div>
        </header>
        <section class='bg-light page-section' id='portfolio'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12 text-center'>
                <h2 class='section-heading text-uppercase'>Perfils</h2>
                <h3 class='section-subheading text-muted'>Uma lista de filmes personalizada para cada Perfil, assim gaste menos tempo escolhendo o que gostaria de assistir.</h3>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-6 portfolio-item'>
                <a class="portfolio-link" data-toggle="modal" href="#perfil-1">
                  <div class='portfolio-hover'>
                    <div class='portfolio-hover-content'>
                      <i class='fas fa-plus fa-3x'></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="../../images/profile-image-0.png" alt="profile0" />
                </a>
                <div class='portfolio-caption'>
                  <h4>Perfil 1</h4>
                </div>
              </div>
              <div class='col-md-6 portfolio-item'>
                <a class="portfolio-link" data-toggle="modal" href="#perfil-2">
                  <div class='portfolio-hover'>
                    <div class='portfolio-hover-content'>
                      <i class='fas fa-plus fa-3x'></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="../../images/assets/profile-image-1.png" alt="profile1" />
                </a>
                <div class='portfolio-caption'>
                  <h4>Perfil 2</h4>
                </div>
              </div>
              <div class='col-md-6 portfolio-item'>
                <a class="portfolio-link" data-toggle="modal" href="#perfil-3">
                  <div class='portfolio-hover'>
                    <div class='portfolio-hover-content'>
                      <i class='fas fa-plus fa-3x'></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="../../images/profile-image-2.png" alt="profile2" />
                </a>
                <div class='portfolio-caption'>
                  <h4>Perfil 3</h4>
                </div>
              </div>
              <div class='col-md-6 portfolio-item'>
                <a class="portfolio-link" data-toggle="modal" href="#perfil-4">
                  <div class='portfolio-hover'>
                    <div class='portfolio-hover-content'>
                      <i class='fas fa-plus fa-3x'></i>
                    </div>
                  </div>
                  <img class="img-fluid" src="../../images/profile-image-3.png" alt="profile3" />
                </a>
                <div class='portfolio-caption'>
                  <h4>Perfil 4</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class='page-section' id='services'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12 text-center'>
                <h2 class='section-heading text-uppercase'>Categorias</h2>
                <p class='text-muted'>Cada Perfil terá sugestões de Filmes a partir das Categorias adicionadas a ele.</p>
                <p class='text-muted'>Escolha um dos Perfis e clique em Adicionar, assim os Filmes e Sugestões estarão no Perfil escolhido.</p>
              </div>
            </div>
            <div class='row text-center' id='genres_list'>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Ação</h4>
                <p>
                  <select class='form-control' url='/genres/28/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Aventura</h4>
                <p>
                  <select class='form-control' url='/genres/12/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Animação</h4>
                <p>
                  <select class='form-control' url='/genres/16/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Comédia</h4>
                <p>
                  <select class='form-control' url='/genres/35/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Crime</h4>
                <p>
                  <select class='form-control' url='/genres/80/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Documentário</h4>
                <p>
                  <select class='form-control' url='/genres/99/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Drama</h4>
                <p>
                  <select class='form-control' url='/genres/18/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Família</h4>
                <p>
                  <select class='form-control' url='/genres/10751/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Fantasia</h4>
                <p>
                  <select class='form-control' url='/genres/14/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>História</h4>
                <p>
                  <select class='form-control' url='/genres/36/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Terror</h4>
                <p>
                  <select class='form-control' url='/genres/27/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Música</h4>
                <p>
                  <select class='form-control' url='/genres/10402/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Mistério</h4>
                <p>
                  <select class='form-control' url='/genres/9648/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Romance</h4>
                <p>
                  <select class='form-control' url='/genres/10749/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Ficção científica</h4>
                <p>
                  <select class='form-control' url='/genres/878/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Cinema TV</h4>
                <p>
                  <select class='form-control' url='/genres/10770/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Thriller</h4>
                <p>
                  <select class='form-control' url='/genres/53/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Guerra</h4>
                <p>
                  <select class='form-control' url='/genres/10752/add_profile'>
                    <option>Escolha um Perfil para esta Categoria</option>
                    <option value="perfil-1">Adicionar ao perfil: Perfil 1</option>
                    <option value="perfil-2">Adicionar ao perfil: Perfil 2</option>
                    <option value="perfil-3">Adicionar ao perfil: Perfil 3</option>
                    <option value="perfil-4">Adicionar ao perfil: Perfil 4</option>
                  </select>
                </p>
              </div>
              <div class='col-md-4 mb-10'>
                <h4 class='service-heading'>Faroeste</h4>
                <p>
                  <select class='form-control' url='/genres/37/add_profile'>
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
        <section class='page-section' id='about'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12 text-center'>
                <h2 class='section-heading text-uppercase'>Lançamentos</h2>
                <h3 class='section-subheading text-muted'>Lançamentos, novidades e sugestões para você assistir</h3>
              </div>
            </div>
            <div class='row'>
              <div class='col-lg-12'>
                <ul class='timeline'>
                  <li class=''>
                    <div class='timeline-image'>
                      <img class='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///6wtOOCzTNxzwzwvpMeimMHQNTqI.jpg' />
                    </div>
                    <div class='timeline-panel'>
                      <div class='timeline-heading'>
                        <h4>2019-06-28</h4>
                        <h4 class='subheading'>Homem-Aranha: Longe de Casa</h4>
                      </div>
                      <div class='timeline-body'>
                        <p class='text-muted' data-toggle='tooltip' title='Peter Parker está de volta em Homem-Aranha: Longe de Casa, novo capítulo da série De Volta Ao Lar. Nosso amigão da vizinhança decide se unir aos seus melhores amigos para passar férias na Europa. Mas o plano de Peter de abandonar seus feitos heroicos por algumas semanas logo são mudados quando ele concorda em ajudar Nick Fury a solucionar o mistério de ataques de criaturas elementais, criando uma destruição pelo continente...'>Peter Parker está de volta em Homem-Aranha: Longe de Casa, novo capítulo da série De Volta Ao Lar...</p>
                      </div>
                    </div>
                  </li>
                  <li class='timeline-inverted'>
                    <div class='timeline-image'>
                      <img class='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///d586CgWo808sbSbiGVdr6o8KSEr.jpg' />
                    </div>
                    <div class='timeline-panel'>
                      <div class='timeline-heading'>
                        <h4>2019-01-31</h4>
                        <h4 class='subheading'>Alita: Anjo de Combate</h4>
                      </div>
                      <div class='timeline-body'>
                        <p class='text-muted' data-toggle='tooltip' title='Quando Alita (Rosa Salazar) desperta sem memória de quem é, em um mundo futurístico que não reconhece, ela é levada por Ido (Christoph Waltz), um médico compassivo que percebe que em algum lugar nesta casca de ciborgue abandonada está o coração e alma de uma jovem mulher com um passado extraordinário. Enquanto Alita aprende a navegar sua nova vida e as ruas traiçoeiras da Cidade de Ferro, Ido tenta protegê-la de sua misteriosa história, enquanto seu novo amigo de rua Hugo (Keean Johnson) oferece ajuda para recuperar suas memórias. Mas é somente quando as forças mortais e corruptas que controlam a cidade vêm atrás de Alita que ela descobre uma pista de seu passado - ela tem habilidades únicas de combate que os que estão no poder não conseguem controlar. Se ela puder ficar fora de seu alcance, pode ser a chave para salvar seus amigos, sua família e o mundo que ela está amando.'>Quando Alita (Rosa Salazar) desperta sem memória de quem é, em um mundo futurístico que não recon...</p>
                      </div>
                    </div>
                  </li>
                  <li class=''>
                    <div class='timeline-image'>
                      <img class='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///eDIxIvpBm5MsHuafEEmCQIKfG4u.jpg' />
                    </div>
                    <div class='timeline-panel'>
                      <div class='timeline-heading'>
                        <h4>2019-05-15</h4>
                        <h4 class='subheading'>John Wick 3: Parabellum</h4>
                      </div>
                      <div class='timeline-body'>
                        <p class='text-muted' data-toggle='tooltip' title='Após assassinar o chefe da máfia Santino D&#39;Antonio (Riccardo Scamarcio) no Hotel Continental, John Wick (Keanu Reeves) passa a ser perseguido pelos membros da Alta Cúpula sob a recompensa de U$14 milhões. Agora, ele precisa unir forças com antigos parceiros que o ajudaram no passado enquanto luta por sua sobrevivência. by xilften.net'>Após assassinar o chefe da máfia Santino D&#39;Antonio (Riccardo Scamarcio) no Hotel Continental, Joh...</p>
                      </div>
                    </div>
                  </li>
                  <li class='timeline-inverted'>
                    <div class='timeline-image'>
                      <img class='img-fluid rounded-circle poster-image-size' src='http://image.tmdb.org/t/p/w185///gUpO1uHeq16fDx47waCggANIKGR.jpg' />
                    </div>
                    <div class='timeline-panel'>
                      <div class='timeline-heading'>
                        <h4>2019-06-19</h4>
                        <h4 class='subheading'>Toy Story 4</h4>
                      </div>
                      <div class='timeline-body'>
                        <p class='text-muted' data-toggle='tooltip' title='Woody, Buzz, Jesse e toda a turma vivem felizes, agora como brinquedos da pequena Bonnie. Entretanto, a chegada de um garfo transformado em brinquedo, Forky, faz com que a calmaria reinante chegue ao fim, justamente porque ele não se aceita como brinquedo.'>Woody, Buzz, Jesse e toda a turma vivem felizes, agora como brinquedos da pequena Bonnie. Entreta...</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class='bg-light page-section' id='team'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12 text-center'>
                <h2 class='section-heading text-uppercase'>Mais votados</h2>
                <h3 class='section-subheading text-muted'>Os que estão realmente em alta pelos usuários!</h3>
              </div>
            </div>
            <div class='row'>
              <div class='col-sm-3'>
                <div class='team-member'>
                  <img class='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///uC6TTUhPpQCmgldGyYveKRAu8JN.jpg' />
                  <h5 data-toggle='tooltip' title='Dilwale Dulhania Le Jayenge'>Dilwale Dulhania ...</h5>
                  <p class='text-muted'>
                    Média de votos
                    9 (total: 2075)
                  </p>
                </div>
              </div>
              <div class='col-sm-3'>
                <div class='team-member'>
                  <img class='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' />
                  <h5 data-toggle='tooltip' title='기생충'>기생충</h5>
                  <p class='text-muted'>
                    Média de votos
                    8.8 (total: 310)
                  </p>
                </div>
              </div>
              <div class='col-sm-3'>
                <div class='team-member'>
                  <img class='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///gD1INoVS8haUutzabwUV7Io6akm.jpg' />
                  <h5 data-toggle='tooltip' title='Um Sonho de Liberdade'>Um Sonho de Liber...</h5>
                  <p class='text-muted'>
                    Média de votos
                    8.7 (total: 13345)
                  </p>
                </div>
              </div>
              <div class='col-sm-3'>
                <div class='team-member'>
                  <img class='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///o8DYJTbPdnKqCTEnBcfNGt3NoKn.jpg' />
                  <h5 data-toggle='tooltip' title='O Poderoso Chefão'>O Poderoso Chefão</h5>
                  <p class='text-muted'>
                    Média de votos
                    8.6 (total: 10195)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class='page-section' id='contact'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12 text-center'>
                <h2 class='section-heading text-uppercase'>Meus dados</h2>
              </div>
            </div>
            <div class='row'>
              <div class='col-lg-12'>
                <form id='contactForm' name='sentMessage' novalidate='novalidate'>
                  <div class='row'>
                    <div class='col-md-6'>
                      <div class='form-group'>
                        <input class='form-control' data-validation-required-message='Please enter your name.' id='name' placeholder='Nome *' required='required' type='text' />
                        <p class='help-block text-danger'></p>
                      </div>
                      <div class='form-group'>
                        <input class='form-control' data-validation-required-message='Please enter your email address.' id='email' placeholder='Seu email *' required='required' type='email' />
                        <p class='help-block text-danger'></p>
                      </div>
                      <div class='form-group'>
                        <input class='form-control' data-validation-required-message='Please enter your email address.' id='birthday' placeholder='Data de Nascimento *' required='required' type='date' />
                        <p class='help-block text-danger'></p>
                      </div>
                    </div>
                    <div class='col-md-6'>
                      <div class='form-group'>
                        <input class='form-control' data-validation-required-message='Please enter your phone number.' id='password' placeholder='Sua senha *' required='required' type='password' />
                        <p class='help-block text-danger'></p>
                      </div>
                      <div class='form-group'>
                        <input class='form-control' data-validation-required-message='Please enter your phone number.' id='password_confirmation' placeholder='Confirme sua senha *' required='required' type='password' />
                        <p class='help-block text-danger'></p>
                      </div>
                      <div class='form-group'>
                        <input class='form-control' data-validation-required-message='Please enter your phone number.' id='current_password' placeholder='Senha atual *' required='required' type='password' />
                        <p class='help-block text-danger'></p>
                      </div>
                    </div>
                    <div class='clearfix'></div>
                    <div class='col-lg-12 text-center'>
                      <div id='success'></div>
                      <button class='btn btn-primary btn-xl text-uppercase' id='sendMessageButton' type='submit'>Atualizar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer class='footer'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-md-12'>
                <span class='copyright'>Copyright © RT NFlix 2019</span>
              </div>
            </div>
          </div>
        </footer>
        <div aria-hidden='true' class='portfolio-modal modal fade' id='perfil-1' role='dialog' tabindex='-1'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='close-modal' data-dismiss='modal'>
                <div class='lr'>
                  <div class='rl'></div>
                </div>
              </div>
              <div class='container'>
                <div class='row'>
                  <div class='col-lg-12'>
                    <div class='modal-body'>
                      <h2 class='text-uppercase'>Perfil 1</h2>
                      <p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img class="mx-auto img-fluid d-block" src="/assets/profile-image-0-94b18dcd9d67c8fd054968d55d440b1d87a03a38a2a736b6a139dfcf91adde84.png" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul class='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button class='btn btn-primary' data-dismiss='modal' type='button'>
                      <i class='fas fa-times'></i>
                      Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden='true' class='portfolio-modal modal fade' id='perfil-2' role='dialog' tabindex='-1'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='close-modal' data-dismiss='modal'>
                <div class='lr'>
                  <div class='rl'></div>
                </div>
              </div>
              <div class='container'>
                <div class='row'>
                  <div class='col-lg-12'>
                    <div class='modal-body'>
                      <h2 class='text-uppercase'>Perfil 2</h2>
                      <p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img class="mx-auto img-fluid d-block" src="/assets/profile-image-1-f963a0adb97a053be51d1e985121e665faa21cfe24ce7330f588176f108fe290.png" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul class='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button class='btn btn-primary' data-dismiss='modal' type='button'>
                      <i class='fas fa-times'></i>
                      Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden='true' class='portfolio-modal modal fade' id='perfil-3' role='dialog' tabindex='-1'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='close-modal' data-dismiss='modal'>
                <div class='lr'>
                  <div class='rl'></div>
                </div>
              </div>
              <div class='container'>
                <div class='row'>
                  <div class='col-lg-12'>
                    <div class='modal-body'>
                      <h2 class='text-uppercase'>Perfil 3</h2>
                      <p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img class="mx-auto img-fluid d-block" src="/assets/profile-image-2-ae0b4df8a8d80dccc7a4a91ae5348f1e7728eb7af5e63310934bfd5bd79f2766.png" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul class='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button class='btn btn-primary' data-dismiss='modal' type='button'>
                      <i class='fas fa-times'></i>
                      Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden='true' class='portfolio-modal modal fade' id='perfil-4' role='dialog' tabindex='-1'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='close-modal' data-dismiss='modal'>
                <div class='lr'>
                  <div class='rl'></div>
                </div>
              </div>
              <div class='container'>
                <div class='row'>
                  <div class='col-lg-12'>
                    <div class='modal-body'>
                      <h2 class='text-uppercase'>Perfil 4</h2>
                      <p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
                      <img class="mx-auto img-fluid d-block" src="/assets/profile-image-3-0fbd391bf4a38c4bc495898dcb25827052535a57dcc81d1bf78f9b9dcfbd701b.png" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul class='list-inline'>
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button class='btn btn-primary' data-dismiss='modal' type='button'>
                      <i class='fas fa-times'></i>
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