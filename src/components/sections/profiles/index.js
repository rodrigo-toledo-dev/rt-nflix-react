import React, { Component } from 'react';
import {api, moviedbKey, moviedbLanguage} from '../../../services/api';

import profile0 from '../../../images/profile-image-0.png';
import profile1 from '../../../images/profile-image-1.png';
import profile2 from '../../../images/profile-image-2.png';
import profile3 from '../../../images/profile-image-3.png';

// import { Container } from './styles';

export default class Profiles extends Component {

  render() {
    return (
      <div>
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
                      <img className="mx-auto img-fluid d-block" src={profile0} alt='profile 0' />
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
                      <img className="mx-auto img-fluid d-block" src={profile1} alt='profile 1' />
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
                      <img className="mx-auto img-fluid d-block" src={profile2} alt='profile 2'/>
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
                      <img className="mx-auto img-fluid d-block" src={profile3} alt="profile 3" />
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
    )
  }
}
