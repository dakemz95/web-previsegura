<template>
  <div id="home" class="main--container">
    <div class="welcome--contact">
      <a class="text--secondary bolder" href="tel:0800-2747847">0800 ASISTIR </a><br>
      <h5><span class="text--secondary bold">24 horas</span> de atención para toda Venezuela</h5>
    </div>
    <div class="welcome">
      <div class="welcome--body">
        <h1 class="welcome--title">No deje su <br>
        <span class="text--secondary">tranquilidad</span><br>
        al azar</h1>
        <p>Somos un Grupo de Empresas con más de 20 años en comercialización
          masiva, corporativa e individual de <span class="text--secondary">servicios de asistencia</span> para
          la previsión y emergencias familiares en las áreas de <span class="text--secondary">salud y funeraria</span>.
        </p>
        <div class="welcome--cta">
          <router-link to="/contacto"><button class="btn">CONSULTA TU PLAN</button></router-link>
          <router-link to="/contacto"><button class="btn">SOLICITUD DE APLICACIÓN</button></router-link>
        </div>
        <div class="welcome--social">
          <a href="https://www.instagram.com/grupoprevisegura/?hl=es" target="_blank">
            <img _ngcontent-gfx-c42="" src="../assets/img/instagram2.svg">
          </a>
        </div>
      </div>
      <div class="welcome--carousel">
        <Carousel  :items-to-show="isMobile ? 1 : isTablet ? 2.25 : 1.75" :autoplay="4000" snapAlign="left" :wrapAround="true">
          <slide v-for="item in carouselItems" :key="item.text">
            <router-link :to="{name: item.url}">
              <div class="card" :style="`background-image: url('${item.photo}');`">
                <span class="card--title">{{item.text}}</span>
              </div>
            </router-link>
          </slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <div id="quienes-somos" class="main--container bg--secondary">
    <div class="about">
      <div class="about--img">
        <ImgFrame>
          <img class="customimg" src="/src/assets/img/about_us.png"/>
        </ImgFrame>
      </div>
      <div class="about--body">
        <h2 class="about--title text--secondary">
          Quiénes somos
        </h2>
        <p>
          Somos un Grupo de Empresas con más de 20 años en comercialización masiva, corporativa. e individual de 
          <span class="text--primary">servicios de asistencia</span> 
          para la previsión y emergencias familiares en las áreas de 
          <span class="text--primary">salud y funeraria</span>.
        </p>
        <div class="about--list">
          <ul>
            <li><router-link :to="{name: 'AMortuary'}">Asistencia Funeraria Nacional e Internacional.</router-link></li>
            <li><router-link :to="{name: 'AGrief'}">Asistencia financiera en Duelo.</router-link></li>
            <li><router-link :to="{name: 'AMedical'}">Asistencia Médica Telefónica y Domiciliaria.</router-link></li>
          </ul>
          <ul>
            <li><router-link :to="{name: 'AMedicalDates'}">Combo Citas Médicas.</router-link></li>
            <li><router-link :to="{name: 'ADental'}">Asistencia Odontológica.</router-link></li>
          </ul>
        </div>
        <p>A través de nuestras empresas aliadas y red de servicios permitimos a nuestros afiliados el acceso inmediato a las 
          <span>asistencias a nivel nacional </span>
          con operación especializada a un bajo costo y un alto impacto en la calidad de vida de nuestros clientes.</p>
      </div>
    </div>
  </div>
  <div id="mision" class="main--container">
    <div class="mision">
      <div class="mision--header">
        <h2 class="title text--secondary">
          Misión y valores <br />
          de nuestra organización
        </h2>
        <p class="subtitle">
          Nuestra Misión es consolidarnos como la primera y más reconocida organización en 
          <span>Asistencias de Venezuela</span> <br />
          a través de nuestra 
          <span>variedad de productos, calidad de atención y capacidad tecnológica</span>.
        </p>
      </div>
      <div class="mision--cards">
        <div class="card">
          <div class="card--img">
            <img src="../assets/img/inmediatez.svg" alt="">
          </div>
          <div class="card--body">
            <h4 class="card--title">
              Inmediatez
            </h4>
            <p class="card--content">
              Atención rápida y conservicio diligente <span>0800 ASISTIR</span>.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card--img">
            <img src="../assets/img/cumplimiento.svg" alt="">
          </div>
          <div class="card--body">
            <h4 class="card--title">
              Cumplimiento
            </h4>
            <p class="card--content">
              Mantener la <span>confianza</span> y el <span>respeto</span> de nuestros clientes y proveedores.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card--img">
            <img src="../assets/img/sensibilidad.svg" alt="">
          </div>
          <div class="card--body">
            <h4 class="card--title">
              Sensibilidad
            </h4>
            <p class="card--content">
              Comprendemos las necesidades humanas: <span>apoyamos, damos alternativas y soluciones</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="services" class="main--container">
    <div class="services">
      <h2 class="title text--secondary">Servicios</h2>
      <div class="services--cards">
        <router-link to="/asistencias">
          <div class="card" :style="`background-image: url(${serviceAssistant});`">
            <h4 class="card--title">Asistencias</h4>
          </div>
        </router-link>
        <router-link :to="{name: 'CallCenter'}">
          <div class="card" :style="`background-image: url(${serviceCalcenter});`">
            <h4 class="card--title">Call Center</h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import useWindowWidth from '../helpers/useWindowWidth'
import ImgFrame from '../components/ImgFrame.vue'
import carrMourtary from '../assets/img/asistencia-funeraria.png'
import carrGrief from '../assets/img/asistencia-duelo.png'
import carrMedical from '../assets/img/asistencia-medica.png'
import carrDates from '../assets/img/citas-medicas.png'
import carrDental from '../assets/img/asistencia-odontologica.png'
import serviceAssistant from '../assets/img/asistencias.png'
import serviceCalcenter from '../assets/img/call-center2.png'

const { isMobile, isTablet } = useWindowWidth()

const carouselItems = ref([
  { 
    text: 'Asistencia funeraria nacional e internacional',
    photo: carrMourtary,
    url: 'AMortuary'
  },
  { 
    text: 'Asistencia financiera en duelo',
    photo: carrGrief,
    url: 'AGrief'
  },
  { 
    text: 'Asistencia médica telfónica y domiciiaria',
    photo: carrMedical,
    url: 'AMedical'
  },
  { 
    text: 'Citas médicas',
    photo: carrDates,
    url: 'AMedicalDates'
  },
  { 
    text: 'Asistencia odontológica',
    photo: carrDental,
    url: 'ADental'
  },
  // { 
  //   text: 'Asistencia financiera en hospitalzación',
  //   photo: 'asistencia-financiera.png',
  // },
  // { 
  //   text: 'Asistencia financiera en enfermedades graves',
  //   photo: 'asistencia-financiera2.png',
  // },
])

const serviceImg = ref({
  assistantPhoto: serviceAssistant,
  callCenterPhoto: serviceCalcenter
})

</script>

<style lang="scss">
@import '../assets/css/_variables.scss';

#home { 
  .welcome {
    display: flex;

    &--body {
      max-width: 50%;
      margin-right: 1vh;
    }
    
    &--carousel {
      max-width: 50%;
      
    }

    &--contact {
      text-align: right;
      padding-bottom: 1.5vh;
      
      h5 {
        margin: 0;
        font-weight: 400;
      }
    }

    &--title {
      font-size: 8.5vh;
      line-height: 1.2;
      margin-top: 0;
    }

    &--cta {
      display: flex;
      gap: 20px;

      .btn {
        background-color: $secondary;
        cursor: pointer;
        padding: 1.8vh;
        border-radius: 6px;
        font-size: 1.8vh;
        font-weight: 700;
        color: white;
        border: 1px solid #fff;
        transition: all .3s ease;

        &:hover {
          border: 1px solid $secondary;
          color: $secondary;
          background-color: #fff;
        }
      }
    }

    &--social {
      margin-top: 1.8vh;

      img {
        width: 6vh;
      }
    }

    &--carousel {
      overflow: hidden;

      .card {
        height: 60vh;
        width: 260px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        padding: 2vh;  
            
        &--title {
          font-size: 3.8vh;
          line-height: 1.5;
          font-weight: bold;
          max-width: 40vh;
          display: block;
          box-sizing: border-box;
          text-align: left;
          color: $primary;
        }
      }
    }
  }

  .carousel__viewport {
    align-self: stretch;
  }

  @media screen and (max-width: 992px) {
    .welcome {
      align-items: center;
      flex-direction: column;

      &--body, &--carousel {
        max-width: 100%;
      }

      &--title {
        text-align: center;
        font-size: 5vh;
      }

      &--body p {
        padding-inline: 10vw;
        text-align: center;
      }

      &--cta {
        justify-content: center;

        button {
          font-size: 2vh;
        }
      }
      &--social {
        margin-block: 1.8vh;
        text-align: center;

        img {
          width: 6vh;
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .welcome {

      &--cta {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}

.about {
  padding-block: 12vh;
  display: flex;
  align-items: center;

  &--img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.8vh;
    max-width: 50%;
    padding: 2.6vh 3.4vh;

    img {
      width: 40vh;
    }
  }
  
  &--body {
    width: auto;
    padding-inline: 2vh;
  }

  &--title {
    font-size: 8.5vh;
    line-height: 1.2;
    font-weight: bold;
  }

  &--list {
    margin-block: 3vh;
    display: flex;
  }

  p, li {
    font-size: 2.2vh;
  }

  li {
    padding-bottom: 2.5vh;
  }

  @media screen and (max-width: 740px) { 
    flex-direction: column-reverse;

    &--title {
      text-align: center;
      font-size: 5vh;
    }

    &--list {
      flex-direction: column;

      ul:first-of-type {
        margin-bottom: 0;
      }
      ul:last-of-type {
        margin-top: 0;
      }
    }
  }
}

#mision {

  .mision {
    text-align: center;

    .title {
      font-size: 8.5vh;
      line-height: 1.2;
      font-weight: bold;
    }

    .subtitle {
      font-size: 2.2vh;

    }
  
    &--header {
      padding-block: 3vh;
    }
  
    &--cards {
      display: flex;
      align-items: stretch;
      justify-content: space-evenly;

      .card {
        box-sizing: border-box;
        max-width: 35vh;
        padding: 2.4vh;
        border: 1px solid #D8D8D8;

        &--img {
          min-height: 10vh;
          padding: 2.4vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &--title {
          color: $primary;
          font-size: 2.8vh;
        }

        &--body {
          font-size: 2.2vh;
          padding: 2.4vh;
        }
      }

      @media screen and (max-width: 780px) {
        flex-direction: column;
        align-items: center;

        .card {
          margin-bottom: 5vh;
        }
      }
    }
    @media screen and (max-width: 780px) {
     
      .title {
        font-size: 5vh;
      }
    }
  }

}

#services {
  .services {

    .title {
      font-size: 8.5vh;
      line-height: 1.2;
      font-weight: bold;
      text-align: center;
    }

    &--cards {
      display: flex;
      justify-content: space-evenly;
      padding: 6.5ch;
      gap: 2.8vh;

      .card {
        height: 30vh;
        width: 35vw;
        padding: 24px;
        background-size: cover;
        background-repeat: no-repeat;
        // background-position: center;

        &--title {
          font-size: 16px;
          color: $primary;
        }
      }
    }

    @media screen and (max-width: 780px) {
      &--cards {
        flex-direction: column;
        padding-inline: 0;
        
        .card {
          box-sizing: border-box;
          width: 100%;
        }
      }
      .title {
        font-size: 5vh;
      }
    }
  }
}
</style>