<template>
  <div id="app">
   
    <div class="container">
      <div class="page" v-if="showSpinner">
          <b-spinner variant="primary" class="spinner" key="primary"></b-spinner>
    </div>
    <div id="nav">
      <top-header></top-header>
    </div>
       <router-view/>


    </div>

      
  </div>
</template>

<script>

import TopHeader from './components/TopHeader.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {

    'top-header': TopHeader 
  },
  computed: {
        ...mapGetters(["showSpinner"])
    },
  
}
</script>

<style lang="scss">
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}
.spinner {
  z-index: 26;
  position: relative;
  top: 50%;
}
</style>
