import React, { Component } from 'react';
import {api, moviedbKey, moviedbLanguage} from '../../../services/api';

export default class TopRated extends Component {

  state = {
    moviesTopRated: []
  }

  componentWillMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const moviesTopRated = await api.get(`movie/top_rated?api_key=${moviedbKey}&language=${moviedbLanguage}&page=1`);
    this.setState({moviesTopRated: moviesTopRated['data']['results'].slice(0, 4)});
  }

  posterImage = (posterPath) => {
    return `http://image.tmdb.org/t/p/w185//${posterPath}`;
  };

  render() {
    return (
      <section className='bg-light page-section' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Mais votados</h2>
              <h3 className='section-subheading text-muted'>Os que estão realmente em alta pelos usuários!</h3>
            </div>
          </div>
          <div className='row'>
            {this.state.moviesTopRated.slice(0, 4).map(movie => (
            <div className='col-sm-3' key={movie['id']}>
              <div className='team-member'>
                <img className='mx-auto rounded-circle' src={this.posterImage(movie['poster_path'])} alt={movie['poster_path']} />
                <h5 data-toggle='tooltip' title={movie['title']}>{movie['title']}</h5>
                <p className='text-muted'>
                  Média de votos {movie['vote_average']} (total: {movie['vote_count']})
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}