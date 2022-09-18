<template>
  <div class="frame">
    <div :class="['box--top', alternate ? 'alternate' : '']"></div>
    <slot></slot>
    <div :class="['box--bottom', alternate ? 'alternate' : '']"></div>
  </div>
</template>

<script>
export default {
  props: {
    alternate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
$primary: #0047A7;
$secondary: #30AC67;

.frame {
  position: relative;
  width: fit-content;
  height: fit-content;
  z-index: 2;
}
.box {
  &--top, &--bottom {
    position: absolute;
    height: 8.5vh;
    width: 8.5vh;
    background-color: $primary;
    z-index: -1;
  }
  
  &--top.alternate, &--bottom.alternate {
    background-color: $secondary;
  }

  &--top {
    top: -3vh;
    left: -3vh;
  }

  &--bottom {
    bottom: -3vh;
    right: -3vh;
  }
}
</style>

