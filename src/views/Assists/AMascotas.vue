<template>
  <div class="main--container mortuary">
    <div class="mortuary--container">
      <div class="mortuary--img">
        <ImgFrame alternate>
          <img class="customimg" src="../../assets/img/mascotas_vista.png"/>
          <template #custom>
            <img class="logo" src="../../assets/img/logo_mascotas.png"/>
          </template>
        </ImgFrame>
        <template v-if="!isMobile">
          <h3 v-if="!isMobile" class="mortuary--subtitle mt-4">Alcance Geográfico</h3>
          <ul  class="mortuary--list">
            <li>Caracas, área metropolitana.</li>
            <li>
              Gran Caracas, Guarenas, Vargas, San Antonio (sujeto a punto de encuentro
              según lugar de residencia).
            </li>
          </ul>
          <h3 class="mortuary--subtitle">Tipo de Mascotas</h3>
          <ul class="mortuary--list">
            <li>Caninos</li>
            <li>Felinos</li>
          </ul>
        </template>
      </div>
      <div class="mortuary--body">
        <h1 class="mortuary--title">Prevision <span class="text--primary">funeraria</span><br /> para mascotas </h1>
        <p>
          Somos la empresa de servicios de pre-arreglos funerales para su mascota, canino y/o
          felino, especializados en la atención y preparación del último adiós a nuestro compañero y
          miembro de la familia.
        </p>
        <p>
          A través de nuestro servicio usted puede afiliar a su mascota a un plan de previsión de
          cremación que le permite a usted estar tranquilo ante el fallecimiento inesperado de su
          mascota, ya que nos encargamos de todo lo concerniente al retiro del cuerpo y proceso de cremación de manera
          digna y confiable.
        </p>
        <h3 class="mortuary--subtitle">¿Cómo funciona?</h3>
        <p>
          A través de la suscripción de un contrato de previsión funeraria y fotografía
          ( de frente y de ambos lados ) para cada mascota que se desee tener afiliada.
        </p>
        <p>
          Estos contratos son anuales renovables, a un costo muy solidario pero que da la
          tranquilidad de la previsión.
        </p>
        <p>
          Al momento lamentable del fallecimiento de su mascota, usted cuenta con atención
          personalizada <span class="text--secondary">24 horas</span> a través de nuestra línea <span class="text--secondary">0800 ASISTIR</span>, donde nos ocuparemos de
          manera digna y sensible de la búsqueda y cremación
          de su mascota.
        </p>
        <h3 class="mortuary--subtitle">Componentes del servicio</h3>
        <ul class="mortuary--list">
          <li>Asistencia de cremación y servicio hasta <span class="text--secondary">$ 400,00</span>.</li>
          <li>
            Búsqueda de la Mascota a su residencia declarada en la “Planilla de Afiliación”, de
            8:00 AM A 4:00 PM Área Metropolitana, 3:00 PM La Gran Caracas.
          </li>
          <li>Proceso de Cremación.</li>
          <li>Cenízaro.</li>
          <li>
            Entrega del Cenízaro en la residencia declarada antes de 72 horas, después de
            realizada la cremación.
          </li>
          <li>Certificado de cremación.</li>
          <li>De ser necesario: servicio de custodia y refrigeración.</li>
          <li>Edad afiliable de 0 a 8 años. (NO APLICA)</li>
        </ul>
        <template v-if="isMobile">
          <h3 class="mortuary--subtitle">Alcance Geográfico</h3>
          <ul class="mortuary--list">
            <li>Caracas, área metropolitana.</li>
            <li>
              Gran Caracas, Guarenas, Vargas, San Antonio (sujeto a punto de encuentro
              según lugar de residencia).
            </li>
          </ul>
          <h3 class="mortuary--subtitle">Tipo de Mascotas</h3>
          <ul class="mortuary--list">
            <li>Caninos</li>
            <li>Felinos</li>
          </ul>
        </template>
      </div>
    </div>
    <div class="mortuary--container">
      <div class="mortuary--cta">
        <router-link to="/contacto/8"><button class="btn">Solicitud de afiliación</button></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImgFrame from '../../components/ImgFrame.vue'
import useWindowWidth from '../../helpers/useWindowWidth'

const { isMobile, isTablet } = useWindowWidth()
</script>

<style scoped lang="scss">
$primary: #0047A7;
$secondary: #30AC67;
.mortuary {

  &--container {
    display: flex;
  }

  &--col {
    width: 50%;
    padding: 2vh;
  }

  &--img {
    padding-top: 5vh;
    min-width: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 640px) {
      justify-content: center;
      flex-direction: row;
    }
    
    & > ul, p {
      align-self: stretch;
    }
  }

  &--body {
    width: auto;
    padding-inline: 5vh;
    font-size: 2vh;
    line-height: 2;
  }

  &--title {
    margin-top: 0;
    font-size: 4vh;
    line-height: 1;
  }

  &--subtitle {
    color: $secondary;
    font-size: 3.1vh;
  }

  &--list {
    padding-bottom: 3vh;

    li {
      font-size: 2vh;
      line-height: 1.4;
      padding-bottom: 3vh;
    }
  }

  &--cta {
    margin: auto;

      .btn {
        cursor: pointer;
        background-color: $secondary;
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

  .customimg {
    max-width: 35vh;
  }
  .logo {
    position: absolute;
    top: -10vh;
    right: -4vh;
    width: 30vh;
  }
  @media screen and (max-width: 720px) {
    &--container {
      flex-direction: column;
      align-items: center;
    }
    &--col {
      width: 100%;
    }
    &--img {
      margin-bottom: 7vh;
    }
    &--body {
      padding-inline: 0;
    }
    &--title {
      text-align: center;
    }
  }
}

.mt-4 {
  margin-top: 4rem;
}
</style>
