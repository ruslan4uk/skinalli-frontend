<template>
    <section class="footer py-5">
        <b-container class="footer-category mb-4">
            <b-row>
                <b-col cols="12" class="mb-3"><h4>Ищите по категориям стоковых изображений</h4></b-col>
                <b-col cols="12" md="3" class="mb-4">
                    <a href="" class="footer-category__link mb-1" v-for="item in [1,2,3,4,5,6,7,8]" :key="item">Название категории</a>
                </b-col>
                <b-col cols="12" md="3" class="mb-4">
                    <a href="" class="footer-category__link mb-1" v-for="item in [1,2,3,4,5,6,7,8]" :key="item">Название категории</a>
                </b-col>
                <b-col cols="12" md="3" class="mb-4">                    
                    <a href="" class="footer-category__link mb-1" v-for="item in [1,2,3,4,5,6,7,8]" :key="item">Название категории</a>
                </b-col>
                <b-col cols="12" md="3" class="mb-4">                    
                    <a href="" class="footer-category__link mb-1" v-for="item in [1,2,3,4,5,6,7,8]" :key="item">Название категории</a>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col cols="12" md="4">
                    <h3>LOGO</h3>
                </b-col>
                <b-col cols="12" md="8">

                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass">
.footer
    border-top: 1px solid #cccccc
    background-color: #f6f6f6

.footer-category 
    &__link 
        display: block
        color: #999999
        &:hover 
            color: #111111
            text-decoration: none
</style>