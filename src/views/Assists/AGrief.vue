<template>
  <div class="main--container grief">
    <div class="grief--container">
      <div class="grief--img">
        <ImgFrame alternate>
          <img class="customimg" src="../../assets/img/asistencia-duelo.png"/>
        </ImgFrame>
      </div>
      <div class="grief--body">
        <h1 class="grief--title">Asistencia financiera <span class="text--primary">en duelo</span>.</h1>
        <p>El cliente titular afilia a un (1) beneficiario que el desee para darle <span class="text--secondary">protección financiera inmediata</span>, 
          en el caso de <span class="text--secondary">fallecimiento natural o accidental</span>
          del titular. El Beneficiario se comunica con nuestro call center <span class="text--secondary">0800 ASISTIR</span>, 
          reporta la defunción y recaudos para recibir en 24 horas la indemnización contratada.
        </p>
        <h3 class="grief--subtitle">Indemnizacion de $1.000,00 hasta $10.000,00</h3>
        <ul class="grief--list">
          <li>Atención inmediata</li>
          <li>Liquidación 24 horas</li>
        </ul>
        <h3 class="grief--subtitle">Opciones de beneficiario</h3>
        <ul class="grief--list">
          <li>Declarado</li>
          <li>Mayor de edad</li>
          <li>Cualquier afinidad</li>
          <li>Planes Individuales, hasta 65 años de edad, declaración de salud</li>
        </ul>
        <p class="bold">
          Aplican periodos de activación. <br />
          El afiliado debe estar al día con el pago de sus cuotas para obtener el servicio. <br />
          *BCV
        </p>
      </div>
    </div>
    <div class="grief--container">
      <div class="grief--cta">
        <router-link to="/contacto/2"><button class="btn">Solicitud de afiliación</button></router-link>
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
.grief {

  &--container {
    display: flex;
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
  }
}
</style>
