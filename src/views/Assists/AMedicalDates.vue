<template>
  <div class="main--container mortuary">
    <div class="mortuary--container">
      <div class="mortuary--img">
        <ImgFrame alternate>
          <img class="customimg" src="../../assets/img/citas-medicas.png"/>
        </ImgFrame>
      </div>
      <div class="mortuary--body">
        <h1 class="mortuary--title">Combo<br /><span class="text--primary">citas médicas</span></h1>
        <p>
          Asistencia para el cuidado de la salud a través de variadas opciones de especialidades médicas, con atención por 
          <span class="text--secondary">citas presenciales en consultorio o virtuales</span>.
        </p>
        <p>
          El afiliado solo debe solicitar la disponibilidad médica para su área geográfica o cita Via virtual, se pautara su cita médica a través de nuestra línea de atención 
          <span class="text--secondary">0800 ASISTIR</span>, 24 horas todos los días del año y su Orden de Atención llegará a su celular vía SMS.
        </p>
        <p class="bold">
          Aplican periodos de activación. <br />
          El afiliado debe estar al día con el pago de sus cuotas para obtener el servicio. <br />
        </p>
      </div>
    </div>
    <div class="mortuary--container cards">
      <div class="mortuary--card">
        <div class="mortuary--card_header">
          <h4 class="title">Plan básico</h4>
          <p class="subtitle">3 consultas médicas anuales por afiliado</p>
        </div>
        <div class="mortuary--card_body">
          <p>Medicina general</p>
          <p>Visión - Oftalmológica</p>
          <p>Bienestar mental</p>
          <p>Fisioterapia</p>
        </div>
      </div>
      <div class="mortuary--card alternate">
        <div class="mortuary--card_header">
          <h4 class="title">Plan superior</h4>
          <p class="subtitle">5 consultas médicas anuales por afiliado</p>
        </div>
        <div class="mortuary--card_body">
          <p>Medicina general</p>
          <p>Visión - Oftalmológica</p>
          <p>Bienestar mental</p>
          <p>Fisioterapia</p>
          <p>Obstetricia</p>
          <p>Gastroenterología</p>
          <p>Otorrinolaringología</p>
          <p>Dermatología</p>
          <p>Pedriatría</p>
          <p>Nutrición</p>
          <p>Planes individuales o grupo familiar</p>
        </div>
      </div>
    </div>
    <div class="mortuary--container">
      <div class="mortuary--cta">
        <router-link to="/contacto/4"><button class="btn">Solicitud de afiliación</button></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImgFrame from '../../components/ImgFrame.vue'
</script>

<style scoped lang="scss">
$primary: #0047A7;
$secondary: #30AC67;
.mortuary {

  &--container {
    display: flex;

    &.cards {
      margin-block: 8vh;
      justify-content: space-evenly;
      align-items: stretch;
    }
  }

  &--col {
    width: 50%;
    padding: 2vh;
  }

  &--img {
    padding-top: 5vh;
    min-width: 35vh;
  }

  &--body {
    width: auto;
    padding-inline: 5vh;
    font-size: 2vh;
    line-height: 2;
    height: 100%;
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

  &--card {
    max-width: 300px;
    border: 1px solid $secondary;

    &_header {
      text-align: center;
      background-color: $secondary;
      padding: 3vh;

      .title {
        color: #fff;
        font-size: 4vh;
        line-height: 1.2;
        margin-top: 0;
      }
      .subtitle {
        color: #fff;
      }
    }

    &_body {
      text-align: center;
      padding: 3vh;
    }

    &.alternate {
      border: 1px solid $primary;

      .mortuary {
        &--card {
          &_header {
            background-color: $primary;
          }
        }
      }

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
    max-width: 30vh;

  }
  @media screen and (max-width: 720px) {
    &--container {
      flex-direction: column;
      align-items: center;
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
    .cards {
      align-items: center;
    }
    &--card {
      margin-bottom: 5vh;
    }
  }
}
</style>
