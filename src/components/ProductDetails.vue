<template>
    <div class="details container">
        <router-link to="/">Back</router-link>
        <div>
        <b-card no-body class="overflow-hidden" style="max-width: 1070px;">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img :img-src="product.images[0].urls.sm" :img-alt="product.images[0].name" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="product.name">
                <b-card-text>
                    Brand: {{ product.brand }}
                </b-card-text>
                <b-card-text>
                    {{ product.description }}
                </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'productdetails',
    data (){
        return{
            product: ''
        }
    },
    methods: {
        async fetchProduct(id){
            const response = await axios.get(`https://api.stifirestop.com/products/${id}?load[]=images`)
            .then(res =>res.data.data)
            .catch(error => console.log(error));
            this.product = response;
        }
    },
    created: function(){
        this.fetchProduct(this.$route.params.id)
    }


}
</script>

<style>

</style>