<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

const App = defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});


export default App



</script>