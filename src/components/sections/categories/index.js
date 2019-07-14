import React from 'react';

const Categories = () => {
  return (
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
  )
}

export default Categories;