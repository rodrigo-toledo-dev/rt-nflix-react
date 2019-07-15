import React from 'react';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
