import React, { Component } from 'react';
import {api, moviedbKey, moviedbLanguage} from '../../../services/api';

export default class LastReleases extends Component {
  state = {
    movies: []
  }

  componentWillMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const movies = await api.get(`movie/now_playing?api_key=${moviedbKey}&language=${moviedbLanguage}&page=1`);
    this.setState({movies: movies['data']['results'].slice(0, 4)});
  }

  posterImage = (posterPath) => {
    return `http://image.tmdb.org/t/p/w185//${posterPath}`;
  };

  posterPosition(index){
    if(index === parseFloat(index)){
      if(index % 2 == 0){
        return 'timeline-inverted';
      }
    }
    return '';
  }

  movieOverview(overview){
    return overview.substr(0,100);
  }

  render() {
    return (
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
                {this.state.movies.map((movie, index) => (
                <li className={this.posterPosition(index)} key={movie['id']}>
                  <div className='timeline-image'>
                    <img className='img-fluid rounded-circle poster-image-size' src={this.posterImage(movie['poster_path'])} alt={movie['poster_path']} />
                  </div>
                  <div className='timeline-panel'>
                    <div className='timeline-heading'>
                      <h4>{movie['release_date']}</h4>
                      <h4 className='subheading'>{movie['title']}</h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted' data-toggle='tooltip' title={movie['overview']}>{this.movieOverview(movie['overview'])}...</p>
                    </div>
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}