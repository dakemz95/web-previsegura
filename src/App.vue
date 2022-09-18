<template>
  <main>
    <HeaderLayout></HeaderLayout>
    <router-view></router-view>
    <FooterLayout></FooterLayout>
  </main>
</template>

<script setup>
import HeaderLayout from './components/layout/Header.vue'
import FooterLayout from './components/layout/Footer.vue'
</script>

<style scoped lang="scss">
@import './assets/css/main.scss';

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
