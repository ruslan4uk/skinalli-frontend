<template>
    <section class="catalog mb-4 mt-2">
        <b-container fluid>
            <b-row>
                <b-col class="catalog-filter">
                    <h6>Сортировать по:</h6>
                    <div class="catalog-filter__item d-flex flex-wrap justify-content-between">
                        <b-botton class="catalog-filter__btn">По дате</b-botton>
                        <b-botton class="catalog-filter__btn">По популярности</b-botton>
                    </div>
                    <hr />
                    <h6>Сортировать по:</h6>
                    <div class="catalog-filter__item d-flex flex-wrap justify-content-between">
                        <b-botton class="catalog-filter__btn">По дате</b-botton>
                        <b-botton class="catalog-filter__btn">По популярности</b-botton>
                        <b-botton class="catalog-filter__btn">По дате</b-botton>
                        <b-botton class="catalog-filter__btn">По популярности</b-botton>
                        <b-botton class="catalog-filter__btn">По дате</b-botton>
                    </div>
                    <hr />
                    <h6>Сортировать по цвету:</h6>
                    <div class="catalog-filter__item d-flex flex-wrap">
                        <b-botton v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item" class="catalog-filter__color catalog-filter__color--red"></b-botton>
                    </div>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col cols="12"><h4 class="mb-3">Каталог изображений</h4></b-col>
                    </b-row>
                    <b-row class="m-0">
                        <b-col 
                            cols="12" 
                            md="6" 
                            lg="3" 
                            class="mb-1 p-1"
                            v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" :key="item">
                            <nuxt-link :to="{ path: '/catalog/subcatalog/slug' }" class="catalog__item shadow-sm">
                                <img src="~/assets/images/main/jumbotron.jpg" alt="">
                            </nuxt-link>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped lang="sass">
.catalog 
    &__item
        display: block
        border: 1px solid #cccccc

.catalog-filter 
    width: 18rem
    flex: 0 0 18rem
    & h6 
        font-size: 0.875rem
        font-weight: 600
    
    &__btn
        width: calc(50% - 0.25rem)
        background-color: #eee
        text-align: center
        padding: 0.5rem 0.25rem
        font-size: 0.75rem
        transition: all ease 0.4s
        cursor: pointer
        margin: 0.25rem 0
        border-radius: 5px
        &:hover 
            background-color: #ccc

    &__color
        width: calc(100% / 8 - 0.5rem)
        height: 1.5rem
        margin: 0.25rem
        background-color: #eee
        border-radius: 5px
        transition: all ease 0.3s
        cursor: pointer
        position: relative
        &:hover
            box-shadow: 0 0 2px 2px rgba(0,0,0,.1)
            transform: scale(1.15)
        &--red 
            background-color: #db1b1b


</style>