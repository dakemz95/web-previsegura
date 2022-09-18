<template>
  <div class="main--container medical">
    <div class="medical--container">
      <div class="medical--img">
        <ImgFrame alternate>
          <img class="customimg" src="../../assets/img/asistencia-medica.png"/>
        </ImgFrame>
      </div>
      <div class="medical--body">
        <h1 class="medical--title">Asistencia médica<br /><span class="text--primary">telefónica y domiciliaria</span></h1>
        <p>
          Herramienta de atención de emergencias médicas proveyendo <span class="text--secondary">orientación primaria vía telefónica y/o video llamada</span> 
          para cualquier especialidad, previo diagnóstico de nuestros médicos los afiliados pueden solicitar Asistencia Médica en su Domicilio.
        </p>
        <p>
          Para las consultas de telemedicina y/o domiciliaria tenemos a su disposición la línea de atención <span class="text--secondary">0800 ASISTIR</span>,
          24 horas todos los días del año
        </p>
        <ul class="medical--list">
          <li><span>Teleconsulta:</span> Ilimitada.</li>
          <li><span>Atención Domiciliaria:</span> hasta 3 al año, 1 por mes.</li>
          <li><span>Planes:</span> Individuales o Grupo Familiar.</li>
        </ul>
        <p class="bold">
          Aplican periodos de activación. <br />
          El afiliado debe estar al día con el pago de sus cuotas para obtener el servicio. <br />
        </p>
      </div>
    </div>
    <div class="medical--container">
      <div class="medical--cta">
        <router-link to="/contacto/3"><button class="btn">Solicitud de afiliación</button></router-link>
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
.medical {

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
    padding-block: 3vh;

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
