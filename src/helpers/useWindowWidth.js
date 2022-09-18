// useWindowWidth

import { reactive, onMounted, onUnmounted, toRefs, ref, computed, watch } from "vue";
import { useWindowSize } from 'vue-window-size';

export default function useWindowWidth() {
  const { width } = useWindowSize();

  const isMobile = computed(() => width.value < 640)
  const isTablet = computed(() => width.value > 640 && width.value < 1024 )

  return toRefs({ isMobile, isTablet })
}
