<template>
  <div class="assistance main--container">
    <div class="assistance--nav">
      <ul class="nav--list">
        <li><router-link :to="{name: 'AMortuary'}" :class="['nav--item', isActive ? 'active' : '']">
          ASISTENCIA FUNERARIA NACIONAL E INTERNACIONAL.
        </router-link></li>
        <li><router-link class="nav--item" :to="{name: 'AGrief'}">
          ASISTENCIA FINANCIERA EN DUELO.
        </router-link></li>
        <li><router-link class="nav--item" :to="{name: 'AMedical'}">
          ASISTENCIA MÉDICA TELEFÓNICA Y DOMICILIARIA.
        </router-link></li>
        <li><router-link class="nav--item" :to="{name: 'AMedicalDates'}">
          COMBO CITAS MÉDICAS.
        </router-link></li>
        <li><router-link class="nav--item" :to="{name: 'ADental'}">
          ASISTENCIA ODONTOLÓGICA.
        </router-link></li>
        <li><router-link class="nav--item" :to="{name: 'AMascotas'}">
          MASCOTAS DEL CIELO.
        </router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$route.path === '/asistencias'
    }
  }
}

</script>

<style lang="scss">
@import '../../assets/css/_variables.scss';

.assistance {
  display: flex;

  &--nav {
    min-width: 25%;
    font-size: 1.8vh;

    .nav {
      &--list {
        list-style: none;
        padding-left: 0;
        padding-right: 4vh;

        li {
          margin-left: 0;
          font-size: 1.8vh;
          font-weight: 300;
          padding-bottom: 1.8vh;

          a {
            display: block;
            padding: 3vh 3.4vh;
          }

          .active {
            color: $secondary;
            font-weight: bold;
          }
        }
        
      }

      &--item {
        transition: background-color .2s;

        &:hover {
          background-color: #f1f1f1;
        }

        &.active {
          border-bottom: .4vh solid $secondary;
        }
      }
      
      @media screen and (max-width: 1024px) {
        &--list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-right: 0;
        }

        &--item {
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
}

</style>