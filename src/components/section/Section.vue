<template>
  <section class="section">
    <div class="container">
      <slot></slot>

    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  cols: {
    type: [Number, String],
    default: 1
  },
  rows: {
    type: [Number, String],
    default: 1
  },
  gap: {
    type: [Number, String],
    default: 0,
  }
})

</script>

<style lang="scss">
.section {
  position: relative;
  min-height: 100vh;
  display: flex;
  place-content: center;

  .container {
    padding: 2em 1em;
    margin: auto;
    width: min(100%, 1336px);
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat( v-bind(rows), auto);
    align-items: center;
    justify-items: center;

    @media screen and (min-width: 820px) {
      grid-template-columns: repeat( v-bind(cols) , 1fr );
    }
  }
}
</style>