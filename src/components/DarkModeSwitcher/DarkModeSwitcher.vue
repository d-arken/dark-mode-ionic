<template>
  <ion-item>
    <ion-label>Dark mode</ion-label>
    <ion-toggle
      @ionChange="toggleDarkTheme($event.target.checked)"
      :selected="isDark"
    ></ion-toggle>
  </ion-item>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

function switcher() {
  const store = useStore();

  const isDark = computed(() => store.state.darkMode);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const enable = () => store.commit("enableDarkMode");
  const disable = () => store.commit("disableDarkMode");

  function toggleDarkTheme(should) {
    should ? enable() : disable();
    document.body.classList.toggle("dark", isDark.value);
  }

  const autoToggle = () => {
    if (isDark.value === null) {
      toggleDarkTheme(prefersDark.matches);

      prefersDark.addListener((mediaQuery) =>
        toggleDarkTheme(mediaQuery.matches)
      );
    }
  };

  return { isDark, toggleDarkTheme, autoToggle };
}

export default {
  setup() {
    const darkModeSwitcher = switcher();

    onMounted(() => darkModeSwitcher.autoToggle());

    return { ...darkModeSwitcher };
  },
};
</script>

<style scoped>
ion-item {
  --highlight-height: 0;
}
</style>

<style>
@import url(dark-mode.css);
</style>