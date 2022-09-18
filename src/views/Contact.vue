<template>
  <div class="main--container contact">
    <h1 class="contact--title">Solicitar Información</h1>
    <form @submit.prevent="sendData">
      <div class="contact--row">
        <div class="contact--box">
          <label class="contact--label">
            <p>Nombre</p>
            <input v-model="form.firstname" type="text">
            <span v-show="firstnameError">EL nombre es requerido</span>
          </label>
        </div>
        <div class="contact--box">
          <label class="contact--label">
            <p>Apellido</p>
            <input v-model="form.lastname" type="text">
            <span v-show="lastnameError">EL apellido es requerido</span>
          </label>
        </div>
      </div>
      <div class="contact--row">
        <div class="contact--box">
          <label class="contact--label">
            <p>Cédula</p>
            <input v-model="form.identification" type="text">
            <span v-show="identificationError">La cédula es requerida</span>
          </label>
        </div>
        <div class="contact--box">
          <label class="contact--label">
            <p>Teléfono</p>
            <input v-model="form.phone" type="tel">
            <span v-show="phoneError">El teléfono es requerido</span>
          </label>
        </div>
      </div>
      <div class="contact--row">
        <div class="contact--box">
          <label class="contact--label">
            <p>Correo electrónico</p>
            <input v-model="form.mail" type="email">
            <span v-show="mailError">El correo es requerido</span>
          </label>
        </div>
      </div>
      <hr class="contact--separator">
      <label class="contact--subtitle">
        <p>Cliente</p>
        <select v-model="form.client">
          <option v-for="client in clientList" :value="client.id" :key="client.id">{{ client.name }}</option>
        </select>
      </label>
      <label class="contact--subtitle">
        <p>Seleccione el tipo de plan que desea</p>
        <select v-model="form.plan">
          <option v-for="plan in planList" :value="plan.id" :key="plan.id">{{ plan.name }}</option>
        </select>

      </label>
      <div class="contact--subtitle">
        <p>Seleccione una asistencia</p>
        <div class="contact--row mt-3">
          <div class="contact--box">
            <label class="contact--checkbox">
              <input v-model="form.mortuary" type="checkbox">
              Asistencia funeraria nacional e internacional
            </label>
            <br>
            <label class="contact--checkbox">
              <input v-model="form.grief" type="checkbox">
              Asistencia financiera en duelo
            </label>
            <br>
            <label class="contact--checkbox">
              <input v-model="form.medical" type="checkbox">
              Asistencia médica telefónica y domiciliaria
            </label>
          </div>
          <div class="contact--box">
            <label class="contact--checkbox">
              <input v-model="form.medicalDates" type="checkbox">
              Combo citas médicas
            </label>
            <br>
            <label class="contact--checkbox">
              <input v-model="form.dental" type="checkbox">
              Asistencia odontológica
            </label>
          </div>
        </div>
      </div>
      <div class="contact--row center">
        <button class="contact--btn">Solicitar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  setup() {
    const API_URL = import.meta.env.VITE_API_URL;

    return { API_URL }
  },
  props: ['assist'],
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        identification: '',
        phone: '',
        mail: '',
        client: 1,
        plan: 1,
        mortuary: false,
        grief: false,
        medical: false,
        medicalDates: false,
        dental: false
      },
      planList: [
        {id: 1, name: 'INDIVIDUAL'},
        {id: 2, name: 'GRUPAL'},
        {id: 3, name: 'CORPORATIVO'},
        {id: 4, name: 'BANCA ASISTENCIA'},
      ],
      clientList: [
        {id: 1, name: 'NUEVO'},
        {id: 2, name: 'REGISTRADO'},
      ],
      assistancesList: [
        {id:1, name: 'Asistencia funeraria nacional e internacional'},
        {id:2, name: 'Asistencia financiera en duelo'},
        {id:3, name: 'Asistencia médica telefónica y domiciliaria'},
        {id:4, name: 'Combo citas médicas'},
        {id:5, name: 'Asistencia odontológica'},
      ],
      showErrors: false
    }
  },
  mounted() {
    if (!!this.assist) {
      switch (this.assist) {
        case '1': this.form.mortuary = true         
          break;
        case '2': this.form.grief = true         
          break;
        case '3': this.form.medical = true         
          break;
        case '4': this.form.medicalDates = true         
          break;
        case '5': this.form.dental = true         
          break;
        default:
          break;
      }
    }
  },
  computed: {
    firstnameError() { return this.form.firstname.length < 1 && this.showErrors },
    lastnameError() { return this.form.lastname.length < 1 && this.showErrors },
    identificationError() { return this.form.identification.length < 1 && this.showErrors },
    phoneError() { return this.form.phone.length < 1 && this.showErrors },
    mailError() { return this.form.mail.length < 1 && this.showErrors },
    hasErrors() {
      return this.firstnameError &&
        this.lastnameError &&
        this.identificationError &&
        this.phoneError &&
        this.mailError           
    },
    selectedAssistances() {
      let list = []
      if ( this.form.mortuary ) list.push(1)
      if ( this.form.grief ) list.push(2)
      if ( this.form.medical ) list.push(3)
      if ( this.form.medicalDates ) list.push(4)
      if ( this.form.dental ) list.push(5)
      return list
    }
  },
  methods: {
    sendData() {
      this.showErrors = true
      if (this.hasErrors) {
        window.scrollTo(0,80);
      } else {
        const data = {
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          email: this.form.mail,
          phone_number: this.form.phone,
          client: this.form.client,
          plan_id: this.form.plan,
          assistances: this.selectedAssistances
        }
        console.log(data)
        this.showErrors = false
        axios.post(`${this.API_URL}/petition/save`, data)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$primary: #0047A7;
$secondary: #30AC67;

* {
  scroll-behavior: smooth;
}
.contact {
  margin-top: 12vh;
  margin-inline: 15vh;
  padding-inline: 10vh !important;
  box-sizing: border-box;

  &--title {
    text-align: center;
    color: $secondary;
    line-height: 1.2;
    font-size: 4vh;
    margin-bottom: 10vh;
  }
  &--subtitle {
    margin-top: 7.2vh;
    font-size: 2.5vh;
    padding-right: 2vh;
    display: flex;
    flex-direction: column;
    
    p {
      color: $primary;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 2vh;
    }
  }
  &--separator {
    height: 1px;
    display: block;
    margin: 7.2vh 0 2vh;
  }

  &--row {
    display: flex;
    justify-content: stretch;
    width: 100%;

    &.center {
      justify-content: center;
    }
  }
  &--btn {
    margin-block: 4vh;
    background-color: $primary;
    padding: 1.8vh;
    border-radius: 6px;
    font-size: 1.8vh;
    font-weight: 700;
    color: white;
    border: 1px solid #fff;
    transition: all .3s ease;

    &:hover {
      border: 1px solid $primary;
      color: $primary;
      background-color: #fff;
    }

  }
  &--box {
    width: 100%;
  }
  &--label {
    margin-top: 3vh;
    font-size: 2vh;
    padding-right: 2vh;
    display: flex;
    flex-direction: column;
    
    p {
      margin-top: 0;
      margin-bottom: 2vh;
      font-weight: 700;
      color: $primary;
    }

    span {
      margin-top: -4vh;
      color: #f93154;
    }
  }
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  select {
    box-sizing: border-box;
    display: block;
    width: auto;
    height: 6.8vh;
    padding: 0.8vh 1.6vh;
    font-size: 2.4vh;
    border: 1px solid #bbbbbb;
    border-radius: .8vh;
    transition: all .1s;
  }

  select {
    option {
      line-height: 2;
    }
  }

  input {
    margin-bottom: 4.5vh;

    &:focus, &:active {
        border-color: $primary;
        border-width: 2px;
        outline: none;
    }
  }
  &--checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 5vh;

    input[type="checkbox"] {
      display: inline-block;
      // height: 2.5vh;
      // width: 2.5vh;
      border-color: $primary;
      margin: 0;
      margin-right: 3vh;
    }
  }
  .mt-3 {
    margin-top: 3vh;
  }
  @media screen and (max-width: 720px) {
    margin-inline: 0;
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
    &--row {
      flex-direction: column;
    }
    input[type="text"],
    input[type="tel"],
    input[type="email"],
    select, label {
      font-size: 2vh;
    }
  }
}
</style>