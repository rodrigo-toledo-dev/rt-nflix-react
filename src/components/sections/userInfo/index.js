import React, { Component } from 'react';

// import { Container } from './styles';

export default class UserInfo extends Component {
  render() {
    return (
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
    )
  }
}