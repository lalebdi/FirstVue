<template>
    <div>
    <SearchProduct />
    <FilterProducts/>
    <br />
    <Products />
    </div>
</template>

<script>
import Products from '../components/Products';
import SearchProduct from '../components/SearchProduct';
import FilterProducts from "../components/FilterProducts";
export default {
name: 'ProductsList',
components: {
    Products,
    SearchProduct,
    FilterProducts,
}
}
</script>

<style>

</style>