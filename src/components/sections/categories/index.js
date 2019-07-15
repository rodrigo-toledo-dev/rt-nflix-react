import React, { Component } from 'react';
import {api, moviedbKey, moviedbLanguage} from '../../../services/api';

// import { Container } from './styles';

export default class Categories extends Component {
  state = {
    genres: []
  }

  componentWillMount() {
    this.loadGenres();
  }

  loadGenres = async () => {
    const genres = await api.get(`genre/movie/list?api_key=${moviedbKey}&language=${moviedbLanguage}`);
    this.setState({genres: genres['data']['genres']});
  }

  render() {
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
            {this.state.genres.map(genre => (
            <div className='col-md-4 mb-10' key={genre['id']}>
              <h4 className='service-heading'>{genre['name']}</h4>
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
            ))}
          </div>
        </div>
      </section>
    )
  }
}