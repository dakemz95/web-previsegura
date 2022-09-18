<template>
  <div class="header">
    <img class="header--logo" src="../../assets/img/logo.png" alt="logo previsegura">
    <div>
      <ul v-if="!isMobile && !isTablet" class="nav">
        <li class="nav--item"><router-link class="nav--link" to="/">Home</router-link></li>
        <li class="nav--item"><router-link class="nav--link" :to="{ path: '/', hash: '#quienes-somos' }" exact-active-class='' active-class=''>Quiénes somos</router-link></li>
        <li class="nav--item"><router-link class="nav--link" to="/asistencias" :class="$route.path.includes('asistencias') ? 'active' : '' ">Asistencias</router-link></li>
        <li class="nav--item"><router-link class="nav--link" to="/call-center">Call Center</router-link></li>
        <li class="nav--item"><router-link class="nav--link" to="/contacto">Contacto</router-link></li>
      </ul>
      <div v-else>
        <button class="nav--btn"  @click="showMenu = true">
          <img class="nav--btn_img" src="../../assets/img/bars.png">
        </button>
        <div :class="`${showMenu ? 'show' : ''} nav--container`">
          <button class="nav--btn" @click="showMenu = false">
            <img class="nav--btn_img" src="../../assets/img/close.png">
          </button>
          <ul class="nav--mobile">
            <li class="nav--item"><router-link class="nav--link" to="/">Home</router-link></li>
            <li class="nav--item"><router-link class="nav--link" :to="{ path: '/', hash: '#quienes-somos' }" exact-active-class='' active-class=''>Quiénes somos</router-link></li>
            <li class="nav--item"><router-link class="nav--link" to="/asistencias">Asistencias</router-link></li>
            <li class="nav--item"><router-link class="nav--link" to="/call-center">Call Center</router-link></li>
            <li class="nav--item"><router-link :class="`nav--link ${route.path.includes('/contacto') ? 'active' : ''}`" to="/contacto">Contacto</router-link></li>
          </ul>
          <div class="nav--footer">
            
          </div>
        </div>
        <Transition name="fade">
          <div v-show="showMenu" class="overlay" @click="showMenu = false"></div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import useWindowWidth from '../../helpers/useWindowWidth'

const { isMobile, isTablet } = useWindowWidth()
const route = useRoute()

const showMenu = ref(false)

</script>

<style lang="scss">
@import '../../assets/css/main.scss';

.header {
  z-index: 5;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8vh 3vh;
  box-shadow: 0 4px 12px #00000012, 0 2px 4px #0000000d;

  &--logo {
    width: 35vh;
    padding: 1vh;
  }
}


.nav {
  list-style: none;
  display: flex;
  gap: 2vh;
  font-weight: 400;
  line-height: 21px;

  &--item {
    display: flex;
    align-items: center;
  }

  &--link {
    color: #0000008c;
    display: flex;
    padding: .8vh 1.6vh;
    text-decoration: none;

    &:not(.active):hover {
      color: $secondary;
    }

    &.active {
      font-weight: bold;
      color: #0047a7;
    }
  }

  &--btn {
    background: transparent;
    border: none;
    padding: 1.8vh;
    border-radius: 50%;
    transition: background .3s;

    &:hover {
      background-color: #dddddd;
      cursor: pointer;
    }

    &_img {
      width: 5vh;
    }
  }
  &.mobile {
    flex-direction: column;
    align-items: flex-end;
    margin: 0;
    padding: 0;
  }
  
  &--container {
    z-index: 7;
    padding: 25px 55px;
    background-color: #ffffff;
    box-shadow: -4px 0 12px #00000012, -2px 0 4px #0000000d;
    position: fixed;
    top: 0;
    right: -310px;
    min-height: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    transition: right .3s;
    box-sizing: border-box;

    &.show {
      right: 0;
    }
  }

}

</style>