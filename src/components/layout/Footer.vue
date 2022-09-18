<template>
  <div class="footer--container">
    <div class="map">
      <iframe
        _ngcontent-bhe-c42="" 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1649.501333110977!2d-66.85360639389795!3d10.48509604317273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68c1b72d71c1d7d6!2sCentro%20Ciudad%20Comercial%20Tamanaco%20(CCCT)!5e0!3m2!1ses-419!2sve!4v1651029241595!5m2!1ses-419!2sve&amp;iwloc=near" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" 
        class="frame-maps" 
        style="border: 0;">
      </iframe>
    </div>
    <div class="content">
      <div class="info">
        <div class="info--nav">
          <h4 class="info--title">Grupo Previsegura</h4>
          <ul class="info--menu">
            <li><router-link class="nav--link" :to="{ path: '/', hash: '#quienes-somos' }" exact-active-class=''>Quiénes somos</router-link></li>
            <li><router-link class="nav--link" to="/asistencias">Asistencias</router-link></li>
            <li><router-link class="nav--link" to="/call-center">Call Center</router-link></li>
            <li><router-link class="nav--link" to="/contacto">Contacto</router-link></li>
          </ul>
        </div>
        <div class="info--body">
          <p style="margin-top: 0;">Av. La Estancia, CCCT, Torre B, Piso 11, Ofc. 1104. Chuao. Caracas. Venezuela</p>
          <div class="info--tel">
            <div>Tel:</div>
            <div>
              <a href="tel:0800-2747847">0800 ASISTIR </a><br>
              <a href="tel:0212-9591919">+58212-9591919 </a>
            </div>
          </div>
          <a href="mailto:correopordefinir@gmail.com">info@grupo-previsegura.com </a>
          <p>RIF J30941500-0</p>
          <router-link to="/">
            <img class="info--logo" src="../../assets/img/logo_blanco.png" alt="">
          </router-link>
          <br>
          <a href="https://www.instagram.com/grupoprevisegura/?hl=es" target="_blank">
            <img _ngcontent-gfx-c42="" src="../../assets/img/instagram.svg">
          </a>
        </div>
        <div class="info--foot">
          <p>By On Solution</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useWindowWidth from '../../helpers/useWindowWidth'

const { isMobile, isTablet } = useWindowWidth()

</script>

<style lang="scss">
@import '../../assets/css/variables.scss';

.footer--container {
  min-height: 30vh;
  display: flex;
  justify-content: space-between;
  background-color: $primary;

  .map {
    width: 100%;
    padding-bottom: 1vh;
    background-color: #FFFFFF;

    iframe {
      height: 100%;
      width: 100%;
    }
  }
  
  .content {
    padding: 4.5vh 4.5vh 0;
    min-width: 65%;
    font-weight: 700;

    .info {
      color: #FFFFFF;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr auto;
      
      &--nav {
        grid-column: 1 / 2;
        padding: 0 1vh;
        border-right: 1px solid #FFFFFF;
      }
      
      &--body {
        grid-column: 2 / 4;
        padding: 0 2vh; 
      }

      &--tel {
        font-size: 1.8vh;
        display: flex;
        align-items: baseline;
        gap: 1.2vh;
      }
      
      &--foot {
        grid-column: 1 / 4;
        text-align: right;
        font-weight: 400;
      }

      &--title {
        margin: 0;
        font-size: 2vh;
      }

      &--menu {
        list-style: none;
        padding: 0;
        li {
          font-size: 1.8vh;
          font-weight: 300;
          margin-bottom: 1.2vh;
        }
      }

      &--logo {
        margin: 1.2vh 0;
      }

      * {
        color: #FFFFFF;

      }

      a {
        font-weight: 400;
        text-decoration: none;
        
        &:hover {
          color: $secondary;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    .map {
      min-height: 200px;
      
      iframe {
        height: 30vh;
        margin-bottom: -15px;
      }
    }

    .content {
      .info {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media screen and (max-width: 640px) {
    .content {
      .info {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;

        &--nav, &--body, &--foot {
          grid-column: auto;
          border: none;
          text-align: center;
        }

        &--menu {
          display: flex;
          flex-direction: column;
          align-items: center;

          li {
            margin-bottom: 0;
          }
        }

        &--tel {
          justify-content: center;
        }
      }
    }
  }
}
</style>