<template>
  <div id="app">
    <div class="container">
      <div class="page" v-if="showSpinner">
          <b-spinner variant="primary" class="spinner" key="primary"></b-spinner>
    </div>
    <div id="nav">
      <top-header></top-header>
    </div>
      <SearchProduct />
      <FilterProducts/>
      <br />
      <Products />

    </div>
    <div id="nav">
    </div>

  </div>
</template>

<script>
import Products from './components/Products';
import SearchProduct from './components/SearchProduct';
import FilterProducts from "./components/FilterProducts";
import TopHeader from './components/TopHeader.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    Products,
    SearchProduct,
    FilterProducts,
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
