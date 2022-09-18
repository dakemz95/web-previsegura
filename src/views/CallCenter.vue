<template>
  <div class="main--container callcenter">
    <div class="callcenter--container">
      <div class="callcenter--img">
        <ImgFrame>
          <img class="customimg" src="../assets/img/call-center.png"/>
        </ImgFrame>
      </div>
      <div class="callcenter--body">
        <h1 class="callcenter--title"><span class="text--primary">Call</span>center</h1>
        <p>Servicio Inmediato e Integral en <span class="text--secondary">Funerarias, Cementerios o cremación</span> en toda Venezuela y el resto del mundo. Atención 24 horas a través de nuestro call center <span class="text--secondary">0800 ASISTIR</span>. Constante y sensible Acompañamiento al doliente en ese difícil momento.</p>
        <div class="callcenter--container">
          <div class="callcenter--col">
            <ul class="callcenter--list">
              <li>Atención inmediata del servicio</li>
              <li>Activación de claves</li>
              <li>Seguimiento de casos</li>
              <li>Control de calidad del servicio</li>
              <li>Operadores y médicos especializados</li>
            </ul>
          </div>
          <div class="callcenter--col">
            <ul class="callcenter--list">
              <li>Sistemas de telefonía avanzados</li>
              <li>Red inteligente</li>
              <li>Interconexión de redes</li>
              <li>Grabación de llamada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImgFrame from '../components/ImgFrame.vue'
</script>

<style scoped lang="scss">
$primary: #0047A7;
$secondary: #30AC67;
.callcenter {
  margin-top: 12vh;
  margin-inline: 15vh;

  &--container {
    display: flex;;
  }

  &--col {
    width: 50%;
    padding: 2vh;
  }

  &--img {
    padding-top: 5vh;
    min-width: 35vw;
    display: flex;
    justify-content: center;
  }

  &--body {
    width: auto;
    padding-top: 4vh;
    font-size: 2vh;
    line-height: 2;
  }

  &--title {
    margin-top: 0;
    font-size: 8.5vh;
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
</style>
