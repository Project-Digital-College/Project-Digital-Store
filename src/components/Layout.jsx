import 'style.css';
import { Swiper, SwiperSlide } from 'swiper/react';



function Layout() {

const data = [
    { id: '1', image: '../../imagens/Nike-Air-Force-Red.png'},
    { id: '2', image: '../../imagens/Nike-Air-Force-Branco.png'},
]



return (
<>
<section class="" >
    <div class="layout-container">
      <div class="layout-content">
        <p class="highlight-text">Melhores ofertas personalizadas</p>
        <h1 class="title-layout" >Queima de estoque Nike <span role="img" aria-label="fire">🔥</span></h1>
        <p class="description-text">
          Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod irure consectetur.
        </p>
        <button class="offer-button">Ver Ofertas</button>
      </div>
      <div class="layout-carousel">

<Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
      <SwiperSlide>
        <img class="Swip1" src={Swip1} alt="Nike Air Force" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="Swip2" src={Swip2} alt="Nike Air Force" />
      </SwiperSlide>    
</Swiper>
      </div>
    </div>
</section>
</>
  );
};
 
export default Layout;