<template>
  <div class="main--container grief">
    <div class="grief--container">
      <div class="grief--img">
        <ImgFrame alternate>
          <img class="customimg" src="../../assets/img/asistencia-odontologica.png"/>
        </ImgFrame>
      </div>
      <div class="grief--body">
        <h1 class="grief--title">Asistencia <span class="text--primary">odontológica</span>.</h1>
        <p>Asistencia para el <span class="text--secondary">cuidado odontológico Preventivo y de Emergencias</span>, 
          con acceso a profesionales clasificados que garantizan tratamientos saludables, de calidad y buen trato al paciente. 
          Para solicitar cita médica tenemos a su disposición la línea de atención <span class="text--secondary">0800 ASISTIR</span>, 
          24 horas todos los días del año.
        </p>
        <h3 class="grief--subtitle">3 a 6 consultas médicas anuales por afiliado</h3>
        <ul class="grief--list">
          <li>Consulta e historia clínica</li>
          <li>Aplicación de flúor y sellantes</li>
          <li>Tartrectomía y profilaxis (limpieza dental y pulido)</li>
          <li>Restauración con resina en dientes anteriores y posteriores</li>
          <li>Restauración con resina y/o amalgama en dientes posteriores</li>
          <li>Exodoncias dentales (extracciones)</li>
          <li>Sellantes de fosas y fisuras</li>
          <li>Tratamiento de conductos</li>
          <li>Emergencias dentales</li>
          <li>Planes individuales o grupo familiar</li>
        </ul>
        <p class="bold">
          Aplican períodos de activación. <br />
          El afiliado debe estar al día con el pago de sus cuotas para obtener el servicio.
        </p>
      </div>
    </div>
    <div class="grief--container">
      <div class="grief--cta">
        <router-link to="/contacto/5"><button class="btn">Solicitud de afiliación</button></router-link>
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
