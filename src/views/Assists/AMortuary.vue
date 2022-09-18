<template>
  <div class="main--container mortuary">
    <div class="mortuary--container">
      <div class="mortuary--img">
        <ImgFrame alternate>
          <img class="customimg" src="../../assets/img/asistencia-funeraria.png"/>
        </ImgFrame>
      </div>
      <div class="mortuary--body">
        <h1 class="mortuary--title">Asistencia <span class="text--primary">funeraria</span><br /> nacional e internacional</h1>
        <p>Servicio Inmediato e Integral en <span class="text--secondary">Funerarias, Cementerios o cremación</span> en toda Venezuela y el resto del mundo. Atención 24 horas a través de nuestro call center <span class="text--secondary">0800 ASISTIR</span>. Constante y sensible Acompañamiento al doliente en ese difícil momento.</p>
        <h3 class="mortuary--subtitle">Componentes</h3>
        <ul class="mortuary--list">
          <li>Ataúd superior</li>
          <li>Servicio de velación hasta 24 horas</li>
          <li>Servicios de capilla en funerarias tipo A o B</li>
          <li>Un (1) traslado a nivel local</li>
          <li>Una carroza fúnebre</li>
          <li>Orientación en diligencias de ley, se requiere certificado de defunción gestionado por parte de familiares.</li>
          <li>Habitación de descanso (sujeto a disponibilidad de la funeraria)</li>
          <li>Servicio de cafetería.</li>
          <li>Preparación externa del difunto.</li>
        </ul>
      </div>
    </div>
    <div class="mortuary--container">
      <div class="mortuary--col">
        <h3 class="mortuary--subtitle">Cementerio</h3>
        <ul class="mortuary--list">
          <li>Parcela de dos (2) puestos en cementerio privado tipo jardín, con titularidad de la parcela para el titular o heredero.</li>
          <li>Servicio de velación hasta 24 horas</li>
          <li>Servicios de capilla en funerarias tipo A o B</li>
        </ul>
      </div>
      <div class="mortuary--col">
        <h5 class="mortuary--subtitle">Cremación</h5>
        <ul class="mortuary--list">
          <li>Proceso de cremación</li>
          <li>Cenízaro</li>
          <li>Certificado de cremación</li>
        </ul>
        <p class="bold">
          Aplican periodos de activación. <br />
          El afiliado debe estar al día con el pago de sus cuotas para obtener el servicio. <br />
          *BCV
        </p>
      </div>
    </div>
    <div class="mortuary--container">
      <div class="mortuary--cta">
        <router-link to="/contacto/1"><button class="btn">Solicitud de afiliación</button></router-link>
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
