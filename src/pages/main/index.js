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
import Profiles from '../../components/sections/Profiles';
import Categories from '../../components/sections/Categories';
import LastReleases from '../../components/sections/LastReleases';
import TopRated from '../../components/sections/TopRated';
import UserInfo from '../../components/sections/UserInfo';

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