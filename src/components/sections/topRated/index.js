import React from 'react';

const TopRated = () => {
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
          <div className='col-sm-3'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///uC6TTUhPpQCmgldGyYveKRAu8JN.jpg' alt='uC6TTUhPpQCmgldGyYveKRAu8JN' />
              <h5 data-toggle='tooltip' title='Dilwale Dulhania Le Jayenge'>Dilwale Dulhania ...</h5>
              <p className='text-muted'>
                Média de votos
                9 (total: 2075)
              </p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' alt='7IiTTgloJzvGI1TAYymCfbfl3vT' />
              <h5 data-toggle='tooltip' title='기생충'>기생충</h5>
              <p className='text-muted'>
                Média de votos
                8.8 (total: 310)
              </p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///gD1INoVS8haUutzabwUV7Io6akm.jpg' alt='gD1INoVS8haUutzabwUV7Io6akm' />
              <h5 data-toggle='tooltip' title='Um Sonho de Liberdade'>Um Sonho de Liber...</h5>
              <p className='text-muted'>
                Média de votos
                8.7 (total: 13345)
              </p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src='http://image.tmdb.org/t/p/w185///o8DYJTbPdnKqCTEnBcfNGt3NoKn.jpg' alt='o8DYJTbPdnKqCTEnBcfNGt3NoKn' />
              <h5 data-toggle='tooltip' title='O Poderoso Chefão'>O Poderoso Chefão</h5>
              <p className='text-muted'>
                Média de votos
                8.6 (total: 10195)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopRated;