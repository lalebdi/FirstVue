import axios from 'axios';

const state = {
    products: [],
    showSpinner: false
};

const getters = {
    allProducts : (state) => state.products,
    showSpinner: (state) => state.showSpinner
};

const actions = {
    async fetchProducts({ commit }){
        commit("setSpinner", true)
        const response = await axios.get(
            'https://api.stifirestop.com/products?load[]=images'
        ).then(res =>res.data.data).catch(error => console.log(error));
            // console.log(response.data)
            commit('setProducts', response);
            commit("setSpinner", false);
    },

    async searchProduct({ commit }, title){ 
        commit("setSpinner", true)
        const response = await axios.get(
            `https://api.stifirestop.com/products?page=1&load[]=images&search=${title}`
        ).then(res =>res.data.data).catch(error => console.log(error));
            // console.log(title)
            // console.log(response.data.data)
            commit("setSpinner", false);
        commit('setProducts', response);
    },

    async deleteProduct({ commit }, id) { // for routing
        await axios.delete(`https://api.stifirestop.com/products/${id}?load[]=images`);
    
        commit('removeProduct', id);
    },

    async filterProducts({ commit }, e) { // for pagination
        // Get selected number
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );
    
        const response = await axios.get(
            `https://api.stifirestop.com/products?page=1&limit=${limit}&load[]=images`
        ).then(res =>res.data.data).catch(error => console.log(error));
    
        commit('setProducts', response);
    },
};

const mutations = {
    setProducts: (state, products) => (state.products = products) , 
    removeProduct : (state, id) => state.products = state.products.filter(product => product.id !== id),
    setSpinner: (state, spinner) => state.showSpinner = spinner
};

export default {
    state, getters, actions, mutations
};