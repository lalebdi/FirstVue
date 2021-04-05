<template>
    <div>
        <div class="products">
        <b-card v-for="product in allProducts" :key="product.id"
            :title="product.name"
            :img-src="product.images[0].urls.sm"
            :img-alt="product.images[0].name"
            img-top
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            {{ product.short_description }}
            </b-card-text>
            
            <!-- <router-link class="btn btn-primary" :to="'/product/' + product.id" >More info</router-link> -->
            <b-button variant="primary" pill @click="$router.push('/product/' + product.id)">More info</b-button>
        </b-card>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Products",
    methods: {
        ...mapActions(['fetchProducts', 'deleteProduct'])
    },
    computed: mapGetters(['allProducts']),
    created(){
        this.fetchProducts()
    }
};
</script>


<style lang="scss" scoped>
    .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    }
    .product {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    }
    @media (max-width: 500px) {
    .products {
        grid-template-columns: 1fr;
    }
    }
</style>
