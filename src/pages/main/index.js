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

// Components
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Footer from '../../components/footer';

// Sections
import Profiles from '../../components/sections/profiles';
import Categories from '../../components/sections/categories';
import LastReleases from '../../components/sections/lastReleases';
import TopRated from '../../components/sections/topRated';
import UserInfo from '../../components/sections/userInfo';

class Main extends Component {
  render(){
    return (
      <div id="page-top">

        <Navbar />
        <Header />
        
        {/* Sections for the page */}
        
        {/* Profilea/Perfis */}
        <Profiles />

        {/* Categories/Categorias */}
        <Categories />

        {/* Last Releases/Lancamentos */}
        <LastReleases />

        {/* Top Rated/Mais votados */}
        <TopRated />

        {/* User Info/Meus dados */}
        <UserInfo />

        
        <Footer />
      </div>
    );
  }
};

export default Main;