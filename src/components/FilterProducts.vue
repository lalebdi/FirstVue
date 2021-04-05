<template>
    <div>
        Filter Products:
        <select @change="filterProducts($event)">
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "FIlterProducts",
    methods: mapActions(["filterProducts"])
}
</script>

<style lang="scss" scoped>
    select {
    margin-top: 20px;
    padding: 6px;
    border: #41b883 1px solid;
    }
</style>
